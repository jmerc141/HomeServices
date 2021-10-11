import React, {Component} from 'react';
import DevTools from './DevTools';

class Landing extends Component{

  render(){
    let message;
    let user;
    if(localStorage.getItem('user') != null){
      user = JSON.parse(localStorage.getItem('user'));
    }
      if(user)
      {
          message = (
          <div>
          <p>Logged in as {user.first_name} {user.last_name}.</p>
          <DevTools />
          </div>
          )
      }
      return(
      	<div className="landing-content">
          {message}
        </div>
      )
  };
}

export default Landing;