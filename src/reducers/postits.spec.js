
import {ADD_POST_IT, DELETE_POST_IT, UPDATE_POST_IT, UPDATE_POST_IT_TAGS} from '../actions/actions.js';
import {postIts} from './postits.js';


describe('postIts reducer', () => {
  it('should return an empty array as initial state', () => {
    expect(postIts(undefined, {})).toEqual([]);
  })

  it('should ignore unknown actions', () => {
    let aValidState = [];
    let unknownAction = {
      type: 'UNKNOWN_ACTION', abc: 10
    };
    expect(postIts(aValidState, unknownAction)).toEqual(aValidState);
  })

  const examples = () => {
    let postIt1 = {
      id: '1243124',
      title: 'Title1',
      body: 'Body1',
      tags: []
    };
    let postIt2 = {
      id: '156744',
      title: 'title2',
      body: 'body2',
      tags: ['avs', 'mvb']
    };
    let postIt3Out = {
      id: '19922',
      title: 'asda',
      body: 'agcaaaadd',
      tags: []
    };
    let state = [postIt1, postIt2];
    return {postIt1, postIt2, postIt3Out, state};
  }

  it('should handle ADD_POST_IT', () => {
    let ex = examples();
    let addAction = {
      type: ADD_POST_IT,
      id: '19922',
      title: 'asda',
      body: 'agcaaaadd'
    };
    expect(postIts(ex.state, addAction))
      .toEqual(expect.arrayContaining([ex.postIt3Out]))
  })

  it('should handle DELETE_POST_IT', () => {
    let ex = examples();
    let deleteAction = {
      type: DELETE_POST_IT,
      id: ex.postIt1.id
    };
    expect(postIts(ex.state, deleteAction))
      .not.toEqual(expect.arrayContaining([ex.postIt1]))
  })

  it('should ignore DELETE_POST_IT of inexistent post', () => {
    let ex = examples();
    let deleteAction = {
      type: DELETE_POST_IT,
      id: ex.postIt3Out.id
    };
    expect(postIts(ex.state, deleteAction))
      .toEqual(ex.state)
  })

  it('should handle UPDATE_POST_IT of existing post', () => {
    let ex = examples();
    let updateAction = {
      type: UPDATE_POST_IT,
      id: ex.postIt2.id,
      title: '',
      body: 'asdaass'
    };
    let expectedPostIt = {
      id: ex.postIt2.id,
      title: '',
      body: 'asdaass',
      tags: ex.postIt2.tags
    };
    expect(postIts(ex.state, updateAction))
      .toEqual(expect.arrayContaining([expectedPostIt]))
  })

  it('should ignore UPDATE_POST_IT of inexistent post', () => {
    let ex = examples();
    let updateAction = {
      type: UPDATE_POST_IT,
      id: ex.postIt3Out.id,
      title: 'asdasda',
      body: 'fsfasd'
    };
    let unexpectedPostIt = {
      id: ex.postIt3Out.id,
      title: 'asdasda',
      body: 'fsfasd',
      tags: []
    };
    expect(postIts(ex.state, updateAction))
      .not.toEqual(expect.arrayContaining([unexpectedPostIt]))
  })

  it('should handle UPDATE_POST_IT_TAGS of existing post', () => {
    let ex = examples();
    let newTags = ["asbsfff", "annnndd"];
    let updateTagsAction = {
      type: UPDATE_POST_IT_TAGS,
      id: ex.postIt1.id,
      tags: newTags
    };
    let expectedPostIt = Object.assign({}, ex.postIt1, {tags: newTags});
    expect(postIts(ex.state, updateTagsAction))
      .toEqual(expect.arrayContaining([expectedPostIt]))
  })

  it('should ignore UPDATE_POST_IT_TAGS for inexistent post', () => {
    let ex = examples();
    let newTags = ["aavvvvddd"];
    let updateTagsAction = {
      type: UPDATE_POST_IT_TAGS,
      id: ex.postIt3Out.id,
      tags: newTags
    };
    expect(postIts(ex.state, updateTagsAction))
      .not.toEqual(
        expect.arrayContaining(
          [expect.objectContaining(
            {id: ex.postIt3Out.id, tags: newTags})]))
  })
})
