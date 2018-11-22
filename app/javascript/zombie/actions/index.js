const BASE_URL = '/api/v1';

export const FETCH_ZOMBIES = 'FETCH_ZOMBIES';
export const FETCH_ZOMBIE = 'FETCH_ZOMBIE';
export const SEARCH_ZOMBIES = 'SEARCH_ZOMBIES';

export function fetchZombies() {
  const url = `${BASE_URL}/zombies`;
  const promise = fetch(url, { credentials: "same-origin" })
    .then(r => r.json());
  return {
    type: FETCH_ZOMBIES,
    payload: promise
  }
}

export function fetchZombie(id) {
  const url = `${BASE_URL}/zombies/${id}`;
  const promise = fetch(url, { credentials: "same-origin" })
    .then(r => r.json());
  return {
    type: FETCH_ZOMBIE,
    payload: promise
  }
}

export function searchZombies(query) {
  const url = `${BASE_URL}/zombies?query=${query}`;
  const promise = fetch(url, { credentials: "same-origin" })
    .then(r => r.json());
  return {
    type: SEARCH_ZOMBIES,
    payload: promise
  }
}
