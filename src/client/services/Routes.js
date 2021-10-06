import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Landing from '../components/Landing'
import Login from '../components/Login'

const Routes = () =>
    <Switch>
    <Route path='/login'>
        <Login />
      </Route>
      <Route exact path='/'>
        <Landing />
      </Route>
    </Switch>

export default Routes;