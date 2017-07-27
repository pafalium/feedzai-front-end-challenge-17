
export const ADD_POST_IT = 'ADD_POST_IT';
export const DELETE_POST_IT = 'DELETE_POST_IT';
export const UPDATE_POST_IT = 'UPDATE_POST_IT';

export const EDIT_POST_IT = 'EDIT_POST_IT';
export const END_EDIT_POST_IT = 'END_EDIT_POST_IT';

export const UPDATE_NEW_POST_IT = 'UPDATE_NEW_POST_IT';

export function addPostIt(id, title, body) {
  return {
    type: ADD_POST_IT,
    id, 
    title, 
    body
  };
}

export function deletePostIt(id) {
  return {
    type: DELETE_POST_IT,
    id
  };
}

export function updatePostIt(id, title, body) {
  return {
    type: UPDATE_POST_IT,
    id,
    title,
    body
  };
}


export function editPostIt(id) {
  return {
    type: EDIT_POST_IT,
    id
  };
}

export function endEditPostIt(id) {
  return {
    type: END_EDIT_POST_IT,
    id
  };
}


export function updateNewPostIt(title, body) {
  return {
    type: UPDATE_NEW_POST_IT,
    title,
    body
  };
}
