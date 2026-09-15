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

  // tools/importer/import-leg-vein-disease-symptom-checker-quiz.js
  var import_leg_vein_disease_symptom_checker_quiz_exports = {};
  __export(import_leg_vein_disease_symptom_checker_quiz_exports, {
    default: () => import_leg_vein_disease_symptom_checker_quiz_default
  });

  // tools/importer/transformers/medtronic-cleanup.js
  var TransformHook = { beforeTransform: "beforeTransform", afterTransform: "afterTransform" };
  function transform(hookName, element, payload) {
    if (hookName === TransformHook.beforeTransform) {
      const pageUrl = payload && payload.params && payload.params.originalURL || payload && payload.url || element && element.ownerDocument && element.ownerDocument.baseURI;
      if (pageUrl) {
        element.querySelectorAll("img[src]").forEach((img) => {
          const src = img.getAttribute("src");
          if (!src || /^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return;
          try {
            img.src = new URL(src, pageUrl).toString();
          } catch (e) {
          }
        });
      }
    }
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

  // tools/importer/import-leg-vein-disease-symptom-checker-quiz.js
  var transformers = [
    transform
  ];
  var PAGE_TEMPLATE = {
    name: "leg-vein-disease-symptom-checker-quiz",
    description: "Interactive Vein Disease Symptom Checker quiz \u2014 a self-contained Vue single-page app, vendored and hosted via the custom 'quiz' block.",
    urls: [
      "https://www.medtronic.com/content/dam/medtronic-wide/public/united-states/products/cardiac-vascular/cardiovascular/superficial-vein/symptom-checker-leg-vein-disease/leg-vein-disease-symptom-checker/quiz.html"
    ],
    blocks: [
      { name: "quiz", instances: ["#quizApp"] }
    ]
  };
  function executeTransformers(hookName, element, payload) {
    const enhancedPayload = __spreadProps(__spreadValues({}, payload), { template: PAGE_TEMPLATE });
    transformers.forEach((transformerFn) => {
      try {
        transformerFn.call(null, hookName, element, enhancedPayload);
      } catch (e) {
        console.error(`Transformer failed at ${hookName}:`, e);
      }
    });
  }
  var import_leg_vein_disease_symptom_checker_quiz_default = {
    /**
     * The source page is an interactive Vue SPA. Rather than import its (script-driven)
     * DOM, we replace the page body with a single `quiz` block. The block itself
     * (blocks/quiz/quiz.js) vendors and boots the original app, so the imported
     * document only needs to declare the block for EDS to decorate.
     */
    transform: (payload) => {
      const { document, url, params } = payload;
      const main = document.body;
      executeTransformers("beforeTransform", main, payload);
      const quizBlock = WebImporter.Blocks.createBlock(document, {
        name: "Quiz",
        cells: [["".trim()]]
      });
      main.innerHTML = "";
      main.append(quizBlock);
      executeTransformers("afterTransform", main, payload);
      const hr = document.createElement("hr");
      main.appendChild(hr);
      WebImporter.rules.createMetadata(main, document);
      const rawPath = new URL(params.originalURL).pathname.replace(/\/$/, "").replace(/\.html?$/, "");
      const path = WebImporter.FileUtils.sanitizePath(rawPath === "" ? "/index" : rawPath);
      return [{
        element: main,
        path,
        report: {
          title: document.title,
          template: PAGE_TEMPLATE.name,
          blocks: ["quiz"]
        }
      }];
    }
  };
  return __toCommonJS(import_leg_vein_disease_symptom_checker_quiz_exports);
})();
