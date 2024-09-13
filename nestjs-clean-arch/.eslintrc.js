module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Recomendações do TypeScript
    'plugin:prettier/recommended', // Integração com Prettier
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'], // Ignora este arquivo de configuração
  rules: {
    // Regras do TypeScript
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // Integração com o Prettier
    'prettier/prettier': ['error', {
      endOfLine: 'auto', // Evita problemas de fim de linha entre sistemas operacionais
    }],
  },
};
