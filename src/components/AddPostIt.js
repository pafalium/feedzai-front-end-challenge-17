
import React from 'react';
import {connect} from 'react-redux';

import uuid from 'uuid/v4';

import {addPostIt} from '../actions/actions.js';


//TODO
export const AddPostItView = ({onAddClick}) => {
  let titleInput, bodyInput;
  return (
    <div className="post-it-card">
      <input type="text" 
        className="post-it-title"
        placeholder="Title" 
        ref={node => {titleInput = node}}/>
      <button className="post-it-top-button"
        onClick={() => onAddClick(titleInput.value, bodyInput.value)}>
        +
      </button>
      <textarea placeholder="Your note here..." 
        ref={node => {bodyInput = node}} />
    </div>
  );

}


export const AddPostIt = connect(
  state => ({}),
  dispatch => ({
    onAddClick: (title, body) => dispatch(addPostIt(uuid(), title, body))
  })
)(AddPostItView);
