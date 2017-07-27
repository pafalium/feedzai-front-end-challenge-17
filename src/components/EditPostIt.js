
import React from 'react';
import {connect} from 'react-redux';

import {Card} from './Card.js';


export const EditPostIt = ({title, body, onBlur, onDeleteClick}) => {
  let titleInput, bodyInput;
  const onChange = () => onBlur(titleInput.value, bodyInput.value);
  return (
    <Card topButton={<button onClick={onDeleteClick}>X</button>}>
      <input type="text" 
        className="post-it-title"
        placeholder="Title" 
        defaultValue={title}
        ref={node => {titleInput = node}}
        onBlur={onChange} />
      <textarea 
        placeholder="Your note here..." 
        defaultValue={body}
        ref={node => {bodyInput = node}} 
        onBlur={onChange} />
    </Card>
  );
}
