module.exports = {
	// Color
	'color-no-invalid-hex': true,

	// Font family
	'font-family-no-duplicate-names': true,

	// Function
	'function-calc-no-unspaced-operator': true,
	'function-linear-gradient-no-nonstandard-direction': true,

	// String
	'string-no-newline': true,

	// Unit
	'unit-no-unknown': true,

	// Shorthand property
	'shorthand-property-no-redundant-values': true,

	// Property
	'property-no-unknown': true,

	// Keyframe declaration
	'keyframe-declaration-no-important': true,

	// Declaration block
	'declaration-block-no-duplicate-properties': [true, {
		ignore: ['consecutive-duplicates-with-different-values']
	}],
	'declaration-block-no-redundant-longhand-properties': true,
	'declaration-block-no-shorthand-property-overrides': true,

	// Block
	'block-no-empty': true,

	// Selector
	'selector-pseudo-class-no-unknown': true,
	'selector-pseudo-element-no-unknown': true,
	'selector-type-no-unknown': true,

	// Media feature
	'media-feature-name-no-unknown': true,

	// At-rule
	'at-rule-no-unknown': null,

	// Comment
	'comment-no-empty': true,

	// General / Sheet
	'max-nesting-depth': 3,
	'no-descending-specificity': null,
	'no-duplicate-selectors': true,
	'no-empty-source': [true, {
		severity: 'warning'
	}],
	'no-extra-semicolons': true,
	'no-invalid-double-slash-comments': true,
	'no-unknown-animations': null
};
