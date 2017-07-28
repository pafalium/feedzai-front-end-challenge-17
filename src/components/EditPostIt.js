
import React from 'react';
import {connect} from 'react-redux';
import {Creatable} from 'react-select';

import {updatePostIt, deletePostIt, endEditPostIt, updatePostItTags} from '../actions/actions.js';
import {Card} from './Card.js';
import {validBody, validTitle, validTags} from '../validation/validPostIt.js';
import {allPostTags} from '../queries/tags.js';

/**
  Create react-select's multivalue from post-it tags.
*/
function tagsToMultiValue(tags) {
  return tags.map(t => ({value: t, label: t}));
}

/**
  Create post-it tags from react-select's multivalue.
*/
function multiValueToTags(value) {
  return value.map(v => v.value);
}

/**
  Presentation component for editing a set of tags.
  Uses react-select's Creatable component.
*/
const EditPostItTags = ({tags, allTags, onChange}) => (
  <Creatable 
    multi={true}
    options={tagsToMultiValue(allTags)}
    value={tagsToMultiValue(tags)}
    onChange={value => onChange(multiValueToTags(value))} />
);

/**
  Presentation component for editing a Post-It.
*/
export const EditPostItView = ({
  title, body, tags, allTags, 
  onBlur, onTitleChange, onBodyChange, onDeleteClick, onTagsChange
}) => {
  return (
    <Card topButton={<button onClick={onDeleteClick}>X</button>}>
      <EditPostItTags 
        tags={tags} 
        allTags={allTags}
        onChange={onTagsChange} />
      <input type="text" 
        className="post-it-title"
        placeholder="Title" 
        value={title}
        onChange={evt => onTitleChange(evt.target.value)}
        onBlur={onBlur} />
      <textarea 
        className="post-it-body"
        placeholder="Your note here..." 
        value={body}
        onChange={evt => onBodyChange(evt.target.value)}
        onBlur={onBlur} />
    </Card>
  );
};


/**
  Container component for EditPostItView.
  Takes care of valitation of input before updating the post-it.
*/
export const EditPostIt = connect(
  state => ({
    allTags: allPostTags(state.postIts)
  }),
  (dispatch, {id, title, body}) => ({
    onTitleChange: newTitle => {
      if (validTitle(newTitle)) {
        dispatch(updatePostIt(id, newTitle, body));
      }
    },
    onBodyChange: newBody => {
      if (validBody(newBody)) {
        dispatch(updatePostIt(id, title, newBody));
      }
    },
    onTagsChange: newTags => {
      if (validTags(newTags)) {
        dispatch(updatePostItTags(id, newTags))
      }
    },
    onBlur: () => dispatch(endEditPostIt(id)),
    onDeleteClick: () => dispatch(deletePostIt(id)),
  })
)(EditPostItView);

