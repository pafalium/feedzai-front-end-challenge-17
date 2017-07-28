
import {ADD_POST_IT, DELETE_POST_IT, UPDATE_POST_IT, UPDATE_POST_IT_TAGS} from '../actions/actions.js';

/**
  postIts reducer
  Keeps track of the Post-Its created in the application.

  Responds to actions ADD_POST_IT, DELETE_POST_IT, UPDATE_POST_IT, 
  and UPDATE_POST_IT_TAGS.
*/
export function postIts(state = [], action = {}) {
  switch (action.type) {
    case ADD_POST_IT:
      let post = {
        id: action.id,
        title: action.title,
        body: action.body,
        tags: []
      };
      return [...state, post];
    break;
    case UPDATE_POST_IT:
      return state.map(post => post.id === action.id
                       ? {
                        id: action.id,
                        title: action.title,
                        body: action.body,
                        tags: post.tags
                       }
                       : post);
    break;
    case UPDATE_POST_IT_TAGS:
      return state.map(post => post.id === action.id
                       ? {
                        id: post.id,
                        title: post.title,
                        body: post.body,
                        tags: action.tags
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



