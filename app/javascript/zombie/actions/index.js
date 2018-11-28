const BASE_URL = '/api/v1';

export const FETCH_ZOMBIES = 'FETCH_ZOMBIES';
export const FETCH_ZOMBIE = 'FETCH_ZOMBIE';
export const SEARCH_ZOMBIES = 'SEARCH_ZOMBIES';
export const ADD_ZOMBIE = 'ADD_ZOMBIE';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_ARMORS = 'FETCH_ARMORS';
export const FETCH_WEAPONS = 'FETCH_WEAPONS';

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
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(zombie)
  }).then(r => r.json())
    .then(() => callback());

  return {
    type: ADD_ZOMBIE,
    payload: request
  }
}

export function deleteZombie(zombie, history) {
  const url = `${BASE_URL}/zombies/${zombie.id}`;
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const request = fetch(url, {
    method: 'DELETE',
    headers: {
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
  }).then(r => history.push(''));

  return {
    type: 'REMOVE_CAR',
    payload: zombie
  };
}

export function fetchUser() {
  const url = `${BASE_URL}/zombies/user`;
  const promise = fetch(url, { credentials: 'same-origin' })
    .then(r => r.json());
  return {
    type: FETCH_USER,
    payload: promise
  }
}

export function fetchArmors() {
  const url = `${BASE_URL}/armors`;
  const promise = fetch(url, { credentials: "same-origin" })
    .then(r => r.json());
  return {
    type: FETCH_ARMORS,
    payload: promise
  }
}

export function fetchWeapons() {
  const url = `${BASE_URL}/weapons`;
  const promise = fetch(url, { credentials: "same-origin" })
    .then(r => r.json());
  return {
    type: FETCH_WEAPONS,
    payload: promise
  }
}

export function logout(history) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
  const promise = fetch('/users/sign_out', {
    method: 'DELETE',
    headers: {
    'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
  }).then(r => history.push('/users/sign_in'));

  return {
    type: 'LOG_OUT',
    payload: promise
  }
}
