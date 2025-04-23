import { relative } from "node:path";
import { cwd } from "node:process";

/**
 * @param {string[]} filenames
 * @returns {string[]}
 */
function buildEslintCommand(filenames) {
  /**
   * Excludes configuration files (like *.config.js) from the ESLint command run by lint-staged.
   * These are typically ignored by the main ESLint configuration (@repo/eslint-config/base).
   * Filtering here avoids potential issues during pre-commit checks.
   */
  const filteredFilenames = filenames.filter((f) => !f.endsWith(".config.js"));
  if (filteredFilenames.length === 0) {
    return [];
  }

  return [
    `eslint ${filteredFilenames.map((f) => relative(cwd(), f)).join(" ")}`,
  ];
}

/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*": ["prettier --check --ignore-path ../../.prettierignore"],
  "*.{js,jsx,ts,tsx,cjs,mjs}": buildEslintCommand,
};

export default config;
