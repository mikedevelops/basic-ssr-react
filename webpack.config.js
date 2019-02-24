const path = require('path');

const dist = path.join(__dirname, 'dist');
const base = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};

const client = Object.assign({}, base, {
    entry: './src/index.js',
    output: {
        filename: 'client.bundle.js',
        path: dist
    }
});

const server = Object.assign({}, base, {
    entry: './src/server.js',
    output: {
        filename: 'server.bundle.js',
        path: dist
    },
    target: 'node'
});

module.exports = [client, server];

