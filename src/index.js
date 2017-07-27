
import {render} from 'react-dom';
import React from 'react';


import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';


import {loadPostIts, savePostIts} from './storage/storage.js';

import {PostItApp} from './components/PostItApp.js';
import {postIts} from './reducers/postits.js';
import {editing} from './reducers/editing.js';


const reducer = combineReducers({
  postIts,
  editing
});
const posts = loadPostIts();
const store = createStore(reducer, {
  postIts: posts,
  editing: new Map(posts.map(p => [p.id, false]))
});
store.dispatch({type: 'unknown'});

store.subscribe(() => savePostIts(store.getState().postIts));

 
render(<Provider store={store}>
         <PostItApp />
       </Provider>, 
       document.getElementById('container'));

