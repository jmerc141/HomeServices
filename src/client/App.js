import React, { Component } from 'react';
import Routes from './services/Routes';
import Header from './components/Header';
import './app.css';

export default class App extends Component {
    render (){
        return (
              <div class="navBar">
                <Header/>
                <Routes/>
              </div>
          );
    }
}
