import React, {Component} from 'react';
import Axios from 'axios';

class Landing extends Component{
  
  clear(){
  	Axios.post('http://localhost:3001/delete', {})
  }

  logout(){
    localStorage.clear();
    window.location.reload(false);
  }

  render(){
    let message;
    const user = JSON.parse(localStorage.getItem('user'));
        if(user)
        {
           message = <p>Logged in as {user.first_name} {user.last_name}.</p>
      }
      return(
      	<div className="landing-content">
          {message}
          <h1>Developer Tools</h1>
          <button type="submit" className="btn btn-primary btn-block" onClick={this.clear}>CLEAR DB</button>
          <br />
          <button type="submit" className="btn btn-primary btn-block" onClick={this.logout}>LOGOUT</button>
        </div>
      )
  };
}

export default Landing;