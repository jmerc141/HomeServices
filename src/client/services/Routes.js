import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Landing from '../components/Landing'
import Login from '../components/Login'
import Register from '../components/Register'

const Routes = () =>
    <Switch>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route path='/login' component={Login} />
      <Route exact path='/'>
        <Landing />
      </Route>
    </Switch>

export default Routes;