/* eslint-disable import/no-cycle, quote-props */
import populateBoard from '../index';

const requestUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0pCiglrVtP9Y26ppM44Z/scores/';

async function newScore(user, score) {
  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'user': user,
      'score': score,
    }),
  });
  return response.json();
}

async function getScores() {
  const resp = await fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => data);
  populateBoard(resp);
}

export { newScore, getScores };