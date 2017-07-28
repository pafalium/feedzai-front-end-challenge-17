
export const MaxTitleLength = 120;
export const MaxBodyLength = 1000;
export const MaxTagLength = 40;


/**
  Sanitize a possibly invalid title so becomes valid.
  @param {string} title
  @returns {string} sanitized title
*/
export function sanitizeTitle(title) {
  return title.slice(0, MaxTitleLength);
}

/**
  Sanitize a possibly invalid body so becomes valid.
  @param {string} body
  @returns {string} sanitized body
*/
export function sanitizeBody(body) {
  return body.slice(0, MaxBodyLength);
}


/**
  Predicate for valid Post-It titles

  Valid Post-It titles are strings that must have at most 120 characters.
  Post-It titles may be empty.
  @param {string} title
  @returns {boolean}
*/
export function validTitle(title) {
  return title.length < MaxTitleLength;
}

/**
  Predicate for valid Post-It bodies

  Valid Post-It bodies are strings that must have at most 1000 characters.
  Post-It bodies cannot be empty.
  @param {string} body
  @returns {boolean}
*/
export function validBody(body) {
  return body.length > 0 && body.length < MaxBodyLength;
}

/**
  Predicate for valid Post-It tags

  Valid Post-It tags are strings that have at most 40 characters 
  and cannot be empty.
  @param {string} tag
  @returns {boolean}
*/
export function validTag(tag) {
  return tag.length > 0 && tag.length < MaxTagLength;
}

/**
  Predicate for valid sets of Post-It tags
  
  Sets of Post-It tags are only valid if every tag that they contain is valid.
  @param {string[]} tags
  @returns {boolean}
*/
export function validTags(tags) {
  return tags.every(validTag);
}


/**
  Predicate for valid Post-Its

  A Post-It is only valid when its title, body, and tags set are valid.
  @param {string} title
  @param {string} body
  @param {string[]} tags
  @returns {boolean}
*/
export function validPostIt(title, body, tags) {
  return validTitle(title) && validBody(body) && validTags(tags);
}
