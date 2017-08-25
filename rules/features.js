module.exports = {
	// Color
	'color-named': 'never',
	'color-no-hex': null,

	// Function
	'function-blacklist': null,
	'function-url-no-scheme-relative': true,
	'function-url-scheme-blacklist': null,
	'function-url-scheme-whitelist': null,
	'function-whitelist': null,

	// Number
	'number-max-precision': null,

	// Time
	'time-min-milliseconds': null,

	// Unit
	'unit-blacklist': null,
	'unit-whitelist': null,

	// Value
	'value-no-vendor-prefix': true,

	// Custom property
	'custom-property-pattern': null,

	// Property
	'property-blacklist': null,
	'property-no-vendor-prefix': true,
	'property-whitelist': null,

	// Declaration
	'declaration-no-important': true,
	'declaration-property-unit-blacklist': null,
	'declaration-property-unit-whitelist': null,
	'declaration-property-value-blacklist': null,
	'declaration-property-value-whitelist': null,

	// Declaration block
	'declaration-block-single-line-max-declarations': 1,

	// Selector
	'selector-attribute-operator-blacklist': null,
	'selector-attribute-operator-whitelist': null,
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
	'selector-pseudo-class-blacklist': null,
	'selector-pseudo-class-whitelist': null,

	// Media feature
	'media-feature-name-blacklist': null,
	'media-feature-name-no-vendor-prefix': true,
	'media-feature-name-whitelist': null,

	// Custom media
	'custom-media-pattern': null,

	// at-rule
	'at-rule-blacklist': ['extend'],
	'at-rule-no-vendor-prefix': true,
	'at-rule-whitelist': null,

	// Comment
	'comment-word-blacklist': null
};
