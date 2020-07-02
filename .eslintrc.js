module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true, // es6对象的扩展运算符 
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'html',
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  rules: {
    /****** typescript相关配置 ******/
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-empty-function': 0, // 关闭禁止使用空函数
    '@typescript-eslint/no-inferrable-types': 0, // 关闭类型推断
    "@typescript-eslint/naming-convention": [ // 限制interface、type、class首字符必须大写，且必须以特定字符开头
      "error",
      {
        "selector": "typeLike",
        "format": ["PascalCase"],
        "prefix": ["T"]
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "prefix": ["I"]
      },
      {
        "selector": "class",
        "format": ["PascalCase"],
      }
    ],

    /****** react/jsx相关配置 ******/
    // "react/display-name": 0, //防止在React组件定义中丢失displayName
    // "react/forbid-prop-types": [2, { "forbid": ["any"] }], //禁止某些propTypes
    // "react/jsx-boolean-value": 2, //在JSX中强制布尔属性符号
    // "react/jsx-closing-bracket-location": 1, //在JSX中验证右括号位置
    // "react/jsx-curly-spacing": [0, { "when": "never", "children": true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
    // "react/jsx-indent -props": [0, 4], //验证JSX中的props缩进
    // "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    // "react/jsx-max-props-per-line": [0, { "maximum": 1 }], // 限制JSX中单行上的props的最大数量
    "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
    // "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
    // "react/jsx-no-literals": 0, //防止使用未包装的JSX字符串
    // "react/jsx-no-undef": 0, //在JSX中禁止未声明的变量
    // "react/jsx-pascal-case": 0, //为用户定义的JSX组件强制使用PascalCase
    // "react/jsx-sort-props": 2, //强化props按字母排序
    // "react/jsx-uses-react": 1, //防止反应被错误地标记为未使用
    // "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    // "react/no-danger": 0, //防止使用危险的JSX属性
    // "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
    "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
    // "react/no-direct-mutation-state": 2, //防止this.state的直接变异
    // "react/no-multi-comp": 0, //防止每个文件有多个组件定义
    // "react/no-set-state": 0, //防止使用setState
    // "react/no-unknown-property": 2, //防止使用未知的DOM属性
    // "react/prefer-es6-class": 2, //为React组件强制执行ES5或ES6类
    "react/prop-types": 0, //防止在React组件定义中丢失props验证
    // "react/react-in-jsx-scope": 2, //使用JSX时防止丢失React
    "react/self-closing-comp": 0, //防止没有children的组件的额外结束标签
    "react/sort-comp": 0, //强制组件方法顺序
    // "no-extra-boolean-cast": 0, //禁止不必要的bool转换
    // "react/no-array-index-key": 0, //防止在数组中遍历中使用数组key做索引
    "react/no-deprecated": 1, //不使用弃用的方法
    // "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
    "react/jsx-handler-names": 0, // 关闭Handle函数必须传入第一个参数

    /****** react-hooks相关配置 ******/
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 0, // Checks effect dependencies

    /****** js相关配置 ******/
    // "no-new": 0,
    // "no-class-assign": 0 // 禁止修改类声明的变量
    // 'arrow-parens': 0, // allow paren-less arrow functions
    // 'generator-star-spacing': 0, // allow async-await
    "no-unused-vars": 0, // 引用但未使用的只给警告不报错
    // "jsx-quotes": 1,
    "no-var": 2,// 要求使用 let 或 const 而不是 var
    "no-useless-constructor": 0,
    "no-undef": 0,
    "one-var": 0,
    "no-new-func": 0,
    "no-unused-expressions": 0,
    "quotes": 2,
    "no-constant-condition": 0,
    "no-mixed-operators": 0,
    "no-useless-return": 0,
    "no-return-await": 0,
    "no-unreachable": 0,
    "no-new": 0,
    "comma-dangle": 0, // 尾逗号
    // "semi": 0,// ["error", "always"], // 语句结束分号
    "lines-between-class-members": 0,
    "no-empty-pattern": 0,
    "no-eval": 0
  }
}
