module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        '@vue/airbnb',
        'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'eslint:recommended',
        'airbnb-base'
    ],
    plugins: ['vue'],
    rules: {
        /* common */
        indent: [2, 4, { SwitchCase: 1 }],
        'no-unused-vars': 1,
        'comma-dangle': [2, 'never'],
        'arrow-body-style': 2,
        'global-require': 0,
        'max-len': 0,
        'no-alert': 0,
        'no-console': 0,
        'no-new': 0,
        'object-curly-newline': 0,
        'no-restricted-globals': 0,
        'no-underscore-dangle': [0, {
            allowAfterThis: true
        }],
        camelcase: 0,

        /* import */
        'import/newline-after-import': 2,
        'import/prefer-default-export': 1,
        'import/extensions': [2, 'always', {
            js: 'never',
            vue: 'never'
        }],
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': [2, {
            optionalDependencies: ['test/unit/index.js']
        }],
        /* vue plugin */
        'vue/no-parsing-error': 0,
        'vue/no-v-html': 0,
        'vue/attributes-order': 0,
        'vue/html-indent': [1, 4],
        'vue/attribute-hyphenation': [2, 'never'],
        'vue/max-attributes-per-line': [
            1,
            {
                singleline: 2,
                multiline: {
                    max: 1,
                    allowFirstLine: true
                }
            }
        ],
        'vue/html-self-closing': [2, { html: { void: 'always' } }],
        'vue/singleline-html-element-content-newline': 0,
        'vue/prop-name-casing': ['camelCase' | 'snake_case'],
        'no-continue': 0,
        'linebreak-style': 0,
        'object-shorthand': 0,
        'no-nested-ternary': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
