import React, { Component } from 'react';
import '../css/App.css';
import LogInPage from './LogInPage';
import DisplayGames from './GamesPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
        };
        this.isLoggedIn = this.isLoggedIn.bind(this);
    }

    isLoggedIn(e) {
        this.setState({loggedIn: e})
    }

    render() {
        const { loggedIn } = this.state;
        return (loggedIn ? <DisplayGames/> : <LogInPage isLoggedIn={this.isLoggedIn}/>)
    }
}

export default App;
