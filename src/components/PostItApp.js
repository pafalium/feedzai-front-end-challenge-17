
import React from 'react';

import {PostItList, FilteredPostItList} from './PostItList.js';
import {TagFilter} from './TagFilter.js';

export const PostItApp = () => (
  <div>
    <h1>Online Post-It Board</h1>
    <hr/>
    <TagFilter />
    <hr/>
    <FilteredPostItList />
  </div>
);





