
import {CREATE_POST_IT, EDIT_POST_IT, END_EDIT_POST_IT, DELETE_POST_IT} 
from '../actions/actions.js';


/**
  editing reducer
  Keeps track of whether the existing Post-Its are being edited or not.

  Responds to actions CREATE_POST_IT, EDIT_POST_IT, END_EDIT_POST_IT,
  and DELETE_POST_IT.
*/
export function editing(state=new Map(), action={}) {
  switch (action.type) {
    case CREATE_POST_IT:
      return new Map([[action.id, false], ...state]);
    break;
    case EDIT_POST_IT:
      return new Map([...state, [action.id, true]]);
    break;
    case END_EDIT_POST_IT:
      return new Map([...state, [action.id, false]]);
    break;
    case DELETE_POST_IT:
      return new Map([...state].filter(([id, _]) => id === action.id));
    break;
    default:
      return state;
  }
}
