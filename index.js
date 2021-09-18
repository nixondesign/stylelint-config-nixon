module.exports = {
	plugins: [
		'stylelint-scss'
	],
	rules: Object.assign(
		require('./rules/errors.js'),
		require('./rules/features.js'),
		require('./rules/scss.js'),
		require('./rules/style.js')
	)
};
