import React, { Component } from 'react';
import { Card, Button } from 'antd';
import 'antd/lib/card/style/css';
import 'antd/lib/button/style/css'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: null,
        };
    }
    componentDidMount() {
        fetch("http://localhost:8080/game/all")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    games: json,
                });
            });
    }
    render() {
        const { games } = this.state;
        if (!games) {
            return null;
        }
        return (
            <div>
                <div className="game">
                    {games.map(game => {
                        return(
                                <Card className="card" title={game.title}>{game.description}</Card>
                        )
                    })}
                </div>
                <Button className="add-game" type="primary" htmlType="button">Add New Game</Button>
            </div>
        );
    }
}

export default App;
