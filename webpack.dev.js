const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development", 
  entry: "./src/index.js", //explicitly telling it now
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist") //resolve absolute path to this CODE dir
    //so it's going to take w/e the current dir is, so for rge/.../CODE
    //and for someone else machine it would be colt/.../CODE
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //   template: "./src/template.html"
  // })],

});
