const webpackConfig = require('./webpack.config');

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig,
            //dev: Object.assign({ watch: true }, webpackConfig)
            dev: webpackConfig
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
};