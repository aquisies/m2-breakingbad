export const ADD_QUOTE = "ADD_QUOTE";

export const LOAD_CHARACTERS ="LOAD_CHARACTERS";
export const GET_CHARACTER_DETAIL ="GET_CHARACTER_DETAIL";
export const LOAD_EPISODES = "LOAD_EPISODES";

export function addQuote() {
    return function(dispatch) {
        //fetchear la Api en la ruta de las quotes random
        return fetch('https://www.breakingbadapi.com/api/quote/random')
        .then(res => res.json())
        //despachar el objeto al reducer
        .then(json => {
            dispatch({type: ADD_QUOTE, payload: json[0]})
        })
    }
}

export function loadCharacters(query) {
    return function(dispatch) {        
        //fetchear la Api en la ruta de las quotes random
        
        return fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        .then(res => res.json())
        //despachar el objeto al reducer
        .then(json => {
            dispatch({type: LOAD_CHARACTERS, payload: json})
        })
    }
}

export function getCharacterDetail(id){
    return function(dispatch) {        
        //fetchear la Api en la ruta de las quotes random        
        return fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then(res => res.json())
        //despachar el objeto al reducer
        .then(json => {
            dispatch({type: GET_CHARACTER_DETAIL, payload: json[0]})
        })
    }    
}

export function loadEpisodes(query){
    return function(dispatch) {        
        //fetchear la Api en la ruta de las quotes random        
        return fetch(`https://www.breakingbadapi.com/api/episodes?series=${query}`)
        .then(res => res.json())
        //despachar el objeto al reducer
        .then(json => {
            dispatch({type: LOAD_EPISODES, payload: json})
        })
    }    
}
