import React, { Component } from 'react';
import './App.css';
import { NavPanel } from './views/navpanel_react';
import { Header } from './views/header';
import { Content } from './views/content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Weather Reports"/>
        <NavPanel />
        <Content infoText="Webpage to save your weather data (and maybe showcase creators programming skills)"/>
      </div>

    );
  }
}

export default App;
