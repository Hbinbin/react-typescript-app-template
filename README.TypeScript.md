
### TypeScript的基本语法

#### 全局增加ts类型
// 1. src/tsconfig.json的include中添加
```
"include": [
  "src",
  "src/typings/index.d.ts"
]
```
// 2. src/typings/index.d.ts 中引入ts类型
```
/// <reference types="./config.d.ts" />
/// <reference types="./common.d.ts" />
/// <reference types="./api.d.ts" />

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
  __wxjs_environment: any;
  ENV: any;
  Config: IConfig;
}

declare const Config: IConfig;
declare const ENV: any;
```
#### 在window增加属性
```
// src/typings/index.d.ts中直接增加window的接口
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
  __wxjs_environment: 'miniprogram' | 'browser';
  ENV: any;
  Config: any;
}
declare const Config: IConfig;
declare const ENV: any;
```
#### 对于插件没有ts包的
```
// 在xxx.d.ts中增加
declare module 'react-lazy-load' {
  const LazyLoad: any
  export default LazyLoad
}
```
#### 匿名函数的this
```
  // 回调中直接使用this会报错 'this 隐式具有类型 any，因为它没有类型注释'
  // 方法1：this必须作为回调的第一个参数传入，类型为：void | any
  ele.addEventListener('touchmove', function(this: any,evt: any) {
    console.log(this);
  })
  // 方法2：tsconfig.js增加配置
  "noImplicitThis": false
```
#### setState如何属性名表达式赋值
```
  interface IState{
  }
  type StateKey = keyof IState
  handleChange = (key: StateKey, val: any) => {
    this.setState({
      [key]: val
    } as Pick<IState, typeof key>)
  }
```
#### 对象、数组对象的表示
```
  const obj: {
    [key: string]: any
  } = {}
  const arrObj: {
    [key: string]: any
  }[] = []
```