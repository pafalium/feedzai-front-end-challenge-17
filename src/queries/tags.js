
/**
  All unique tags found in the given postIts array

  @param {Array.{Object}} postIts
  @returns {Array.{string}} Unique Tags
*/
export function allPostTags(postIts) {
  let postTags = postIts.map(post => post.tags);
  let duplicateTags = postTags.reduce((acc, ts) => acc.concat(ts), []);
  // return removing duplicates
  return [...(new Set(duplicateTags))];
}

/**
  @function
  @name PostItPredicate
  @param {Object} postIt
  @returns {boolean} 
*/

/**
  Returns a predicate for whether a postIt fits the given tagFilter

  @param {string} tagFilter
  @returns {PostItPredicate}
*/
export function postTagFilter(tagFilter) {
  if (tagFilter == "") {
    return postIt => true;
  } else {
    return postIt => postIt.tags.some(tag => tag.startsWith(tagFilter));
  }
}
