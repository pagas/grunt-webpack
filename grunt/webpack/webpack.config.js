const path = require('path');
const rootPath = path.resolve(__dirname, '../..');
const nodeModulesPath = path.resolve(__dirname, '../node_modules');

console.log('npm path', nodeModulesPath);

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
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ]
    },
    resolve: {
        modules: [nodeModulesPath],
    },
    resolveLoader: {
        modules: [ nodeModulesPath],
        alias: { txt: 'raw-loader' }
    },
    devtool: 'inline-cheap-source-map',
    watch: true,
    devServer: {
        contentBase: path.resolve(rootPath, "dist"),
        compress: true,
        port: 9000
    }
};