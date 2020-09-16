import React, { FC, lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

const Home = lazy(() => import('@pages/home/Home'))
const My = lazy(() => import('@pages/my/My'))

const Dashboard: FC = ({ }) => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          {/* <img src={require('@images/hello.png')} /> */}
          <Route exact path='/' render={() => <Redirect to='/home' />} />
          <Route path='/home' component={Home} />
          <Route path='/my' component={My} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Dashboard
