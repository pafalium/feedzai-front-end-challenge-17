
const STORAGE_KEY = 'PostItStore';

export function loadPostIts() {
  let storageContent = localStorage.getItem(STORAGE_KEY);
  return storageContent !== null
    ? JSON.parse(storageContent)
    : [];
}

export function savePostIts(postIts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(postIts));
}

