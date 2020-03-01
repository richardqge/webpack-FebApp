const path = require("path");

module.exports = {
  mode: "development", 
  entry: "./src/index.js", //explicitly telling it now
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist") //resolve absolute path to this CODE dir
    //so it's going to take w/e the current dir is, so for rge/.../CODE
    //and for someone else machine it would be colt/.../CODE
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]

      }
    ]
  }
};
