import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';
import 'antd/lib/card/style/css'
import 'antd/lib/input/style/css'
import '../css/LogInPage.css'

class LogInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    handleUsernameChange(newUsername) {
        this.setState({ username: newUsername.target.value })
    }

    handlePasswordChange(newPassword) {
        this.setState({ password: newPassword.target.value })
    }

    logIn() {
        fetch("http://localhost:8080/user/login?username=" + this.state.username + "&password=" + this.state.password)
            .then(response => response.text())
            .then(text => {
               if(text==="Success"){
                   console.log("success")
               }else{
                   console.log("Wrong username/password");
               }
            });
    }

    render() {
        const { username, password} = this.state;
        return(
            <div className="log-in">
                <Card title="Log In" className="log-in-card">
                    <Input className="log-in-input" placeholder="Username" value={username} onChange={this.handleUsernameChange}/>
                    <div className="log-in-space"> </div>
                    <Input type="password" className="log-in-input" placeholder="password" value={password} onChange={this.handlePasswordChange}/>
                    <div className="log-in-space"> </div>
                    <div className="log-in-btns">
                        <Button htmlType={"button"} type={"primary"} onClick={this.logIn}> Log In </Button>
                        <Button className="sign-up-btn" htmlType={"button"}> Sign Up </Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default LogInPage;