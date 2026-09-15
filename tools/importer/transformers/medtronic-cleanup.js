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
