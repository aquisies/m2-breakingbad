import {ADD_QUOTE, LOAD_CHARACTERS, GET_CHARACTER_DETAIL, LOAD_EPISODES } from "../actions";// Equivale a "../actions/index"


//==== Setear Estado Global Inicial ======//

const initialState = {
    quote : {},
    characters: [],
    characterDetail: {},    
    episodes: [],
    episodeDetail: {}
}

/*
{
    type: ADD_QUOTE,
    payload: 
}
*/

//==== Setear Reducers ======//
function rootReducer(state = initialState, action){
    
    switch (action.type){
        case ADD_QUOTE:
            return {
                     ...state, 
                     quote: action.payload
            };

        case LOAD_CHARACTERS:             
            return {
                ...state, 
                characters: action.payload
            };
        
        case GET_CHARACTER_DETAIL:         
            return {
            ...state, 
            characterDetail: action.payload
        };           
        case LOAD_EPISODES:         
            return {
                ...state, 
                episodes: action.payload
            };            
        
        default : return state;
    }

    

}


export default rootReducer;
/*
Spread Operator : 
const array = [1,2,3,4];
const array2 = [...array,5] => [1,2,3,4,5]

*/