import React from 'react';
import { Route, Switch } from 'react-router-dom';

// All pages here
import Landing from './components/pages/Landing'
import Privacy from './components/pages/Privacy'
import Terms from './components/pages/Terms'

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/privacy' component={Privacy}/>
      <Route path='/terms' component={Terms}/>

    </Switch>
  </main>
)

export default Router
