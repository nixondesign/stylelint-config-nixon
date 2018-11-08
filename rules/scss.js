module.exports = {
	// Else
	'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
	'scss/at-else-closing-brace-space-after': 'always-intermediate',
	'scss/at-else-empty-line-before': 'never',
	'scss/at-else-if-parentheses-space-before': 'always',

	// Function
	'scss/at-function-parentheses-space-before': 'never',

	// If
	'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
	'scss/at-if-closing-brace-space-after': 'always-intermediate',

	// Import
	'scss/at-import-no-partial-leading-underscore': true,
	'scss/at-import-partial-extension-blacklist': ['scss'],

	// Mixin
	'scss/at-mixin-argumentless-call-parentheses': 'always',
	'scss/at-mixin-parentheses-space-before': 'never',

	// at-rule
	'scss/at-rule-no-unknown': true,

	// Variables
	'scss/dollar-variable-colon-space-after': 'always-single-line',
	'scss/dollar-variable-colon-space-before': 'never',
	'scss/dollar-variable-no-missing-interpolation': true,

	// Comment
	'scss/double-slash-comment-empty-line-before': ['always', {
		except: ['first-nested'],
		ignore: ['between-comments', 'stylelint-commands']
	}],
	'scss/double-slash-comment-whitespace-inside': 'always',

	// Declaration
	'scss/declaration-nested-properties': 'never',

	// Operator
	'scss/operator-no-newline-after': true,
	'scss/operator-no-newline-before': true,
	'scss/operator-no-unspaced': true,

	// Partial
	'scss/partial-no-import': null,

	// Selector
	'scss/selector-no-redundant-nesting-selector': true
};
