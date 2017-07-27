
import React from 'react';

import {Card} from './Card.js';


export const PostIt = ({title, body, onDeleteClick, onContentClick}) => (
  <Card topButton={<button onClick={onDeleteClick}>X</button>}>
    <div onClick={onContentClick}>
      <div className="post-it-title">
        <h2>{title}</h2>
      </div>
      <div className="post-it-body">
        <p>{body}</p>
      </div>
    </div>
  </Card>
);
