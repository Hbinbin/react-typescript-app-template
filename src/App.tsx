import React from 'react'
import '@css/index.scss'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from '@cps'
import { getEnv, getPlatform } from '@utils'
import rootReducer from '@redux/rootReducer'

const { isDebug, isPrd } = getEnv()
const { isComputerBrower } = getPlatform()
// 非生产环境开启vconcole或debug模式强制开启vconcole（仅用于手机端H5的调试）
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
const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route component={Dashboard} />
      </Switch>
    </Router>
  </Provider>
)

export default App
