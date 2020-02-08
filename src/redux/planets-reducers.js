//
// const SET_PLANETS = "SET_PLANETS";
// const DELETE_DATA= "DELETE_DATA";
//
//
//
//
// let initialState = {
//     planets:[
//
//     ]
// };
// const planetsReduces = (state = initialState, action) => {
//     switch(action.type) {
//         case(SET_PLANETS):
//             return {
//                 ...state,
//                 planets: state.planets.concat(action.planets),
//             }
//         case(DELETE_DATA):
//             return {
//
//                 // planets: state.planets.filter(planet => planet !== action.name),
//                 ...state.delete(state.planets),
//             }
//         default:
//             return state;
//     }
// };
//
// export const setPlanets = (planets) =>({type:SET_PLANETS, planets});
// export const deleteData = (name) =>({type:DELETE_DATA,name});
//
// export default planetsReduces;
