
import React from 'react';

import {Card} from './Card.js';


export const PostIt = ({title, body, onDeleteClick, onContentClick}) => (
  <Card topButton={<button onClick={onDeleteClick}>X</button>}>
    <div onClick={onContentClick}>
      <h2 className="post-it-title">{title}</h2>
      <p>{body}</p>
    </div>
  </Card>
);
