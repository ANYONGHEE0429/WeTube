const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = (__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rulse: [
      {
        test: /\(.scss)$/,
        use: ExtractCSS.extract([
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugin() {
                return [autoprefixer({ browsers: "cover:99.5%" })];
              },
            },
          },
          {
            loader: "saas-loader",
          },
        ]),
      },
    ],
  },
  ouptut: {
    path: OUTPUT_DIR,
    fileName: "[name].[format]",
  },
};

module.exports = config;
