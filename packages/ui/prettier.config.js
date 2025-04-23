import baseConfig from "@repo/prettier-config/base";
import withSortImportsConfig from "@repo/prettier-config/with-sort-imports";
import withTailwindConfig from "@repo/prettier-config/with-tailwind";

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig & SortImportsConfig & TailwindConfig } */
const config = {
  ...baseConfig,
  ...withSortImportsConfig,
  ...withTailwindConfig,
  plugins: [
    ...(baseConfig.plugins ?? []),
    ...(withSortImportsConfig.plugins ?? []),
    ...(withTailwindConfig.plugins ?? []),
  ],
};

export default config;
