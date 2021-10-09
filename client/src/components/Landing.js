import React, {Component} from 'react';
import Axios from 'axios';

class Landing extends Component{
   

  clear(){
  	Axios.post('http://localhost:3001/delete', {})
  }

  render(){

      return(
      	<div className="landing-content">
          <h1>Developer Tools</h1>
          <button type="submit" className="btn btn-primary btn-block" onClick={this.clear}>CLEAR DB</button>
        </div>
      )
  };
}

export default Landing;