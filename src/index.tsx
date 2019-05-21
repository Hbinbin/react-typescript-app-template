import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '@css/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import VConsole from 'vconsole'
const vConsole = new VConsole()
// import rootReducer from '@redux/rootReducer'

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__: Function
//     a: string
//   }
// }
// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ))
ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <App />
  ,
  document.getElementById('root'))

serviceWorker.unregister()
