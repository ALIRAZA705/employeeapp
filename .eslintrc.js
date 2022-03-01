module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        // "linebreak-style": ["error", "windows"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        // "space-before-function-paren": ["error", "always"],
        "comma-spacing": ["error", { before: false, after: true }],
        "no-multi-spaces": 2,
        "no-trailing-spaces": 2,
        "one-var": ["error", "never"],
        "no-return-await": 2,
        "no-unused-vars": ["error", { args: "none" }],
        "react/prop-types": "off",
    },
};
