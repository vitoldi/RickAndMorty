module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": "off"
    },
    "overrides": [
        {
          "files": ["*.test.js","setupTests.js"],
          "rules": {
            "no-unused-expressions": "off",
            "react/no-unescaped-entities": 0
          }
        }
      ]
};
