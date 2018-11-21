export const FETCH_ZOMBIES = 'FETCH_ZOMBIES';

export function fetchZombies() {
  const promise = fetch('/api/v1/zombies')
    .then(r => r.json());
  return {
    type: FETCH_ZOMBIES,
    payload: promise
  }
}
