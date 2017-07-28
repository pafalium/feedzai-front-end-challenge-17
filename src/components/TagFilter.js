
import React from 'react';
import {connect} from 'react-redux';

import {setTagFilter} from '../actions/actions.js';


/**
  Presentation component for editing the tag filter.
*/
export const TagFilterView = ({tag, onChange}) => (
  <div>
    <input type="text" 
      placeholder="Filter by tag"
      value={tag}
      onChange={evt => onChange(evt.target.value)} />
  </div>
)


/**
  Container component for TagFilterView.
*/
export const TagFilter = connect(
  state => ({tag: state.tagFilter}),
  dispatch => ({onChange: value => dispatch(setTagFilter(value))})
)(TagFilterView);
