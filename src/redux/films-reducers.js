const GET_FILMS= 'GET_FILMS';
const SET_PLANETS = "SET_PLANETS";
const SET_STARSHIPS = "SET_STARSHIPS";
const SET_CHARACTERS = "SET_CHARACTERS";

let initialState = {
    films:[

    ],



};
const filmReducer = (state = initialState, action) => {
    switch(action.type) {
        case (GET_FILMS):
            return {
                ...state,
                films: action.films,
            };
        case(SET_PLANETS):
            return {
                ...state,
                films: state.films.filter(el=> el.episode_id === action.id ?  el.planets.push(action.name) : {...state})
            };
        case(SET_STARSHIPS):
            return {
                ...state,
                films: state.films.filter(el=> el.episode_id === action.id ?  el.starships.push(action.starships) : {...state})
            };
        case(SET_CHARACTERS):
            return {
                ...state,
                films: state.films.filter(el=> el.episode_id === action.id ?  el.characters.push(action.character) : {...state})
            };
        default:
            return state;
    }
};

export const getFilms = (films) =>({type:GET_FILMS, films});
export const setPlanets = (name,id) =>({type:SET_PLANETS,name,id});
export const setStarships = (starships,id) =>({type:SET_STARSHIPS,starships,id});
export const setCharacters = (character,id) =>({type:SET_CHARACTERS,character,id});

export default filmReducer;
