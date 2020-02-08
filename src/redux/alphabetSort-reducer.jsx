
const ALHABET_SORT = 'ALHABET_SORT';



let initialState = '';
const inputReducer = (state = initialState, action) => {
    switch(action.type) {

        case (ALHABET_SORT):

            return action.input;
        default:
            return state;
    }
};
export const alphabetSort = (input) =>({type:ALHABET_SORT, input});
export default inputReducer;
