const path = require('path');
const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            new CleanWebpackPlugin()
        ],
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'bundle.js',
          },
    }
)
