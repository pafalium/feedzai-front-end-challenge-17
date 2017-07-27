
import {ADD_POST_IT, UPDATE_NEW_POST_IT} from '../actions/actions.js';

const EmptyPostIt = {title: "", body: ""};

export function newPostIt(state=EmptyPostIt, action) {
  switch (action.type) {
    case UPDATE_NEW_POST_IT:
      return {
        title: action.title,
        body: action.body
      };
    break;
    case ADD_POST_IT:
      return EmptyPostIt;
    default:
      return state;
  }
}
