import js from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  {
    ignores: [
      "node_modules/**",
      "app/assets/vendor/**",
      "test/**"
    ],
    plugins: {
      security,
    },
    rules: {
      "security/detect-object-injection": "warn",
      "security/detect-unsafe-regex": "warn",
      "security/detect-child-process": "warn",
      "security/detect-non-literal-require": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-eval-with-expression": "warn",
      "no-undef": "off",
      "no-unused-vars": "off"
    },
  }
];