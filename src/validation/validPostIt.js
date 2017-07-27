
export const MaxTitleLength = 120;
export const MaxBodyLength = 1000;


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


export function validPostIt(title, body) {
  return validTitle(title) && validBody(body);
}
