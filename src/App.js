import React, { Component } from 'react';
import MyHeader from './components/MyHeader';
import MyPage from './components/MyPage';
import { list, Class } from './data/dataStruct'
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    let x;
    if (localStorage.loggedIn) {
      x = localStorage.loggedIn;
    }
    else {
      x = false;
    }
    console.log(x);
    this.state = {
      loggedIn: x
    }
    console.log(this.state);
    list.classList.addToList(new Class(new Date(), "Class 1", '1231', 'class Info 1', '2 hours', 'A', 12, 'www.test.com', 1));
    list.classList.addToList(new Class(new Date(), "Class 2", '1321', 'class Info 2', '1 hours', 'B', 5, 'www.test.com', 1));
    list.classList.addToList(new Class(new Date(), "Class 3", '2121', 'class Info 3', '1.5 hours', 'C', 20, 'www.test.com', 1));

  }
  render() {
    return (
      <div style={{ backgroundColor: 'rgba(255,0,0,0.1)', height: '100%', width: '100%', position: 'absolute', overflow: 'hidden' }}>
        <Router>
          <div>
            <MyHeader loggedIn={this.state.loggedIn} log={(value) => { this.setState({ loggedIn: value }) }} />
            <MyPage loggedIn={this.state.loggedIn} log={(value) => { this.setState({ loggedIn: value }) }} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
