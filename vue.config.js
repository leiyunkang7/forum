const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    proxy: "http://localhost:7001"
  },

  css: {
    // modules: true,
    sourceMap: true
  },

  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("layout", resolve("src/layout"))
      .set("api", resolve("src/api"))
      .set("static", resolve("src/static"));
  },

  lintOnSave: undefined
};
