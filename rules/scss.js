module.exports = {
	plugins: [
		'stylelint-scss'
	],
	rules: {
		// @each
		'scss/at-each-key-value-single-line': true,

		// @else
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-else-if-parentheses-space-before': 'always',

		// @extend
		'scss/at-extend-no-missing-placeholder': true,

		// @function
		'scss/at-function-named-arguments': null,
		'scss/at-function-parentheses-space-before': 'never',
		'scss/at-function-pattern': null,

		// @if
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
		'scss/at-if-no-null': null,

		// @import
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension': 'never',
		'scss/at-import-partial-extension-blacklist': null,
		'scss/at-import-partial-extension-whitelist': null,

		// @mixin
		'scss/at-mixin-argumentless-call-parentheses': 'always',
		'scss/at-mixin-named-arguments': null,
		'scss/at-mixin-parentheses-space-before': 'never',
		'scss/at-mixin-pattern': null,

		// @rule
		'scss/at-rule-no-unknown': true,
		'scss/at-rule-conditional-no-parentheses': null,

		// Variables
		'scss/dollar-variable-colon-newline-after': 'always-multi-line',
		'scss/dollar-variable-colon-space-after': 'always-single-line',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-default': null,
		'scss/dollar-variable-empty-line-after': null,
		'scss/dollar-variable-empty-line-before': null,
		'scss/dollar-variable-first-in-block': null,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/dollar-variable-pattern': null,

		// Placeholder
		'scss/percent-placeholder-pattern': null,

		// Double slash comment
		'scss/double-slash-comment-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['between-comments', 'stylelint-commands'],
		}],
		'scss/double-slash-comment-inline': null,
		'scss/double-slash-comment-whitespace-inside': 'always',

		// Comment
		'comment-no-empty': null,
		'scss/comment-no-empty': true,
		'scss/comment-no-loud': null,

		// Declaration
		'scss/declaration-nested-properties': 'never',
		'scss/declaration-nested-properties-no-divided-groups': true,

		// Dimension
		'scss/dimension-no-non-numeric-values': true,

		// Function
		'scss/function-color-relative': true,
		'scss/function-quote-no-quoted-strings-inside': null,
		'scss/function-unquote-no-unquoted-strings-inside': null,

		// Map
		'scss/map-keys-quotes': 'always',

		// Media feature
		'scss/media-feature-value-dollar-variable': null,

		// Operator
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,

		// Partial
		'scss/partial-no-import': null,

		// Selector
		'scss/selector-nest-combinators': null,
		'scss/selector-no-redundant-nesting-selector': true,
		'scss/selector-no-union-class-name': true,

		// General/sheet
		'scss/no-dollar-variables': null,
		'scss/no-duplicate-dollar-variables': [true, {
			ignoreDefaults: true,
			ignoreInside: ['at-rule', 'nested-at-rule'],
		}],
		'scss/no-duplicate-mixins': true,
		'scss/no-global-function-names': true,
	},
};
