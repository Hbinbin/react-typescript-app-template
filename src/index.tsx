import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import '@css/index.scss';
import '@common/config'; // 全局配置
import rootReducer from '@redux/rootReducer';
import App from './App';
import { getEnv, getPlatform } from '@utils/utils';

const { isDebug, isPrd } = getEnv();
const { isComputerBrower } = getPlatform();
// 非生产环境开启vconcole或debug模式强制开启vconcole（仅用于手机端H5的调试）
if ((!isPrd && !isComputerBrower) || isDebug) {
  const VConsole = require('vconsole');
  new VConsole();
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
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
