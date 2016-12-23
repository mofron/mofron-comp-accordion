module.exports = {
    entry: __dirname + '/src/accordion.js',
    output: {
        path: __dirname + '/dist',
        filename: 'accordion.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
