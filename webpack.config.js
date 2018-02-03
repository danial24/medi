var webpack = require('webpack');
var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');

var isProduction = false;

var getPlugins = function(){
    var pluginsList = [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: 2,
        filename: isProduction ? 'vendor.bundle_[hash].js' : 'vendor.bundle.js'
      }),
  
    //   new webpack.DefinePlugin({
    //     'process.env': { NODE_ENV: JSON.stringify(config.env) }
    //   }),
  
      new webpack.NamedModulesPlugin(),
      new ManifestPlugin({
        fileName: 'build-manifest.json'
      }),
      // new BundleAnalyzerPlugin()
    ];
   if(isProduction ){
      pluginsList.push(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }));
    //   pluginsList.push(new webpack.optimize.UglifyJsPlugin());
      // pluginsList.push(new webpack.optimize.AggressiveMergingPlugin());
    }
    return pluginsList;
  }


  module.exports = {
     

    entry: {
        index: [
            './main.js'
        ],
        vendor: [
          'react', 'react-dom','phrontend'
        ]
      },

    // output: {
    //    path:'/',
    //    filename: 'index.js',
    // },
    output: {
        path:path.join(__dirname, "dist/js"),
        filename: (isProduction ? "[name]_[hash].js" : "[name].js"),
        chunkFilename: (isProduction ? "[name]_[hash].js" : "[name].js"),
        publicPath:"/js/"
      },
     
    devServer: {
        contentBase: path.join(__dirname, "dist"),      
       inline: true,
       port: 80
    },
    plugins: getPlugins(),    
    module: {

        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
             }
          ]
    }
 }
