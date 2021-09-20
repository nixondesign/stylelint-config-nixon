module.exports = {
	rules: {
		// Alpha-value
		'alpha-value-notation': 'number',

		// Hue
		'hue-degree-notation': 'number',

		// Color
		'color-function-notation': null,
		'color-named': 'never',
		'color-no-hex': null,

		// Length
		'length-zero-no-unit': true,

		// Font weight
		'font-weight-notation': 'numeric',

		// Function
		'function-allowed-list': null,
		'function-disallowed-list': null,
		'function-url-no-scheme-relative': true,
		'function-url-scheme-allowed-list': null,
		'function-url-scheme-disallowed-list': null,

		// Keyframes
		'keyframes-name-pattern': null,

		// Number
		'number-max-precision': null,

		// Time
		'time-min-milliseconds': null,

		// Unit
		'unit-allowed-list': null,
		'unit-disallowed-list': null,

		// Shorthand property
		'shorthand-property-no-redundant-values': true,

		// Value
		'value-no-vendor-prefix': true,

		// Custom property
		'custom-property-pattern': null,

		// Property
		'property-allowed-list': null,
		'property-disallowed-list': null,
		'property-no-vendor-prefix': true,

		// Declaration
		'declaration-no-important': true,
		'declaration-property-unit-allowed-list': null,
		'declaration-property-unit-disallowed-list': null,
		'declaration-property-value-allowed-list': null,
		'declaration-property-value-disallowed-list': null,

		// Declaration block
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-single-line-max-declarations': 1,

		// Selector
		'selector-attribute-name-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-operator-disallowed-list': null,
		'selector-class-pattern': [/^(?!js-).+$/, {
			message: 'Classes with the "js-" prefix should not be used as selectors.'
		}],
		'selector-combinator-allowed-list': null,
		'selector-combinator-disallowed-list': null,
		'selector-disallowed-list': null,
		'selector-id-pattern': null,
		'selector-max-attribute': null,
		'selector-max-class': null,
		'selector-max-combinators': null,
		'selector-max-compound-selectors': 3,
		'selector-max-empty-lines': 0,
		'selector-max-id': 0,
		'selector-max-pseudo-class': null,
		'selector-max-specificity': null,
		'selector-max-type': null,
		'selector-max-universal': null,
		'selector-nested-pattern': null,
		'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
		'selector-no-vendor-prefix': true,
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-element-allowed-list': null,
		'selector-pseudo-element-disallowed-list': null,
		'selector-pseudo-element-colon-notation': 'double',

		// Media feature
		'media-feature-name-allowed-list': null,
		'media-feature-name-disallowed-list': null,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-value-allowed-list': null,

		// Custom media
		'custom-media-pattern': null,

		// at-rule
		'at-rule-allowed-list': null,
		'at-rule-disallowed-list': ['extend'],
		'at-rule-no-vendor-prefix': true,
		'at-rule-property-required-list':  null,

		// Comment
		'comment-pattern': null,
		'comment-word-disallowed-list': null,

		// General/Sheet
		'max-nesting-depth': 3,
		'no-unknown-animations': null,
	},
};
