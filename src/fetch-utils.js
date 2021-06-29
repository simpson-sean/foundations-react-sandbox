import request, { get } from 'superagent';

const URL = "https://pacific-fortress-08495.herokuapp.com";

export async function getAllCharacters() {
    const data = await request.get(`${URL}/trek_character`);
    return data.body;
}

export async function getOneCharacter(id) {
    const data = await request.get(`${URL}/trek_character/${id}`);
    return data.body;
}

export async function updateCharacter(id, characterData) {
    const data = await request
        .put(`${URL}/trek_character/${id}`)
        .send(characterData)

    return data.body;
}

export async function createCharacter(characterData) {
    const data = await request
        .post(`${URL}/trek_character`)
        .send(characterData)
    
    return data.body;
}

export async function getAllFactions() {
    const data = await request.get(`${URL}/trek_faction`)
    return data.body;
}

export async function deleteCharacter(id) {
    const data = await request
        .delete(`${URL}/trek_character/${id}`);
    
    return data.body

}