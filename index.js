module.exports = {
	rules: {

		'alpha-value-notation': 'number',
		'annotation-no-unknown': false,
		'at-rule-allowed-list': null,
		'at-rule-disallowed-list': ['extend'],
		'at-rule-empty-line-before': ['always', { except: ['blockless-after-same-name-blockless', 'first-nested'], ignore: ['after-comment'], ignoreAtRules: ['else'] }],
		'at-rule-no-unknown': null,
		'at-rule-no-vendor-prefix': true,
		'at-rule-property-required-list':  null,
		'block-no-empty': true,
		'color-function-notation': null,
		'color-hex-alpha': null,
		'color-hex-length': ['short', { severity: 'warning' }],
		'color-named': 'never',
		'color-no-hex': null,
		'color-no-invalid-hex': true,
		'comment-empty-line-before': ['always', { except: ['first-nested'], ignore: ['stylelint-commands'] }],
		'comment-no-empty': true,
		'comment-pattern': null,
		'comment-whitespace-inside': 'always',
		'comment-word-disallowed-list': null,
		'custom-media-pattern': null,
		'custom-property-empty-line-before': null,
		'custom-property-no-missing-var-function': true,
		'custom-property-pattern': null,
		'declaration-block-no-duplicate-custom-properties': true,
		'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates-with-different-values'] }],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-single-line-max-declarations': 1,
		'declaration-empty-line-before': null,
		'declaration-no-important': true,
		'declaration-property-max-values': null,
		'declaration-property-unit-allowed-list': null,
		'declaration-property-unit-disallowed-list': null,
		'declaration-property-value-allowed-list': null,
		'declaration-property-value-disallowed-list': null,
		'declaration-property-value-no-unknown': true,
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': null,
		'font-weight-notation': 'numeric',
		'function-allowed-list': null,
		'function-calc-no-unspaced-operator': true,
		'function-disallowed-list': null,
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-name-case': 'lower',
		'function-url-no-scheme-relative': true,
		'function-url-quotes': 'always',
		'function-url-scheme-allowed-list': null,
		'function-url-scheme-disallowed-list': null,
		'hue-degree-notation': 'number',
		'import-notation': null,
		'keyframe-block-no-duplicate-selectors': true,
		'keyframe-declaration-no-important': true,
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
		'keyframes-name-pattern': null,
		'length-zero-no-unit': true,
		'max-nesting-depth': 3,
		'media-feature-name-allowed-list': null,
		'media-feature-name-disallowed-list': null,
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-name-unit-allowed-list': null,
		'media-feature-name-value-allowed-list': null,
		'media-feature-range-notation': null,
		'named-grid-areas-no-invalid': true,
		'no-descending-specificity': null,
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': [true, { severity: 'warning' }],
		'no-invalid-double-slash-comments': true,
		'no-invalid-position-at-import-rule': true,
		'no-irregular-whitespace': true,
		'no-unknown-animations': null,
		'number-max-precision': null,
		'property-allowed-list': null,
		'property-disallowed-list': null,
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [ 'always', { except: ['first-nested'], ignore: ['after-comment'] }],
		'rule-selector-property-disallowed-list': null,
		'selector-attribute-name-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-operator-disallowed-list': null,
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': [/^(?!js-).+$/, { message: 'Classes with the "js-" prefix should not be used as selectors.' }],
		'selector-combinator-allowed-list': null,
		'selector-combinator-disallowed-list': null,
		'selector-disallowed-list': null,
		'selector-id-pattern': null,
		'selector-max-attribute': null,
		'selector-max-class': null,
		'selector-max-combinators': null,
		'selector-max-compound-selectors': 3,
		'selector-max-id': 0,
		'selector-max-pseudo-class': null,
		'selector-max-specificity': null,
		'selector-max-type': null,
		'selector-max-universal': null,
		'selector-nested-pattern': null,
		'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
		'selector-no-vendor-prefix': true,
		'selector-not-notation': null,
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-allowed-list': null,
		'selector-pseudo-element-colon-notation': 'double',
		'selector-pseudo-element-disallowed-list': null,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'string-no-newline': true,
		'time-min-milliseconds': null,
		'unit-allowed-list': null,
		'unit-disallowed-list': null,
		'unit-no-unknown': true,
		'value-keyword-case': 'lower',
		'value-no-vendor-prefix': true,
	}
};
