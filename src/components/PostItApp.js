
import React from 'react';

import {PostItList} from './PostItList.js';
import {AddPostIt} from './AddPostIt.js';


export const PostItApp = () => (
  <div>
    <h1>Online Post-It Board</h1>
    <PostItList />
    <hr/>
    <AddPostIt />
  </div>
);





