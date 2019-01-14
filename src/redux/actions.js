import ADDED_NEW_GAME  from "./actionTypes";

export const addNewGame = game => {
    fetch(encodeURI(`http://localhost:8080/game/add?title=${game.title}&description=${game.description}`))
        .then(response => response.json())
        .then(json => {
            return {
                type: ADDED_NEW_GAME,
                payload: json
            };
        })

};