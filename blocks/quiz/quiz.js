/*
 * Quiz block — Vein Disease Symptom Checker
 *
 * This block hosts the original Medtronic interactive quiz (a self-contained Vue 3
 * single-page app) exactly as authored on the source site. The app ships with a
 * global Tailwind stylesheet that resets `*`, `html`, `body`, headings and buttons —
 * loading that into the EDS page would clobber the header, footer and other blocks.
 * To reproduce the original 1:1 without side effects, the app is loaded inside an
 * <iframe> pointing at a standalone, self-contained document (vendor/quiz-app.html).
 *
 * Why a separately-served file (iframe.src) rather than srcdoc: the EDS page ships a
 * strict Content-Security-Policy (nonce + strict-dynamic) via head.html. A srcdoc
 * iframe inherits that CSP and blocks the vendored (non-nonced) Vue/quiz scripts. A
 * document loaded over its own URL has its own (default, permissive) CSP, so the app
 * boots normally.
 *
 * All third-party assets are vendored under blocks/quiz/vendor/ (no external CDNs):
 *   - quiz-app.html       standalone host document (assembled from the template below)
 *   - vue.global.prod.js  Vue 3 full build (includes the in-DOM template compiler)
 *   - quiz.js             the original Parcel bundle (quiz logic + jsPDF/html2canvas)
 *   - index.css           the original Tailwind stylesheet (+ Avenir Next @font-face)
 *   - AvenirNext-*.ttf     the six Avenir Next weights the CSS references
 *   - medtronic_logo.png  the logo used inside the quiz template
 */

// Resolve the standalone quiz document relative to this module so it (and its
// sibling assets) load correctly regardless of where the site is served from.
const QUIZ_APP_URL = new URL('vendor/quiz-app.html', import.meta.url).href;

export default function decorate(block) {
  const iframe = document.createElement('iframe');
  iframe.className = 'quiz-frame';
  iframe.title = 'Vein Disease Symptom Checker';
  iframe.setAttribute('scrolling', 'no');
  iframe.loading = 'lazy';
  iframe.src = QUIZ_APP_URL;
  iframe.style.width = '100%';
  iframe.style.border = '0';
  iframe.style.display = 'block';
  // Sensible starting height; refined via postMessage once the app renders.
  iframe.style.height = '900px';

  // Auto-resize the frame to fit its content (the quiz grows/shrinks per step
  // and the results view is much taller than a single question).
  window.addEventListener('message', (e) => {
    if (e.source === iframe.contentWindow && e.data && e.data.type === 'quiz-resize') {
      const h = Math.max(500, Math.ceil(e.data.height));
      iframe.style.height = `${h}px`;
    }
  });

  block.textContent = '';
  block.append(iframe);
}
