/*
 * Assembles the standalone quiz host document (quiz-app.html) that the quiz block
 * loads in an iframe. Keeps quiz-template.html as the pristine vendored source and
 * applies EDS-specific link rewiring here so the served doc navigates correctly:
 *
 *  - "Start Over" links (href="index.html") → the migrated landing page's EDS path,
 *    with target="_top" so the click navigates the whole window, not the iframe.
 *  - Any other link without a target (e.g. external medtronic.com links) gets
 *    target="_top" for the same reason — otherwise it would open inside the frame.
 *
 * Regenerate after editing quiz-template.html:  node build-quiz-app.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

// EDS-served path of the migrated landing page (extensionless).
const LANDING_PATH = '/content/dam/medtronic-wide/public/united-states/products/cardiac-vascular/cardiovascular/superficial-vein/symptom-checker-leg-vein-disease/leg-vein-disease-symptom-checker/index';

let template = readFileSync(join(here, 'quiz-template.html'), 'utf8');

// Rewire "Start Over" links (relative index.html) to the landing page, top-level nav.
template = template.replace(
  /href="index\.html"/g,
  `href="${LANDING_PATH}" target="_top"`,
);

// Ensure every other anchor breaks out of the iframe. Add target="_top" to links
// that don't already declare a target (preserves original target="_blank" links).
template = template.replace(/<a\b([^>]*?)>/g, (tag, attrs) => {
  if (/\btarget\s*=/.test(attrs)) return tag; // keep existing target (e.g. _blank)
  if (!/\bhref\s*=/.test(attrs)) return tag; // skip anchors without href
  return `<a${attrs} target="_top">`;
});

const doc = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vein Disease Symptom Checker</title>
<link rel="stylesheet" href="index.css">
<style>html,body{background:#fff;}body{overflow:hidden;}</style>
</head>
<body class="antialiased bg-gray">
<div class="h-full">
${template}
</div>
<script src="vue.global.prod.js"></script>
<script>
(function(){
  function postHeight(){ parent.postMessage({ type: "quiz-resize", height: document.documentElement.scrollHeight }, "*"); }
  window.addEventListener("load", postHeight);
  var mo = new MutationObserver(postHeight);
  mo.observe(document.documentElement, { subtree:true, childList:true, attributes:true, characterData:true });
  window.addEventListener("resize", postHeight);
})();
</script>
<script src="quiz.js"></script>
</body>
</html>
`;

writeFileSync(join(here, 'quiz-app.html'), doc, 'utf8');
console.log(`wrote quiz-app.html (${doc.length} bytes)`);
