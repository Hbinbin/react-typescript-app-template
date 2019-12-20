
### 安装依赖
`$ npm i`
### 本地运行
`$ npm start`
### 以上两步或者直接终端运行
`$ sh init.start.sh`
### 打包
`$ npm run build`

### 1.Typescript的ESlint配置
参考地址：[Typescript配置](https://ts.xcatliu.com/engineering/lint)
```
// 1、安装ESLint
$ npm install eslint --save-dev  

// 2、安装typescript和@typescript-eslint/parser解析器  
$ npm install typescript 
$ npm install @typescript-eslint/parser --save-dev 

// 3、安装 @typescript-eslint/eslint-plugin
$ npm i @typescript-eslint/eslint-plugin --save-dev  

注：@typescript-eslint/parser 和 @typescript-eslint/eslint-plugin的版本必须保持一致  

//  4、配置规则插件
extends: ["standard", "standard-react", "plugin:@typescript-eslint/recommended"],

// 5、代码自动修复的配置
// 需要注意的是：如果要开启保存文件时自动修复代码需要修改vscode的配置文件：settings.json
// 增加需要自动修复的语言
  "eslint.validate": [
    "html",
    "javascript",
    "vue",
    "vue-html",
    "react",
    "typescript",
    "typescriptreact",
  ],
  // 开启自动修复
  "eslint.autoFixOnSave": true,（此设置已废弃）
  此项已修改为：
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // SCSS语法规则的检测：vscode安装插件Prettier，之后settings.json添加：
  "[scss]": {
    "editor.formatOnSave": true
  },
  
```
[.eslintrc.js配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/.eslintrc.js)
[vscode的settings.json配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/vscode.settings.json)
[tsconfig.json配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/tsconfig.json)
### 2.配置模块的别名alias
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
3.重启项目：npm start
```


### 其它
#### 1.vconsole调试插件的引入
`$ npm i vconsole --save-dev`
在入口文件index.tsx中import且创建vcosole实例
```
import VConsole from 'vconsole'
const vConsole = new VConsole()
```
在typescript中引入会报找不到对应ts的模块，在react-app-env.d.ts中增加全局声明
`declare module 'vconsole'`
#### 2.生产打包去除console、debugger
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
#### 3.打包去除.map文件
```
// 修改webpack.config.js中的devtool配置
devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-source-map'
改为：
devtool: isEnvProduction
      ? false
      : isEnvDevelopment && 'cheap-module-source-map'
```
#### 4.项目分析:
  1.需要开启.map文件
  2.安装插件：
  ```
  npm install --save source-map-explorer
  ```
  3.package.json中添加运行命令：
  ```
   "analyze": "source-map-explorer 'build/static/js/*.js'"
 
  4.终端中运行：
  ```
  npm run build
  npm run analyze
  ```
