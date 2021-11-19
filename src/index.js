/* eslint-disable no-unused-vars, import/no-cycle */
import _, { get } from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { getScores, newScore } from './js/api';

const scoreBoard = document.querySelector('#scoresContainer');
const refreshButton = document.querySelector('#refreshButton');
const userName = document.querySelector('#userName');
const userScore = document.querySelector('#userScore');
const submitButton = document.querySelector('#submitScoreButton');

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

refreshButton.addEventListener('click', () => {
  getScores();
});

submitButton.addEventListener('click', () => {
  newScore(userName.value, userScore.value);
  getScores();
});

getScores();

export default populateBoard;