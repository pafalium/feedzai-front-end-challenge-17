
import React from 'react';
import {connect} from 'react-redux';

import {updatePostIt, deletePostIt, endEditPostIt} from '../actions/actions.js';

import {Card} from './Card.js';

import {validBody, validTitle} from '../validation/validPostIt.js';


export const EditPostItView = ({title, body, onBlur, onTitleChange, onBodyChange, onDeleteClick}) => {
  return (
    <Card topButton={<button onClick={onDeleteClick}>X</button>}>
      <input type="text" 
        className="post-it-title"
        placeholder="Title" 
        value={title}
        onChange={evt => onTitleChange(evt.target.value)}
        onBlur={onBlur} />
      <textarea 
        placeholder="Your note here..." 
        value={body}
        onChange={evt => onBodyChange(evt.target.value)}
        onBlur={onBlur} />
    </Card>
  );
}


export const EditPostIt = connect(
  null,
  (dispatch, {id, title, body}) => ({
    onTitleChange: newTitle => {
      if (validTitle(newTitle)) {
        dispatch(updatePostIt(id, newTitle, body));
      }
    },
    onBodyChange: newBody => {
      if (validBody(newBody)) {
        dispatch(updatePostIt(id, title, newBody));
      }
    },
    onBlur: () => dispatch(endEditPostIt(id)),
    onDeleteClick: () => dispatch(deletePostIt(id))
  })
)(EditPostItView);

