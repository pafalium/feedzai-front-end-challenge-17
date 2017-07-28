
import {
  ADD_POST_IT,
  DELETE_POST_IT,
  UPDATE_POST_IT,
  UPDATE_POST_IT_TAGS,
  EDIT_POST_IT,
  END_EDIT_POST_IT,
  UPDATE_NEW_POST_IT,
  SET_TAG_FILTER
} from './actions.js';

import {
  addPostIt,
  deletePostIt,
  updatePostIt,
  updatePostItTags,
  editPostIt,
  endEditPostIt,
  updateNewPostIt,
  setTagFilter
} from './actions.js';


describe('addPostIt', () => {
  it('should create an ADD_POST_IT action', () => {
    let expectedAction = {
      type: ADD_POST_IT,
      id: 'id',
      title: 'title',
      body: 'body'
    };
    expect(addPostIt('id', 'title', 'body')).toEqual(expectedAction);
  })
}) 

// TODO Unit tests for all action creators

