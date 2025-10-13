module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("src/assets/photos");
  // eleventyConfig.addPassthroughCopy("src/assets/fonts"); Try font-face CSS again w this
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};