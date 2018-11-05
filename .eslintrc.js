module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
    "rules": {
        "indent": ["error", 2],
        "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 1}],
        "react/prefer-stateless-function": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};