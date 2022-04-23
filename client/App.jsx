import React, { Component } from 'react';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Gameboard from './Components/Gameboard.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Gameboard />
      </>
    );
  }
}

export default App;

