
import React from 'react';
import {connect} from 'react-redux';

import {deletePostIt, editPostIt, updatePostIt} from '../actions/actions.js';

import {PostIt} from './PostIt.js';
import {EditPostIt} from './EditPostIt.js';


export const PostItListView = ({postIts, editing, onPostDelete, onPostFocus, onPostBlur}) => (
  <div>
    {postIts.map(post => 
      editing.get(post.id)
        ? <EditPostIt key={post.id} {...post}
            onDeleteClick={() => onPostDelete(post.id)} 
            onBlur={(title, body) => onPostBlur(post.id, title, body)} />
        : <PostIt key={post.id} {...post} 
            onDeleteClick={() => onPostDelete(post.id)} 
            onContentClick={() => onPostFocus(post.id)}/>)}
  </div>
);

export const PostItList = connect(
  state => state,
  dispatch => ({
    onPostDelete: id => dispatch(deletePostIt(id)),
    onPostFocus: id => dispatch(editPostIt(id)),
    onPostBlur: (id, title, body) => dispatch(updatePostIt(id, title, body))
  })
)(PostItListView);

