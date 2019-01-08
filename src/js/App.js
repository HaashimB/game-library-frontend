import React, { Component } from 'react';
import '../css/App.css';
import LogInPage from './LogInPage';
import DisplayGames from './DisplayGames';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        }
    }

    render() {
        const { LoggedIn } = this.state;
        return (LoggedIn ? <DisplayGames/> : <LogInPage/>)
    }
}

export default App;
