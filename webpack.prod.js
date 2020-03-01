const path = require("path");
const common = require("./webpack.common");
// var HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = merge({
  mode: "production", 
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist") //resolve absolute path to this CODE dir
    //so it's going to take w/e the current dir is, so for rge/.../CODE
    //and for someone else machine it would be colt/.../CODE
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //   template: "./src/template.html"
  // })],
  plugins:[new CleanWebpackPlugin()]
 
});
