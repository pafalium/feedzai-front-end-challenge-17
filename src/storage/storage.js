
const STORAGE_KEY = 'PostItStore';

/**
  Loads Post-Its from localStorage stored at key STORAGE_KEY

  @returns {Array.{Object}}
*/
export function loadPostIts() {
  let storageContent = localStorage.getItem(STORAGE_KEY);
  return storageContent !== null
    ? JSON.parse(storageContent)
    : [];
}

/**
  Saves Post-Its to localStorage at key STORAGE_KEY

  @param {Array.{Object}} postIts
*/
export function savePostIts(postIts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(postIts));
}

