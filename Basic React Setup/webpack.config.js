const path = require('path');

module.exports = {
	mode: 'development',
	entry: `${__dirname}/Frontend/src/index.js`,
	output: {
		path: path.resolve(`${__dirname}/Frontend/dist`),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
