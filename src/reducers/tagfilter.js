
import {SET_TAG_FILTER} from '../actions/actions.js';


export function tagFilter(state="", action) {
  switch (action.type) {
    case SET_TAG_FILTER:
      return action.tagFilter;
    default:
      return state;
  }
}
