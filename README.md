
### 安装依赖
`$ npm i`
### 本地运行
`$ npm start`
### 以上两步或者直接终端运行
`$ sh init.start.sh`
### 打包
`$ npm run build`
### 分析项目
`$ sh init.analyze.sh`

### 1.Typescript的ESlint配置
##### 1. 安装ESLint
`$ npm install eslint --save-dev`

##### 2. 安装typescript  
`$ npm install typescript --save-dev`

##### 3. 安装 @typescript-eslint/parser解析器和@typescript-eslint/eslint-plugin
`$ npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`

##### 4. 配置规则插件
`extends: ["standard", "standard-react", "plugin:@typescript-eslint/recommended"]`
安装插件：`$ npm i standard eslint-config-standard-react` --save-dev`
##### 5. 代码自动修复的配置
#### 需要注意的是：如果要开启保存文件时自动修复代码需要修改vscode的配置文件：settings.json
```
  // 增加需要自动修复的语言
  "eslint.validate": [
    "html",
    "javascript",
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
```
[.eslintrc.js配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/.eslintrc.js)
[vscode的settings.json配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/vscode.settings.json)
[tsconfig.json配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/tsconfig.json)
### 2.配置模块的别名alias
##### 1. webpack.config.js中增加方法和配置
```
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
```

##### 2. 在tscongfig.json中compilerOptions中加
```
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
```
##### 3. 重启项目：npm start

### 其它
#### 1. 配置sass全局变量
安装`sass-resources-loader`
`$ npm i sass-resources-loader --save-dev`  

webpack.config.js 添加如下配置
```
rules: {
  ...
  oneOf: [
    {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 3,
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'sass-loader'
      ).concat( // 配置sass全局变量
        [{
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, '../src/assets/css/theme.scss'),
              path.resolve(__dirname, '../src/assets/css/variables.scss'),
              path.resolve(__dirname, '../src/assets/css/mixins.scss'),
            ]
          }
        }]
      ),
      sideEffects: true,
    },
    {
      test: sassModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 3,
          sourceMap: isEnvProduction && shouldUseSourceMap,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          },
        },
        'sass-loader'
      ).concat( // 配置sass全局变量
        [{
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(__dirname, '../src/assets/css/theme.scss'),
              path.resolve(__dirname, '../src/assets/css/variables.scss'),
              path.resolve(__dirname, '../src/assets/css/mixins.scss'),
            ]
          }
        }]
      ),
    },
  ]
  ...
}
```
#### 2. vconsole调试插件的引入
`$ npm i vconsole --save-dev`
在入口文件index.tsx中import且创建vcosole实例
```
import VConsole from 'vconsole'
const vConsole = new VConsole()
```
在typescript中引入会报找不到对应ts的模块，在react-app-env.d.ts中增加全局声明
`declare module 'vconsole'`
#### 3. 生产打包去除console、debugger
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
#### 4. 打包去除.map文件
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
#### 5. 项目分析:
  1.需要开启.map文件
  2.安装插件：
  ```
  npm install --save-dev source-map-explorer
  ```
  3.package.json中添加运行命令：
  ```
   "analyze": "source-map-explorer 'build/static/js/*.js'"
  ```
  4.终端中运行：
  ```
  npm run build
  npm run analyze
  ```
```
## 配置完不生效时，请重启编辑器！
