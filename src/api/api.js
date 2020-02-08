import * as axios from 'axios';

const  instance = axios.create({
    baseURL:'https://swapi.co/api/',
});

export  const filmApi = {
    getFilms (){
        return instance.get(`films/`)
            .then(response => response.data.results)
    },
    getPlanets(planets){

        return axios.get(`${planets}`).then(response=>response.data)
    }
};