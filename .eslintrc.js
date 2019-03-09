module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    parser: "babel-eslint",
    'extends': [
        // 'plugin:react/recommended',
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
    }
};