import request from 'superagent';

const URL = 'https://board-games-2021.herokuapp.com'; 

export async function getAllGames() {
    const data = await request.get(`${URL}/board-games`);

    return data.body;
}

export async function getOneGame(id) {
    const data = await request.get(`${URL}/board-games/${id}`);

    return data.body;
}

export async function updateGame(id, gameData) {
    const data = await request
        .put(`${URL}/board-games/${id}`)
        .send(gameData);

    return data.body;
}

export async function createGame(gameData /* whatever the user put in the form */) {
    const data = await request
        .post(`${URL}/board-games/`)
        .send(gameData);

    return data.body;
}

export async function getAllCategories() {
    const data = await request.get(`${URL}/categories`);

    return data.body;
}

export async function deleteGame(id) {
    const data = await request.delete(`${URL}/board-games/${id}`);

    return data.body;
}