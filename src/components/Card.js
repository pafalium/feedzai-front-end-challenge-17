
import React from 'react';


export const Card = ({topButton, children}) => (
  <div className="post-it-card">
    <div className="post-it-top-button">{topButton}</div>
    <div className="post-it-card-body">{children}</div>
  </div>
);

