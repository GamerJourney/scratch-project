import React, { Component } from 'react';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Gameboard from './Components/Gameboard.jsx';
import styles from './Styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
<<<<<<< HEAD
      <>
        <div className='App'>
          <Navbar />
          <Sidebar />
          <Gameboard />
        </div>
      </>
=======
      <div className="App">
        <Navbar />
        <div id="main">
          <Sidebar />
          <Gameboard />
        </div>
      </div>
>>>>>>> d91de16ff8d379e5da32f96289dfd080915a40f5
    );
  }
}

export default App;

