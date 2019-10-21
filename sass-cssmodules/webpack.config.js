const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, argv) {
  const isProduction = argv.mode === 'production';

  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "./dist"),
      filename: "index-bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  'src/styles/_variables.sass',
                  'src/styles/_colors.sass',
                  'src/styles/_mixins.sass',
                ],
              },
            },
          ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index-bundle.css',
      }),
      new HtmlWebpackPlugin({
        template: "./index.html"
      })
    ]
  };
}
