const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
			{
				test: /.ts$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/typescript', '@babel/preset-env']
					}
				}
			},
			{
				test: /\.tsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/typescript',
							'@babel/preset-react',
							'@babel/preset-env'
						]
					}
				}
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
}
