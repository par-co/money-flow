export function isLocalStorageAvailable(): boolean {
  try {
    const key = "storage test";

    localStorage.setItem(key, key);
    localStorage.getItem(key);
    localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
}
