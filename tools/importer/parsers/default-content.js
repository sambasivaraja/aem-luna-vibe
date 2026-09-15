/* eslint-disable */
/* global WebImporter */

/**
 * Parser: default-content (no-op).
 *
 * This template (leg-vein-disease-symptom-checker) is entirely default content —
 * the page has no blocks, so this parser is never invoked by the import script
 * (its PAGE_TEMPLATE.blocks array is empty). It exists only to satisfy the bulk
 * import pre-flight check, which requires at least one parser file in
 * tools/importer/parsers/. Leaving the element untouched preserves it as default
 * content.
 *
 * @param {Element} element - The block element (unused for default content).
 * @param {Object} context - { document, url, params }.
 */
export default function parse(element /* , { document, url, params } */) {
  // Intentionally no transformation — default content is emitted as-is.
  return element;
}
