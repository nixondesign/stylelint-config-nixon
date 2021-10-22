# stylelint-config-nixon

## Installation

```
npm install stylelint-config-nixon --save-dev
```

## Usage

This package contains the following configurations:

- `stylelint-config-nixon`
- `stylelint-config-nixon/scss`
- `stylelint-config-nixon/prettier`

### stylelint-config-nixon

Contains our standard rules to be used across all projects.

```json
{
  "extends": "stylelint-config-nixon"
}
```

### stylelint-config-nixon/scss

Contains rules specific to SASS/SCSS. Requires the [stylelint-scss](https://github.com/kristerkari/stylelint-scss) plugin and the [postcss-scss](https://github.com/postcss/postcss-scss) parser.

```
npm install --save-dev stylelint-scss postcss-scss
```

```json
{
  "extends": [
    "stylelint-config-nixon",
    "stylelint-config-nixon/scss"
  ],
  "customSyntax": "postcss-scss",
}
```

### stylelint-config-nixon/prettier

Contains rules for usage with [Prettier](https://prettier.io/) that disable stylistic rules that could conflict with Prettier's own stylistic conventions.

This configuration should always come last.

```json
{
  "extends": [
    "stylelint-config-nixon",
    "stylelint-config-nixon/prettier"
  ]
}
```