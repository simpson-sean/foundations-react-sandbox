import request from 'superagent';

const URL = 'https://board-games-2021.herokuapp.com'; 

export async function getAllGames() {
    const data = await request.get(`${URL}/board-games`);

    return data.body;
}

export async function getOneGame(id) {
    const { body } = await request.get(`${URL}/board-games/${id}`);

    return body;
}

export async function updateGame(id, gameData) {
    const { body } = await request
        .put(`${URL}/board-games/${id}`)
        .send(gameData);

    return body;
}

export async function createGame(gameData /* whatever the user put in the form */) {
    const { body } = await request
        .post(`${URL}/board-games/`)
        .send(gameData);

    return body;
}

export async function getAllCategories() {
    const { body } = await request.get(`${URL}/categories`);

    return body;
}

export async function deleteGame(id) {
    const { body } = await request.delete(`${URL}/board-games/${id}`);

    return body;
}