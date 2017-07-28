
export const ADD_POST_IT = 'ADD_POST_IT';
export const DELETE_POST_IT = 'DELETE_POST_IT';
export const UPDATE_POST_IT = 'UPDATE_POST_IT';
export const UPDATE_POST_IT_TAGS = 'UPDATE_POST_IT_TAGS';

export const EDIT_POST_IT = 'EDIT_POST_IT';
export const END_EDIT_POST_IT = 'END_EDIT_POST_IT';

export const UPDATE_NEW_POST_IT = 'UPDATE_NEW_POST_IT';

export const SET_TAG_FILTER = 'SET_TAG_FILTER';

/**
  Action for adding a new Post-It

  @param {string} id - Unique id of the Post-It
  @param {string} title - The title of the Post-It
  @param {string} body - The body of the Post-It
*/
export function addPostIt(id, title, body) {
  return {
    type: ADD_POST_IT,
    id, 
    title, 
    body
  };
}

/**
  Action for deleting a Post-It

  @param {string} id - Unique id of an existing Post-It
*/
export function deletePostIt(id) {
  return {
    type: DELETE_POST_IT,
    id
  };
}

/**
  Action for updating a Post-It

  @param {string} id - Unique id of the Post-It to be updated
  @param {string} title - The new title
  @param {string} body - The new body
*/
export function updatePostIt(id, title, body) {
  return {
    type: UPDATE_POST_IT,
    id,
    title,
    body
  };
}

/**
  Action for updating Post-It tags

  @param {string} id - Unique id of the Post-It to be updated
  @param {string[]} tags - The new tags
*/
export function updatePostItTags(id, tags) {
  return {
    type: UPDATE_POST_IT_TAGS,
    id,
    tags
  };
}


/**
  Action for beginning to edit a Post-It

  @param {string} id - Unique id of the Post-It
*/
export function editPostIt(id) {
  return {
    type: EDIT_POST_IT,
    id
  };
}

/**
  Action for stopping to edit a Post-It

  @param {string} id - Unique id of the Post-It
*/
export function endEditPostIt(id) {
  return {
    type: END_EDIT_POST_IT,
    id
  };
}


/**
  Action for updating the data of the new Post-It, i.e.
  one that is still to be added

  @param {string} title - The updated title
  @param {string} body - The updated body
*/
export function updateNewPostIt(title, body) {
  return {
    type: UPDATE_NEW_POST_IT,
    title,
    body
  };
}


/**
  Action for setting the tag filter

  @param {string} tagFilter - The new tagFilter. It does not need to be a tag
*/
export function setTagFilter(tagFilter) {
  return {
    type: SET_TAG_FILTER,
    tagFilter
  };
}
