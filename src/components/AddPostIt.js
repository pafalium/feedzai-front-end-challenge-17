
import React from 'react';
import {connect} from 'react-redux';

import uuid from 'uuid/v4';

import {addPostIt} from '../actions/actions.js';

import {Card} from './Card.js';


export const AddPostItView = ({onAddClick}) => {
  let titleInput, bodyInput;
  const onAdd = () => onAddClick(titleInput.value, bodyInput.value);
  return (
    <Card topButton={<button onClick={onAdd}>+</button>}>
      <input type="text" 
        className="post-it-title"
        placeholder="Title" 
        ref={node => {titleInput = node}}/>      
      <textarea placeholder="Your note here..." 
        ref={node => {bodyInput = node}} />
    </Card>
  );

}


export const AddPostIt = connect(
  state => ({}),
  dispatch => ({
    onAddClick: (title, body) => dispatch(addPostIt(uuid(), title, body))
  })
)(AddPostItView);
