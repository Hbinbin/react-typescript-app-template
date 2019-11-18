import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '@css/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import rootReducer from '@redux/rootReducer'
import { getEnv, getPlatform } from '@utils/utils'
const { isDebug, isPrd } = getEnv()
const { isComputerBrower } = getPlatform()

// 全局window属性
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
    __wxjs_environment: 'miniprogram' | 'browser';
  }
}

// 非生产环境开启vconcole或debug模式强制开启vconcole
if ((!isPrd && !isComputerBrower) || isDebug) {
  const VConsole = require('vconsole')
  new VConsole()
}

// redux store配置
const store = isPrd ? (
  createStore(rootReducer, applyMiddleware(thunk))
) : (
  window.__REDUX_DEVTOOLS_EXTENSION__ ? (
    createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()))
  ) : (
    createStore(rootReducer, applyMiddleware(thunk))
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))

serviceWorker.unregister()
