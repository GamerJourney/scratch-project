import React, { Component } from 'react';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Gameboard from './Components/Gameboard.jsx';
import styles from './Styles/App.css';
import { useState } from 'react';
import Login from './Components/Login.jsx'


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <>
        <div id='App'>
          <Navbar />
          <Sidebar />
          <Gameboard />
          {/* <Login></Login> */}
        </div>
      </>

    );
  }
}

export default App;

