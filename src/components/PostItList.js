
import React from 'react';
import {connect} from 'react-redux';

import {deletePostIt} from '../actions/actions.js';

import {PostIt} from './PostIt.js';


export const PostItListView = ({postIts, onPostDelete}) => (
  <div>
    {postIts.map(post => 
      <PostIt key={post.id} {...post} 
        onDeleteClick={() => onPostDelete(post.id)} />)}
  </div>
);

export const PostItList = connect(
  state => state,
  dispatch => ({
    onPostDelete: id => dispatch(deletePostIt(id))
  })
)(PostItListView);

