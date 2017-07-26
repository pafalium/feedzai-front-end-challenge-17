
import React from 'react';


export const PostIt = ({title, body, onDeleteClick}) => (
  <div className="post-it-card">
    <h2 className="post-it-title">{title}</h2>
    <button className="post-it-top-button" onClick={onDeleteClick}>X</button>
    <p>{body}</p>
  </div>
);


