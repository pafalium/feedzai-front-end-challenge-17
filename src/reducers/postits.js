
import {ADD_POST_IT, DELETE_POST_IT, UPDATE_POST_IT} from '../actions/actions.js';



export function postIts(state = [], action = {}) {
  switch (action.type) {
    case ADD_POST_IT:
      let post = {
        id: action.id,
        title: action.title,
        body: action.body
      };
      return [...state, post];
    break;
    case UPDATE_POST_IT:
      return state.map(post => post.id === action.id
                       ? {
                        id: action.id,
                        title: action.title,
                        body: action.body
                       }
                       : post);
    break;
    case DELETE_POST_IT:
      return state.filter(post => post.id != action.id);
    break;
    default:
      return state;
  }
}



