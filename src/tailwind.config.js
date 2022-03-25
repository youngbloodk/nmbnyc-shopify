/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				syne: ['Syne', 'icons'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'), require('@tailwindcss/aspect-ratio')],
	content: [path.resolve(__dirname, '**/*.{js,vue}'), path.resolve(__dirname, '../shopify/**/*.liquid')],
}
