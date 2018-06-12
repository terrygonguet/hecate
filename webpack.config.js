const path = require("path");

module.exports = {
    entry: {
        background: "./src/background/background.js",
        popup: "./src/popup/popup.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]/[name].js"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    }
};
