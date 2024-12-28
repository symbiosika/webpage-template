const dayjs = require("dayjs");

module.exports = function (config) {
  // Pass-through images
  config.addPassthroughCopy("./src/images");

  // Pass-through other static files
  config.addPassthroughCopy({ "./src/static": "/" });

  // Pass-through js files
  config.addPassthroughCopy({ "./src/scripts": "/scripts" });

  // Add Date filters
  config.addFilter("date", (dateObj) => {
    return dayjs(dateObj).format("MMMM D, YYYY");
  });

  config.addFilter("sitemapDate", (dateObj) => {
    return dayjs(dateObj).toISOString();
  });

  config.addFilter("year", () => {
    return dayjs().format("YYYY");
  });

  // Add pages collection
  config.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "components",
      data: "defaults",
      output: "dist",
    },
  };
};
