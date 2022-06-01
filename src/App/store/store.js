import { emptyMeme } from "orsys-tjs-meme";
import { combineReducers, createStore } from "redux";
export const currentMemeInitialState = emptyMeme;
export const ACTIONS_CURRENT = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  CLEAR_CURRENT: "CLEAR_CURRENT",
});

function currentReducer(state = currentMemeInitialState, action) {
  switch (action.type) {
    case ACTIONS_CURRENT.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case ACTIONS_CURRENT.CLEAR_CURRENT:
      return { ...emptyMeme };
    default:
      return state;
  }
}

/**
 * reducer des ressources
 */
const ADR_REST = "http://localhost:5679";
const REST_RESSOURCES = Object.freeze({ memes: "/memes", images: "/images" });
const ressourcesInitialState = {
  memes: [],
  images: [],
};

const ressourcesReducer = (state = ressourcesInitialState, action) => {
  switch (action.type) {
    case "INIT":
      const pimg = fetch(`${ADR_REST}${REST_RESSOURCES.images}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      }).then((f) => f.json());
      const pmeme = fetch(`${ADR_REST}${REST_RESSOURCES.memes}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      }).then((f) => f.json());

      Promise.all([pimg, pmeme]).then((arr_arr) => {
        _store.dispatch({ type: "INIT_VALUES", arr_values: arr_arr });
      });

      return state;
    case "INIT_VALUES":
      if (undefined !== action.arr_values) {
        return { images: action.arr_values[0], memes: action.arr_values[1] };
      } else return state;

    case "ADD_MEME":
      const positionMeme = state.memes.findIndex(
        (meme) => meme.id === action.value.id
      );
      if (positionMeme === -1) {
        //nouveau meme car pas trouver l'id dans la liste de memes
        return { ...state, memes: [...state.memes, action.value] };
      } else {
        return {
          ...state,
          memes: [
            ...state.memes.slice(0, positionMeme),
            action.value,
            ...state.memes.slice(positionMeme + 1),
          ],
        };
      }
    default:
      return state;
  }
};

const cmbRdc = combineReducers({
  current: currentReducer,
  ressources: ressourcesReducer,
});

const _store = createStore(
  cmbRdc,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

_store.subscribe(() => {
  console.log(_store.getState());
});
_store.dispatch({ type: "INIT" });

// _store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:{text:'Hello de lu'}})
// _store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT,value:{color:'#F0AB0F'}})

export default _store;
