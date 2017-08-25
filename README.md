# stylelint-config-nixon

## Installation

```
npm install stylelint-config-nixon --save-dev
```

## Usage

```json
{
  "extends": "stylelint-config-nixon"
}
```

### Extending the config

Simply add a "rules" key to your config, then add your overrides and additions there.

For example, to change the `indentation` rule to use spaces:

```json
{
  "extends": "stylelint-config-nixon",
	"rules": {
		"indentation": 2
	}
}
```
