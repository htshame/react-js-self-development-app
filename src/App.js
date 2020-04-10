import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './component/User'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className="app">
                    <header className="app-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="app-title">My Self-Development React App</h1>
                    </header>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Redirect to="/userList"/>
                        )}/>
                        <Route exact path='/userList' component={User}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
