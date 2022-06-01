import { emptyMeme } from "orsys-tjs-meme";
import {createStore} from 'redux'
export const currentMemeInitialState=emptyMeme;
export const ACTIONS_CURRENT=Object.freeze({
    UPDATE_CURRENT:'UPDATE_CURRENT',
    CLEAR_CURRENT:'CLEAR_CURRENT'
})
function currentReducer(state=currentMemeInitialState,action) {
    switch(action.type){
        case ACTIONS_CURRENT.UPDATE_CURRENT:return {...state,...action.value}
        case ACTIONS_CURRENT.CLEAR_CURRENT:return {...emptyMeme}
        default :return state;
    }
}
const _store = createStore(currentReducer);


_store.subscribe(()=>{
    console.log(_store.getState());
})
// _store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:{text:'Hello de lu'}})
// _store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:{color:'#F0AB0F'}})
// _store.dispatch({type:ACTIONS_CURRENT.CLEAR_CURRENT})

export default _store;

