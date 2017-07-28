
export function allPostTags(postIts) {
  let postTags = postIts.map(post => post.tags);
  let duplicateTags = postTags.reduce((acc, ts) => acc.concat(ts), []);
  // return removing duplicates
  return [...(new Set(duplicateTags))];
}


export function postTagFilter(tagFilter) {
  if (tagFilter == "") {
    return postIt => true;
  } else {
    return postIt => postIt.tags.some(tag => tag.startsWith(tagFilter));
  }
}
