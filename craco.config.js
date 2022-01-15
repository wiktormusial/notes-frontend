const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@app": "./src/app",
          "@store": "./src/store",
          "@views": "./src/views",
          "@utils": "./src/utils",
        }
      }
    }
  ]
};
