/* eslint-disable */
var CustomImportScript = (() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // tools/importer/import-leg-vein-disease-symptom-checker.js
  var import_leg_vein_disease_symptom_checker_exports = {};
  __export(import_leg_vein_disease_symptom_checker_exports, {
    default: () => import_leg_vein_disease_symptom_checker_default
  });

  // tools/importer/transformers/medtronic-cleanup.js
  var TransformHook = { beforeTransform: "beforeTransform", afterTransform: "afterTransform" };
  function transform(hookName, element, payload) {
    if (hookName === TransformHook.afterTransform) {
      WebImporter.DOMUtils.remove(element, [
        "meta",
        "script",
        "style",
        "link",
        "noscript",
        "iframe"
      ]);
    }
  }

  // tools/importer/import-leg-vein-disease-symptom-checker.js
  var transformers = [
    transform
  ];
  var PAGE_TEMPLATE = {
    name: "leg-vein-disease-symptom-checker",
    description: "Vein Disease Symptom Checker intro/landing page. Single section of editorial default content: linked logo, H1, intro paragraph, CTA button, and disclaimer paragraphs. No blocks.",
    urls: [
      "https://www.medtronic.com/content/dam/medtronic-wide/public/united-states/products/cardiac-vascular/cardiovascular/superficial-vein/symptom-checker-leg-vein-disease/leg-vein-disease-symptom-checker/index.html"
    ],
    blocks: [],
    sections: [
      {
        id: "s1",
        name: "intro",
        selector: [".max-w-5xl.bg-white", "#headerLogos"],
        style: null,
        blocks: [],
        defaultContent: [
          "#headerLogos a img",
          "h1",
          "p",
          'a[href$="quiz.html"]',
          ".mt-16 p"
        ]
      }
    ]
  };
  function executeTransformers(hookName, element, payload) {
    const enhancedPayload = __spreadProps(__spreadValues({}, payload), {
      template: PAGE_TEMPLATE
    });
    transformers.forEach((transformerFn) => {
      try {
        transformerFn.call(null, hookName, element, enhancedPayload);
      } catch (e) {
        console.error(`Transformer failed at ${hookName}:`, e);
      }
    });
  }
  var import_leg_vein_disease_symptom_checker_default = {
    /**
     * Main transformation function.
     * This template is entirely default content (no blocks), so no parsers run —
     * the transform orchestrates DOM cleanup transformers and the built-in rules.
     */
    transform: (payload) => {
      const { document, url, html, params } = payload;
      const main = document.body;
      executeTransformers("beforeTransform", main, payload);
      executeTransformers("afterTransform", main, payload);
      const hr = document.createElement("hr");
      main.appendChild(hr);
      WebImporter.rules.createMetadata(main, document);
      WebImporter.rules.transformBackgroundImages(main, document);
      WebImporter.rules.adjustImageUrls(main, url, params.originalURL);
      const rawPath = new URL(params.originalURL).pathname.replace(/\/$/, "").replace(/\.html?$/, "");
      const path = WebImporter.FileUtils.sanitizePath(rawPath === "" ? "/index" : rawPath);
      return [{
        element: main,
        path,
        report: {
          title: document.title,
          template: PAGE_TEMPLATE.name,
          blocks: []
        }
      }];
    }
  };
  return __toCommonJS(import_leg_vein_disease_symptom_checker_exports);
})();
