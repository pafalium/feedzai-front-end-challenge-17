
import {SET_TAG_FILTER} from '../actions/actions.js';

/**
  tagFilter reducer
  Keeps track of the current string used to filter Post-Its by tag.

  Responds to the SET_TAG_FILTER tag.
*/
export function tagFilter(state="", action) {
  switch (action.type) {
    case SET_TAG_FILTER:
      return action.tagFilter;
    default:
      return state;
  }
}
