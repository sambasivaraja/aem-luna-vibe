/* eslint-disable */
/* global WebImporter */

// TRANSFORMER IMPORTS - All transformers found in tools/importer/transformers/
import medtronicCleanupTransformer from './transformers/medtronic-cleanup.js';

// TRANSFORMER REGISTRY - Array of transformer functions
const transformers = [
  medtronicCleanupTransformer,
];

// PAGE TEMPLATE CONFIGURATION - Embedded from page-templates.json
const PAGE_TEMPLATE = {
  name: 'leg-vein-disease-symptom-checker',
  description: 'Vein Disease Symptom Checker intro/landing page. Single section of editorial default content: linked logo, H1, intro paragraph, CTA button, and disclaimer paragraphs. No blocks.',
  urls: [
    'https://www.medtronic.com/content/dam/medtronic-wide/public/united-states/products/cardiac-vascular/cardiovascular/superficial-vein/symptom-checker-leg-vein-disease/leg-vein-disease-symptom-checker/index.html',
  ],
  blocks: [],
  sections: [
    {
      id: 's1',
      name: 'intro',
      selector: ['.max-w-5xl.bg-white', '#headerLogos'],
      style: null,
      blocks: [],
      defaultContent: [
        '#headerLogos a img',
        'h1',
        'p',
        'a[href$="quiz.html"]',
        '.mt-16 p',
      ],
    },
  ],
};

/**
 * Execute all page transformers for a specific hook
 * @param {string} hookName - The hook name ('beforeTransform' or 'afterTransform')
 * @param {Element} element - The DOM element to transform (typically document.body or main)
 * @param {Object} payload - The payload containing { document, url, html, params }
 */
function executeTransformers(hookName, element, payload) {
  const enhancedPayload = {
    ...payload,
    template: PAGE_TEMPLATE,
  };

  transformers.forEach((transformerFn) => {
    try {
      transformerFn.call(null, hookName, element, enhancedPayload);
    } catch (e) {
      console.error(`Transformer failed at ${hookName}:`, e);
    }
  });
}

// EXPORT DEFAULT CONFIGURATION
export default {
  /**
   * Main transformation function.
   * This template is entirely default content (no blocks), so no parsers run —
   * the transform orchestrates DOM cleanup transformers and the built-in rules.
   */
  transform: (payload) => {
    const { document, url, html, params } = payload;

    const main = document.body;

    // 1. Execute beforeTransform transformers (initial cleanup)
    executeTransformers('beforeTransform', main, payload);

    // 2. No blocks on this template — nothing to parse.

    // 3. Execute afterTransform transformers (final cleanup)
    executeTransformers('afterTransform', main, payload);

    // 4. Apply WebImporter built-in rules
    const hr = document.createElement('hr');
    main.appendChild(hr);
    WebImporter.rules.createMetadata(main, document);
    WebImporter.rules.transformBackgroundImages(main, document);
    WebImporter.rules.adjustImageUrls(main, url, params.originalURL);

    // 5. Generate sanitized path (full localized path without extension).
    //    Map the root/homepage URL to `/index` to avoid the bundled importer's
    //    empty-path crash (`.cwd is not a function`).
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
        blocks: [],
      },
    }];
  },
};
