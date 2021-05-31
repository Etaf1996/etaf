const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = {
    entry:  {
      app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
      },
  
  mode: "development", 
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 1239,
    overlay: true,//for errors
    writeToDisk: true,
    open:true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            }

          }
        ]

      },
      {
        test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../'
                }
              },
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          }
        ]
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }
      },
    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "turky.html",
      template: "./src/turky.html",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
    }),
    new HtmlWebpackPlugin({
      filename: "newaccount.html",
      template: "./src/newaccount.html",
    }),
    new HtmlWebpackPlugin({
      filename: "egypt.html",
      template: "./src/egypt.html",
    }),
    
    new MiniCssExtractPlugin ({filename:"css/style.css" }),


  ],

};