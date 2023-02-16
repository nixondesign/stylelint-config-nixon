module.exports = {
	rules: {
		// Color
		'color-hex-length': ['short', { severity: 'warning' }],

		// Font family
		'font-family-name-quotes': 'always-unless-keyword',

		// Function
		'function-name-case': 'lower',
		'function-url-quotes': 'always',

		// Value
		'value-keyword-case': 'lower',

		// Custom property
		'custom-property-empty-line-before': null,

		// Declaration
		'declaration-empty-line-before': null,

		// Selector
		'selector-attribute-quotes': 'always',
		'selector-type-case': 'lower',

		// Rule
		'rule-empty-line-before': [ 'always', {
			except: ['first-nested'],
			ignore: ['after-comment'],
		}],

		// at-rule
		'at-rule-empty-line-before': ['always', {
			except: ['blockless-after-same-name-blockless', 'first-nested'],
			ignore: ['after-comment'],
			ignoreAtRules: ['else'],
		}],

		// Comment
		'comment-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['stylelint-commands'],
		}],
		'comment-whitespace-inside': 'always',

		// General/Sheet
		'no-irregular-whitespace': true,
	},
};
