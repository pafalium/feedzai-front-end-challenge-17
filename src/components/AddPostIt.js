
import React from 'react';
import {connect} from 'react-redux';

import uuid from 'uuid/v4';

import {addPostIt, updateNewPostIt} from '../actions/actions.js';

import {Card} from './Card.js';

import {validPostIt} from '../validation/validPostIt.js';


export const AddPostItView = ({title, body, onAddClick, onChange}) => {
  let titleInput, bodyInput;
  const onAdd = () => onAddClick(title, body);
  return (
    <Card topButton={<button onClick={onAdd}>+</button>}>
      <input type="text" 
        className="post-it-title"
        placeholder="Title" 
        value={title}
        onChange={evt => onChange(evt.target.value, body)} />      
      <textarea 
        className="post-it-body"
        placeholder="Your note here..." 
        value={body}
        onChange={evt => onChange(title, evt.target.value)} />
    </Card>
  );
}


export const AddPostIt = connect(
  ({newPostIt}) => ({title: newPostIt.title, body: newPostIt.body}),
  (dispatch) => ({
    onAddClick: (newTitle, newBody) => { 
      if (validPostIt(newTitle, newBody)) {
        dispatch(addPostIt(uuid(), newTitle, newBody))
      }
    },
    onChange: (newTitle, newBody) => dispatch(updateNewPostIt(newTitle, newBody)),
  })
)(AddPostItView);
