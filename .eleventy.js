module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("src/assets/photos");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};