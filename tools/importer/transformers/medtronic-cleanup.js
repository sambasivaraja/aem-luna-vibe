/* eslint-disable */
/* global WebImporter */

/**
 * Transformer: Medtronic site-wide cleanup.
 *
 * Selectors verified against migration-work/cleaned.html (DAM-exported landing page).
 * This page carries no site chrome (no <header>, <footer>, <nav>, sidebar, breadcrumbs,
 * cookie banner, or search) — it is a self-contained DAM index.html. The only
 * non-authorable leftovers in <body> are a stray <meta> element and any
 * script/style/link/noscript/iframe nodes injected by the page shell.
 */

const TransformHook = { beforeTransform: 'beforeTransform', afterTransform: 'afterTransform' };

export default function transform(hookName, element, payload) {
  if (hookName === TransformHook.beforeTransform) {
    // Absolutize relative image srcs before WebImporter.rules.adjustImageUrls runs.
    // The source markup uses bare relative paths (e.g. src="medtronic_logo.png").
    // adjustImageUrls only handles "./", "/", and "../" prefixes — a bare relative
    // path makes its `new URL(src)` throw, and the image gets removed. Resolving
    // against the page URL here keeps the DAM-hosted logo in the imported content.
    const pageUrl = (payload && payload.params && payload.params.originalURL)
      || (payload && payload.url)
      || (element && element.ownerDocument && element.ownerDocument.baseURI);
    if (pageUrl) {
      element.querySelectorAll('img[src]').forEach((img) => {
        const src = img.getAttribute('src');
        if (!src || /^(https?:)?\/\//i.test(src) || src.startsWith('data:')) return;
        try {
          img.src = new URL(src, pageUrl).toString();
        } catch (e) {
          // leave src untouched if it cannot be resolved
        }
      });
    }

    // Rewrite same-page sibling links to their EDS equivalents. The source pages
    // cross-link each other with bare relative filenames (e.g. href="quiz.html",
    // href="index.html"). On EDS those documents are served extensionless and at
    // the same path, so map "<name>.html" (optionally with #hash/?query) → "<name>",
    // and "index(.html)" → the section root ".". Only touch bare relative links
    // that point at a sibling .html file; leave absolute/external/anchor links alone.
    element.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      // skip absolute, protocol-relative, root-relative, anchors, and non-http schemes
      if (/^(https?:)?\/\//i.test(href) || href.startsWith('/')
        || href.startsWith('#') || href.startsWith('mailto:')
        || href.startsWith('tel:') || href.includes(':')) return;
      // only sibling .html links (no path separators before the filename)
      const m = href.match(/^([^/?#]+)\.html(\?[^#]*)?(#.*)?$/i);
      if (!m) return;
      const [, name, query = '', hash = ''] = m;
      const target = name.toLowerCase() === 'index' ? '.' : name;
      a.setAttribute('href', `${target}${query}${hash}`);
    });
  }

  if (hookName === TransformHook.afterTransform) {
    // Remove non-authorable technical elements found in captured DOM (stray <meta>
    // in body) plus standard safe-to-strip shell nodes. None of these are content
    // an author would create when authoring the page.
    WebImporter.DOMUtils.remove(element, [
      'meta',
      'script',
      'style',
      'link',
      'noscript',
      'iframe',
    ]);
  }
}
