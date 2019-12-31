
### TypeScript的基本语法

#### 在window增加属性
```
// index.tsx中增加全局window属性
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
    ENV: any;
    Config: any;
    __wxjs_environment: any;
    WeixinJSBridge: any;
    wx: any;
    ISMINIPROGRAM: boolean;
    ISALIPAYMINI: boolean;
  }
}
```
#### 对于插件没有ts包的
```
// 在react-app-env.d.ts中增加
declare module 'react-lazy-load' {
  const LazyLoad: any
  export default LazyLoad
}
```
#### 匿名函数的this
```
  // 回调中直接使用this会报错 'this 隐式具有类型 any，因为它没有类型注释'
  // this必须作为回调的第一个参数传入，类型为：void | any
  ele.addEventListener('touchmove', function(this: any,evt: any) {
    console.log(this);
  })
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
#### setState
```
  type StateKey = keyof IState
  handleChange = (key: StateKey, val: any) => {
    this.setState({
      [key]: val
    } as Pick<IState, typeof key>)
  }
```