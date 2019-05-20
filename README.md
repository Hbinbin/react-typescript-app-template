## React的Typescript项目基本架构和配置
新建typecsript的react项目时可直接拷贝复用
### 安装依赖
`npm i`
### 本地运行
`npm start`
### 打包
`npm run build`

### 1.生产打包去除console、debugger
```
// webpack之前的打包压缩插件是uglifyjs-webpack-plugin，现
在换成了terser-webpack-plugin
// webpack.config.js增加如下代码
  new TerserPlugin({
    terserOptions: {
      ...somecode
      compress: {
        ecma: 5,
        warnings: false,
        comparisons: false,
        inline: 2,
        drop_debugger: true, // 去除所有的debugger
        drop_console: true // 去除所有的console
      },
      ...somecode
    },
```

### 2.Typescript的ESlint配置
参考地址：[Typescript配置](https://ts.xcatliu.com/engineering/lint)
```
// 安装ESLint
npm install eslint --save-dev  

// 安装typescript和typescript-eslint-parser解析器  
npm install typescript typescript-eslint-parser --save-dev  

// 安装 eslint-plugin-typescript
npm install eslint-plugin-typescript --save-dev

// eslint的配置参考项目中的.eslintrc.js文件
// 需要注意的是：如果要开启保存文件时自动修复代码需要修改vscode的配置文件：
// 增加需要自动修复的语言
  "eslint.validate": [
      ...
      {
        "language": "typescript",
        "autoFix": true
      },
      {
        "language": "typescriptreact",
        "autoFix": true
      },
      ...
  // 开启自动修复
  "eslint.autoFixOnSave": true,
```
### 3.配置模块的别名alias
```
// 1.webpack.config.js中增加方法和配置
const resolvePath = function (dir) {
  return path.join(__dirname, '..', dir)
}
...
alias: {
  // 增加如下配置
  '@cps': resolvePath('/src/components'),
  '@cts': resolvePath('/src/containers'),
  '@redux': resolvePath('/src/redux'),
  '@utils': resolvePath('/src/utils')
}
...

// 2.在tscongfig.json中compilerOptions中加
...
"baseUrl": "src",
"paths": {
  "@cps/*": [
    "components/*"
  ],
  "@cts/*": [
    "containers/*"
  ],
  "@redux/*": [
    "redux/*"
  ],
  "@utils/*": [
    "utils/*"
  ]
}
...
// 3.重启项目：npm start

```