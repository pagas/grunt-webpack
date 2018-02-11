const path = require('path');
const rootPath = path.resolve(__dirname, '..');

module.exports = {
    entry: path.resolve(rootPath, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(rootPath, 'dist')
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loaders: 'buble-loader',
                include: path.resolve(rootPath, 'src'),
                query: {
                    objectAssign: 'Object.assign'
                }
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./node_modules')
        ],
    },
    devtool: 'inline-cheap-source-map',
    watch: true,
    devServer: {
        contentBase: path.resolve(rootPath, "dist"),
        compress: true,
        port: 9000
    }
};