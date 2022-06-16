import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import addScoreEventHandler from './modules/views/add-score-event.js';
import refreshList from './modules/views/refresh-list.js';

const gameId = 'drIYWOVFCZVjBULanydp';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const refreshButton = document.getElementById('refresh');

refreshList(baseUrl, gameId);

addScoreEventHandler(baseUrl, gameId);

refreshButton.addEventListener('click', () => {
  refreshList(baseUrl, gameId);
});
