import React, { Component } from 'react';
import '../css/GenericInputCard.css'
import { Card, Input, Button } from 'antd';
import 'antd/lib/card/style/css'
import 'antd/lib/input/style/css'
import '../css/LogInPage.css'

class GenericInputCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field1: '',
            field2: '',
            cardTitle: '',
            btn1Text: '',
            btn2Text: ''
        };
        this.handleField1Change = this.handleField1Change.bind(this);
        this.handleField2Change = this.handleField2Change.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleField1Change(newUsername) {
        this.setState({ field1: newUsername.target.value })
    }

    handleField2Change(newPassword) {
        this.setState({ field2: newPassword.target.value })
    }

    submit () {
        return this.state({})
    }

    render(){
        const { field1, field2, cardTitle } = this.state;
        return(
            <div>
                <Card title={cardTitle} className="generic-input-card">
                    <Input className="generic-input-card-input" placeholder="Username" value={field1} onChange={this.handleField1Change}/>
                    <div className="generic-input-card-space"> </div>
                    <Input type="password" className="generic-input-card-input" placeholder="password" value={field2} onChange={this.handleField2Change}/>
                    <div className="generic-input-card-space"> </div>
                    <div className="generic-input-card-btns">
                        <Button htmlType={"button"} type={"primary"} onClick={this.submit}> Log In </Button>
                        <Button className="sign-up-btn" htmlType={"button"}> Sign Up </Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default GenericInputCard;