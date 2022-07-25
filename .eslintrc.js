/*
 * @Author: xinxu
 * @Date: 2022-07-25 14:21:48
 * @LastEditors: xinxu
 * @LastEditTime: 2022-07-25 14:36:29
 * @FilePath: /react-vite/.eslintrc.cjs
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // 接入 prettier 的规则
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": "off"
  },
};
