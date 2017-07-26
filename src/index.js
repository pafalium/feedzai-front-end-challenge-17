
import {render} from 'react-dom';
import React from 'react';


import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';


import {loadPostIts, savePostIts} from './storage/storage.js';

import {PostItApp} from './components/PostItApp.js';
import {postIts} from './reducers/postits.js';


const reducer = combineReducers({
  postIts
});
const store = createStore(reducer, {
  postIts: loadPostIts()
});
store.dispatch({type: 'unknown'});

store.subscribe(() => savePostIts(store.getState().postIts));


render(<Provider store={store}>
         <PostItApp />
       </Provider>, 
       document.getElementById('container'));

