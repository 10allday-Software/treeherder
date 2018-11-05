module.exports = {
  root: true,
  extends: 'eslint-config-airbnb',
  parser: 'babel-eslint',
  settings: {
    react: {
      version: '16.6',
    },
  },
  env: {
    browser: true,
    jasmine: true,
  },
  rules: {
    // TODO: Fix & remove the majority of these deviations from AirBnB style (bug 1183749).
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    // Indentation is disabled pending a switch from 4 to 2 space for JS.
    indent: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-multi-comp': 'off',
  },
};
