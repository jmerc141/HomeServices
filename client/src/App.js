import './App.css';
import React, {Component} from "react";
import Routes from './services/Routes';
import NavigationBar from './components/NavigationBar';

class App extends Component{
  render(){
    return(
      <div className="main-content">
        <NavigationBar />
        <Routes />
      </div>
    )
  }
}
export default App;
