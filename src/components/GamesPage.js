import React, { Component } from 'react';
import '../css/App.css';
import { Card, Button, Input } from 'antd';
import 'antd/lib/card/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/input/style/css';
import { connect } from 'react-redux'
import { addNewGame } from "../redux/actions";

class GamesPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            games: null,
            addGame: false,
            newGame: {
                title: '',
                description: '',
            },
        };
        this.toggleAddGame = this.toggleAddGame.bind(this);
        this.submitNewGame = this.submitNewGame.bind(this);
        this.handleNewGameTitle = this.handleNewGameTitle.bind(this);
        this.handleNewGameDescription = this.handleNewGameDescription.bind(this);
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

    toggleAddGame() {
        this.setState({addGame: !this.state.addGame})
    }

    static removeGame(id) {
        fetch("http://localhost:8080/game/remove/" + id);
    }

    handleNewGameTitle(e) {
        this.setState({
            newGame: {
                title: e.target.event
            }
        })
    }

    handleNewGameDescription(e) {
        this.setState({
            newGame: {
                description: e.target.event
            }
        })
    }

    submitNewGame() {
        this.props.addNewGame(this.state.newGame);
        this.toggleAddGame();
    }

    render(){
        const { games, addGame } = this.state;
        let showAddGame = "show-add-game-1";
        if (!games) {
            return null;
        }
        if(addGame) {
            showAddGame += " show-add-game-2";
        }
        return(
            <div>
                <div className="game">
                    {games.map(game => {
                        return(
                            <Card className="display-game-card" title={game.title} extra={<a className="close-button" onClick={e => this.removeGame(game.id)}>X</a>}>{game.description}</Card>
                        )
                    })}
                </div>
                <Button className="add-game" type="primary" htmlType="button" onClick={this.toggleAddGame}>Add New Game</Button>
                <div className={showAddGame}>
                    <Card className="add-game-card" title="Add New Game" extra={<a className="close-button" onClick={this.toggleAddGame}>X</a>}>
                        <Input placeholder="Game Title" onChange={this.handleNewGameTitle} />
                        <div className="add-game-card-space"> </div>
                        <Input.TextArea placeholder="Game Description" rows={4} onChange={this.handleNewGameDescription}/>
                        <div className="add-game-card-space"> </div>
                        <Button htmlType="button" onClick={this.submitNewGame}> Submit </Button>
                    </Card>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        newGame: state.games
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewGame: () => dispatch(addNewGame())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamesPage);