import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Menu from './components/menucomponent'
import Placeholder from './components/placeholder'
import LoginComponent from './components/logincomponent';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 'false',
      status: 'loginComponent'
    }
  }

  updateLoginstatus = () => {
    this.setState({
      isLoggedIn: 'false'
    })
  }

  updateStatus(status1) {
    this.setState({
      status: status1
    })
    if (status1 === 'logout') {
      this.setState({
        isLoggedIn: 'false',
      })
    }
    else if (status1 === 'watchListComponent') {
      this.setState({
        isLoggedIn: 'true',
      })
    }
    console.log(status1);
  }

  render() {
    return (
      <div className="App">
        {/* <Menu user='Anonxymous' />
      <Placeholder /> */}
        <Menu user={this.state.isLoggedIn} updateStatus={this.updateStatus.bind(this)} />
        {/* <Switch>
          <Route exact path='/' component={Placeholder} />
          <Route exact path='/' component={() => <Placeholder compo='hi' status />} />
          <Route exact path='/companies' component={Placeholder} />
        </Switch> */}
        <Placeholder status={this.state.status} isLoggedIn={this.state.isLoggedIn} useridno="1" updateStatus={this.updateStatus.bind(this)} />
      </div>
    );
  }
}

export default App;
