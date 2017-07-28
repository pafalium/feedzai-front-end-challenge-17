
import {render} from 'react-dom';
import React from 'react';


import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';


import {loadPostIts, savePostIts} from './storage/storage.js';

import {PostItApp} from './components/PostItApp.js';

import {postIts} from './reducers/postits.js';
import {editing} from './reducers/editing.js';
import {newPostIt} from './reducers/newpostit.js';
import {tagFilter} from './reducers/tagfilter.js';


// Create app's reducer
const reducer = combineReducers({
  postIts,
  editing,
  newPostIt,
  tagFilter
});

// Create store with state loaded from localStorage
const posts = loadPostIts();
const store = createStore(reducer, {
  postIts: posts,
  editing: new Map(posts.map(p => [p.id, false])),
});

// Save to localStorage on every change
store.subscribe(() => savePostIts(store.getState().postIts));
// Log state to console on every change
store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'unknown'});

// Mount the root app component on the DOM
render(<Provider store={store}>
         <PostItApp />
       </Provider>, 
       document.getElementById('container'));
