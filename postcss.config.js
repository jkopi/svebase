const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const production = !process.env.ROLLUP_WATCH;

module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    production ? require("autoprefixer") : null,
    production ? cssnano({ preset: "default" }) : null,
    purgecss({
      content: ["./src/**/*.svelte"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
});
