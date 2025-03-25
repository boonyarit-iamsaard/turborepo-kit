import simpleImportSort from "eslint-plugin-simple-import-sort";
import baseConfig from "./base.js";

/** @type {import('typescript-eslint').Config} */
export default [
  ...baseConfig,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
