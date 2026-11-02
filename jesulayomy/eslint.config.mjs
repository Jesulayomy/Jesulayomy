import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/static-components": "off"
    }
  }
];

export default eslintConfig;
