import {filmApi} from "../api/api";
import {getFilms, setCharacters, setPlanets, setStarships} from "../redux/films-reducers";


export const getFilmsThunk  = () => {
    return(dispatch) => {
        filmApi.getFilms().then(data =>{
            dispatch(getFilms(data));
        });
    }
};
export const getPlanets = (data,id) =>{
    return (dispatch) =>{
         data.forEach(el=>
        filmApi.getPlanets(el).then(data => {
            console.log(data);
            dispatch(setPlanets(data,id))
    } ));
    }
};
export const getStarships = (data,id) =>{
    return (dispatch) =>{
        data.forEach(el=>
            filmApi.getPlanets(el).then(data => {
                dispatch(setStarships(data,id))
            } ));
    }
};

export const getCharacters = (data,id) =>{
    return (dispatch) =>{
        data.forEach(el=>
            filmApi.getPlanets(el).then(data => {
                dispatch(setCharacters(data,id))
            } ));
    }
};