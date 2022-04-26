import React, { Component } from 'react';
import Navbar from './Components/Navbar.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Gameboard from './Components/Gameboard.jsx';
import styles from './Styles/App.css';
import { useState } from 'react';
import Login from './Components/Login.jsx'
import * as CardActions from '../Actions/actions'

const mapStateToProps = (state) => ({
  state : state.cardSet
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CardActions, dispatch)
})

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
          <Gameboard cardSet={state.cardSet} flipCard={actions.flipCard}/>
          {/* <Login></Login> */}
        </div>
      </>
    );
  }
}

export default App;

