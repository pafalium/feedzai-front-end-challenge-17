
import {ADD_POST_IT, UPDATE_NEW_POST_IT} from '../actions/actions.js';

const EmptyPostIt = {title: "", body: ""};

/**
  newPostIt reducer
  Keeps track of the data for a new Post-It.

  Responds to actions ADD_POST_IT and UPDATE_NEW_POST_IT.
  Reverts back to an empty Post-IT when the last new post-it is added.
*/
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
