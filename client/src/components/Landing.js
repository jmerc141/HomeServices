import React, {Component} from 'react';
import Axios from 'axios';

class Landing extends Component{
  
  clear(){
  	Axios.post('http://localhost:3001/delete', {})
  }

  render(){
    let message;
    let user;
    if(localStorage.getItem('user')){
      user = JSON.parse(localStorage.getItem('user'));
    }
      if(user)
      {
          message = <p>Logged in as {user.first_name} {user.last_name}.</p>
      }
      return(
      	<div className="landing-content">
          {message}
          <h1>Developer Tools</h1>
          <button type="submit" className="btn btn-primary btn-block" onClick={this.clear}>CLEAR DB</button>
        </div>
      )
  };
}

export default Landing;