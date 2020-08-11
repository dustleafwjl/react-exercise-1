import React, { Component } from 'react';
import './App.scss';
import UserInfo from './pages/UserInfo';

class App extends Component {
  render() {
    return (
      <main className="app">
        <UserInfo></UserInfo>
      </main>
    );
  }
}

export default App;
