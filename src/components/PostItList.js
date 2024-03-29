
import React from 'react';
import {connect} from 'react-redux';

import {deletePostIt, editPostIt, updatePostIt} from '../actions/actions.js';
import {PostIt} from './PostIt.js';
import {EditPostIt} from './EditPostIt.js';
import {AddPostIt} from './AddPostIt.js';
import {postTagFilter} from '../queries/tags.js';


/**
  Presentation component for the list of Post-Its.
  Chooses between EditPostIt and PostIt based whether 
  a Post-It is being edited.
*/
export const PostItListView = ({
  postIts, editing, 
  onPostDelete, onPostFocus, onPostBlur
}) => (
  <div>
    {postIts.map(post => 
      editing.get(post.id)
        ? <EditPostIt key={post.id} {...post} />
        : <PostIt key={post.id} {...post} 
            onDeleteClick={() => onPostDelete(post.id)} 
            onContentClick={() => onPostFocus(post.id)}/>)}
    <AddPostIt />
  </div>
);


const mapDispatchToProps = dispatch => ({
  onPostDelete: id => dispatch(deletePostIt(id)),
  onPostFocus: id => dispatch(editPostIt(id)),
  onPostBlur: (id, title, body) => dispatch(updatePostIt(id, title, body))
});

/**
  Container component for PostItListView without filtering by tag.
*/
export const PostItList = connect(
  state => state,
  mapDispatchToProps
)(PostItListView);

/**
  Container component for PostItListView with filtering by tag.
*/
export const FilteredPostItList = connect(
  ({postIts, tagFilter, editing}) => ({
    postIts: postIts.filter(postTagFilter(tagFilter)),
    editing
  }),
  mapDispatchToProps
)(PostItListView);

