module.exports = {
	// Color
	'color-named': 'never',
	'color-no-hex': null,

	// Function
	'function-disallowed-list': null,
	'function-url-no-scheme-relative': true,
	'function-url-scheme-disallowed-list': null,
	'function-url-scheme-allowed-list': null,
	'function-allowed-list': null,

	// Number
	'number-max-precision': null,

	// Time
	'time-min-milliseconds': null,

	// Unit
	'unit-allowed-list': null,
	'unit-disallowed-list': null,

	// Value
	'value-no-vendor-prefix': true,

	// Custom property
	'custom-property-pattern': null,

	// Property
	'property-disallowed-list': null,
	'property-no-vendor-prefix': true,
	'property-allowed-list': null,

	// Declaration
	'declaration-no-important': true,
	'declaration-property-unit-disallowed-list': null,
	'declaration-property-unit-allowed-list': null,
	'declaration-property-value-disallowed-list': null,
	'declaration-property-value-allowed-list': null,

	// Declaration block
	'declaration-block-single-line-max-declarations': 1,

	// Selector
	'selector-attribute-operator-disallowed-list': null,
	'selector-attribute-operator-allowed-list': null,
	'selector-class-pattern': null,
	'selector-id-pattern': null,
	'selector-max-attribute': null,
	'selector-max-class': null,
	'selector-max-combinators': null,
	'selector-max-compound-selectors': 3,
	'selector-max-empty-lines': 0,
	'selector-max-id': 0,
	'selector-max-specificity': null,
	'selector-max-type': null,
	'selector-max-universal': null,
	'selector-nested-pattern': null,
	'selector-no-qualifying-type': [true, {
		ignore: ['attribute']
	}],
	'selector-no-vendor-prefix': true,
	'selector-pseudo-class-disallowed-list': null,
	'selector-pseudo-class-allowed-list': null,

	// Media feature
	'media-feature-name-disallowed-list': null,
	'media-feature-name-no-vendor-prefix': true,
	'media-feature-name-allowed-list': null,

	// Custom media
	'custom-media-pattern': null,

	// at-rule
	'at-rule-disallowed-list': ['extend'],
	'at-rule-no-vendor-prefix': true,
	'at-rule-allowed-list': null,

	// Comment
	'comment-word-disallowed-list': null
};
