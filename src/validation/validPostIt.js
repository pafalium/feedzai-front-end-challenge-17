
export const MaxTitleLength = 120;
export const MaxBodyLength = 1000;
export const MaxTagLength = 40;


export function sanitizeTitle(title) {
  return title.slice(0, MaxTitleLength);
}

export function sanitizeBody(body) {
  return body.slice(0, MaxBodyLength);
}


export function validTitle(title) {
  return title.length < MaxTitleLength;
}

export function validBody(body) {
  return body.length > 0 && body.length < MaxBodyLength;
}

export function validTag(tag) {
  return tag.length > 0 && tag.length < MaxTagLength;
}

export function validTags(tags) {
  return tags.every(validTag);
}


export function validPostIt(title, body, tags) {
  return validTitle(title) && validBody(body) && validTags(tags);
}
