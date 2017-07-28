
import {allPostTags, postTagFilter} from './tags.js';


function examples() {
  let postIt1 = {
    id: '1243124',
    title: 'Title1',
    body: 'Body1',
    tags: ['bbbaa', 'mvb']
  };
  let postIt2 = {
    id: '156744',
    title: 'title2',
    body: 'body2',
    tags: ['avs', 'mvb134']
  };
  let postIt3 = {
    id: '19922',
    title: 'asda',
    body: 'agcaaaadd',
    tags: []
  };
  let postIts = [postIt1, postIt2, postIt3];
  return {postIt1, postIt2, postIt3, postIts};
}

describe('allPostTags', () => {
  it('should return all tags of all postIts', () => {
    let ex = examples();
    let res = allPostTags(ex.postIts);

    expect(res).toEqual(expect.arrayContaining(ex.postIt1.tags))
    expect(res).toEqual(expect.arrayContaining(ex.postIt2.tags))
    expect(res).toEqual(expect.arrayContaining(ex.postIt3.tags))
  })

  it('should not return inexistent tags', () => {
    let ex = examples();
    let res = allPostTags(ex.postIts);

    expect(res).not.toEqual(expect.arrayContaining(['pobqweblqq']))
  })
})

describe('postTagFilter', () => {
  it('with empty tag filter should match any postIt', () => {
    let ex = examples();

    expect(postTagFilter('')(ex.postIt1)).toBeTruthy()
    expect(postTagFilter('')(ex.postIt2)).toBeTruthy()
    expect(postTagFilter('')(ex.postIt3)).toBeTruthy()
  })

  it('should not match Post-Its without tags', () => {
    let ex = examples();

    expect(postTagFilter('abc')(ex.postIt3)).toBeFalsy()
  })

  it('should match Post-Its with tags beginning with tag filter', () => {
    let ex = examples();

    expect(postTagFilter('mvb')(ex.postIt1)).toBeTruthy()
    expect(postTagFilter('mvb')(ex.postIt2)).toBeTruthy()
  })

  it('should not match Post-Its with no tags beginning with tag filter', () => {
    let ex = examples();

    expect(postTagFilter('zzz')(ex.postIt1)).toBeFalsy()
    expect(postTagFilter('zzz')(ex.postIt2)).toBeFalsy()
  })
})
