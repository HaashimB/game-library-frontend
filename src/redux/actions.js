import ADDED_NEW_GAME  from "./actionTypes";

export const addNewGame = game => {
    return async  () => {
        console.log(game.title);
        return fetch (encodeURI(`http://localhost:8080/game/add?title=${game.title}&description=${game.description}`))
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return {
                    type: ADDED_NEW_GAME,
                    payload: json
                };
            })
    }


};