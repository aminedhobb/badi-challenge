const BASE_URL = '/api/v1';

export const FETCH_ZOMBIES = 'FETCH_ZOMBIES';
export const FETCH_ZOMBIE = 'FETCH_ZOMBIE';
export const SEARCH_ZOMBIES = 'SEARCH_ZOMBIES';
export const ADD_ZOMBIE = 'ADD_ZOMBIE';

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

export function addZombie(zombie, callback) {
  const url = `${BASE_URL}/zombies/`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    },
    body: JSON.stringify(zombie)
  }).then(r => r.json())
    .then(() => callback());

  return {
    type: ADD_ZOMBIE,
    payload: request
  }
}
