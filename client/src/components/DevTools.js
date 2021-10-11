import React, {Component} from 'react';
import Axios from 'axios';

class DevTools extends Component{
    clear(){
        Axios.post('http://localhost:3001/delete', {})
    }
  render(){
      return(
      	<div className="devtools-content">
          <h1>Developer Tools</h1>
          <button type="submit" className="btn btn-primary btn-block" onClick={this.clear}>CLEAR DB</button>
        </div>
      )
  };
}

export default DevTools;