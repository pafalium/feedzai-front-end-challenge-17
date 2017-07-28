
import React from 'react';
import ReactMarkdown from 'react-markdown';

import {Card} from './Card.js';

/**
  Presentation component for Post-It tags.
*/
const PostItTags = ({tags}) => (
  <div>
    {tags.map(tag => 
      <span key={tag} className="post-it-tag">{tag}</span>
    )}
  </div>
);


/**
  Presentation component for Post-It's.
  The Post-It's body is rendered using react-markdown.
*/
export const PostIt = ({title, body, tags, onDeleteClick, onContentClick}) => (
  <Card topButton={<button onClick={onDeleteClick}>X</button>}>
    <div onClick={onContentClick}>
      <PostItTags tags={tags} />
      <div className="post-it-title">
        <h2>{title}</h2>
      </div>
      <div className="post-it-body">
        <ReactMarkdown source={body} />
      </div>
    </div>
  </Card>
);
