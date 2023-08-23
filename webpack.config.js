import { resolve }              from 'path';
import { readFile }             from 'fs/promises';
import yaml                     from 'js-yaml';
import CssMinimizerPlugin       from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin     from 'mini-css-extract-plugin';
import TerserPlugin             from 'terser-webpack-plugin';
import HtmlPlugin               from 'html-webpack-plugin';
import CopyPlugin               from 'copy-webpack-plugin';
import WatchExternalFilesPlugin from 'webpack-watch-files-plugin';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getPageData (file, settings)
{
	return async () => ({
		...yaml.load(
			await readFile(file, 'utf8')
		),
		'__settings__' : settings
	});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default async function config ({
	output = 'site', baseUri = '/'
} = {})
{
	return {

		mode : 'production',

		entry :
		{
			'cv' : [
				'./src/cv.js'
			]
		},

		output :
		{
			path : resolve(output),
			library : 'cv',
			filename : 'js/[contenthash].js',
			assetModuleFilename : 'assets/[contenthash][ext]',
			publicPath : baseUri
		},

		target :
		[
			'web',
			'es5'
		],

		optimization :
		{
			minimizer :
			[
				// JavaScript.
				new TerserPlugin({
					extractComments : false
				}),

				// Stylesheets.
				new CssMinimizerPlugin()
			],

			minimize : true
		},

		module :
		{
			rules :
			[
				{ // JavaScript.
					use :
					[
						{
							loader : 'babel-loader'
						}
					],
					test : /\.js$/
				},

				{ // Stylesheets.
					use :
					[
						MiniCssExtractPlugin.loader,
						{
							loader : 'css-loader'
						},
						{
							loader : 'less-loader'
						}
					],
					test : /\.less$/
				},

				{ // Handlebars.
					use :
					[
						{
							loader : 'handlebars-loader',
							options :
							{
								helperDirs : [
									resolve('./src/templates/helpers')
								],

								partialDirs : [
									resolve('./src/templates/partials')
								]
							}
						}
					],
					test : /\.hbs$/
				},

				{ // File Assets.
					type : 'asset/resource',
					test : /\.(png)$/
				},

				{ // Inline Assets.
					type : 'asset/inline',
					test : /\.(svg)$/
				}
			]
		},

		plugins :
		[
			new MiniCssExtractPlugin({
				filename : 'css/[contenthash].css',
				chunkFilename : 'css/[contenthash].css'
			}),

			new HtmlPlugin({
				filename : 'index.html',
				minify : true,
				template : './src/templates/cv.hbs',
				templateParameters : getPageData('data/cv.yaml', {
					baseUri
				}),
				chunks : ['cv']
			}),

			new CopyPlugin({
				patterns :
				[
					{ // Images.
						from : './data/images',
						to : 'images'
					}
				]
			}),

			new WatchExternalFilesPlugin.default({ // eslint-disable-line new-cap
				files : ['./data/**/*']
			})
		],

		devtool : false
	};
}
