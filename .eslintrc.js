module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-trailing-spaces': 'off',
    'no-console': 'off',
    'space-in-parens': 'off',
    'camelcase': 'off',
    'import/order': 'off',
    'require-await': 'off',
    'vue/require-component-is': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // set maximum line characters
    'max-len': [2, 140, 4, { 'ignoreUrls': true, 'ignoreTemplateLiterals': true, 'ignoreStrings': true }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-return-assign': 0,
    // disallow indentation using both tabs and spaces
    'no-mixed-spaces-and-tabs': 2,
    // ensure consistent 2 space indentation and indent cases under switch
    'object-curly-spacing': [2, 'always'],
    'max-statements': [1, 24],
    'semi': [2, 'always'],
    'prefer-const': ['error', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }],
    "vue/attributes-order": ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "CONTENT",
        "EVENTS"
      ]
    }],
    'unicorn/prefer-includes': 'off',
    // правила, добавленные при переходе на typeScript и конфликтующие с текущим состоянием кодовой базы
    'array-bracket-spacing': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'computed-property-spacing': 'off',
    'no-prototype-builtins': 'off',
    'quotes': 'off',
    'quote-props': 'off',
    'padded-blocks': 'off',
    'no-unused-vars': 'off',
    'no-case-declarations': 'off',
    'object-curly-newline': 'off',
    'no-useless-constructor': "off" // срабатывает в декларации классов
  }
};
