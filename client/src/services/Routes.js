import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from '../components/Landing';
import Login from '../components/Login';
import Register from '../components/Register';

const Routes = () =>
    <Switch>
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/' component={Landing} />
    </Switch>

export default Routes;