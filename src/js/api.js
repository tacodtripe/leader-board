/* eslint-disable import/no-cycle, quote-props */
import populateBoard from '../index';

const requestUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0pCiglrVtP9Y26ppM44Z/scores/';

const newScore = async (user, score) => {
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
  response.json();
};

const getScores = async () => {
  const resp = await fetch(requestUrl)
    .then((response) => response.json())
    .then((data) => data);
  populateBoard(resp);
};

export { newScore, getScores };