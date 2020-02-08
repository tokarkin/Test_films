import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from  "redux-thunk"
import {reducer as formReducer} from "redux-form";
import filmReducer from "./films-reducers";
import inputReducer from "./alphabetSort-reducer";
import planetsReduces from "./planets-reducers";



let reducers = combineReducers({
    form:formReducer,
    films: filmReducer,
    input: inputReducer,
    planets:planetsReduces,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;
