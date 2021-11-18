/* eslint-disable no-unused-vars */
import _, { get } from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const requestUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0pCiglrVtP9Y26ppM44Z/scores/';
const scoreBoard = document.querySelector('#scoresContainer');
const refreshButton = document.querySelector('#refreshButton');
const userName = document.querySelector('#userName');
const userScore = document.querySelector('#userScore');
const submitButton = document.querySelector('#submitScoreButton');

async function newScore(user, score) {
  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
  return response.json();
}

function populateBoard(obj) {
  const arr = obj.result;
  while (scoreBoard.firstChild) {
    scoreBoard.removeChild(scoreBoard.firstChild);
  }
  arr.forEach((element) => {
    const cont = document.createElement('div');
    cont.classList.add('col');
    cont.textContent = `${element.user}: ${element.score}`;
    scoreBoard.appendChild(cont);
  });
}

const request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();
request.onload = () => {
  const scores = request.response;
  populateBoard(scores);
};

refreshButton.addEventListener('click', () => {
  populateBoard(request.response);
});

submitButton.addEventListener('click', () => {
  newScore(userName.value, userScore.value);
  populateBoard(request.response);
});