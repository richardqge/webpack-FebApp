const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   
  entry: "./src/index.js", //explicitly telling it now
  // output: {
  //   filename: "main.[contentHash].js",
  //   path: path.resolve(__dirname, "dist") //resolve absolute path to this CODE dir
  //   //so it's going to take w/e the current dir is, so for rge/.../CODE
  //   //and for someone else machine it would be colt/.../CODE
  // },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
        "style-loader", //3. inject styles into DOM
        "css-loader",   //2. turns css into commonjs
        "sass-loader"   //1. turns sass into css
      ]
      },
      {
        test: /\.html$/,
        use:[
          "html-loader",
        ]
      },
      {
        test:/\.(svg|png|jpg|gif)$/,
        use:{
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"

          }
        }

      }
    ]
  }
};
