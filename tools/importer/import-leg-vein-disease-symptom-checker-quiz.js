/* eslint-disable */
/* global WebImporter */

// TRANSFORMER IMPORTS - All transformers found in tools/importer/transformers/
import medtronicCleanupTransformer from './transformers/medtronic-cleanup.js';

// TRANSFORMER REGISTRY
const transformers = [
  medtronicCleanupTransformer,
];

// PAGE TEMPLATE CONFIGURATION - Embedded from page-templates.json
const PAGE_TEMPLATE = {
  name: 'leg-vein-disease-symptom-checker-quiz',
  description: "Interactive Vein Disease Symptom Checker quiz — a self-contained Vue single-page app, vendored and hosted via the custom 'quiz' block.",
  urls: [
    'https://www.medtronic.com/content/dam/medtronic-wide/public/united-states/products/cardiac-vascular/cardiovascular/superficial-vein/symptom-checker-leg-vein-disease/leg-vein-disease-symptom-checker/quiz.html',
  ],
  blocks: [
    { name: 'quiz', instances: ['#quizApp'] },
  ],
};

/**
 * Execute all page transformers for a specific hook.
 */
function executeTransformers(hookName, element, payload) {
  const enhancedPayload = { ...payload, template: PAGE_TEMPLATE };
  transformers.forEach((transformerFn) => {
    try {
      transformerFn.call(null, hookName, element, enhancedPayload);
    } catch (e) {
      console.error(`Transformer failed at ${hookName}:`, e);
    }
  });
}

export default {
  /**
   * The source page is an interactive Vue SPA. Rather than import its (script-driven)
   * DOM, we replace the page body with a single `quiz` block. The block itself
   * (blocks/quiz/quiz.js) vendors and boots the original app, so the imported
   * document only needs to declare the block for EDS to decorate.
   */
  transform: (payload) => {
    const { document, url, params } = payload;

    const main = document.body;

    // Initial cleanup (removes scripts/styles/meta leftovers).
    executeTransformers('beforeTransform', main, payload);

    // Replace the entire page content with a single-cell `quiz` block table.
    // WebImporter.Blocks.createBlock builds the standard EDS block markup that
    // becomes | Quiz | in the authored document.
    const quizBlock = WebImporter.Blocks.createBlock(document, {
      name: 'Quiz',
      cells: [[''.trim()]],
    });

    main.innerHTML = '';
    main.append(quizBlock);

    // Final cleanup hook.
    executeTransformers('afterTransform', main, payload);

    // Metadata + rules.
    const hr = document.createElement('hr');
    main.appendChild(hr);
    WebImporter.rules.createMetadata(main, document);

    const rawPath = new URL(params.originalURL).pathname
      .replace(/\/$/, '')
      .replace(/\.html?$/, '');
    const path = WebImporter.FileUtils.sanitizePath(rawPath === '' ? '/index' : rawPath);

    return [{
      element: main,
      path,
      report: {
        title: document.title,
        template: PAGE_TEMPLATE.name,
        blocks: ['quiz'],
      },
    }];
  },
};
