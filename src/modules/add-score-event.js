import addScore from './add-score.js';
import refreshList from './refresh-list.js';
import UserScore from './user-score.js';

const addScoreEventHandler = (baseUrl, gameId) => {
  const submit = document.getElementById('submit-score');
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const message = document.getElementById('server-message');

  submit.addEventListener('click', () => {
    message.innerText = 'Please wait...';
    if (name.value && score.value) {
      const userScore = new UserScore(name.value, score.value);
      addScore(baseUrl, gameId, userScore).then((value) => {
        message.innerText = value.result;
        refreshList(baseUrl, gameId);
      });
    } else {
      message.innerText = 'Cannot submit empty score or name. Please try again.';
    }
    name.value = '';
    score.value = '';
    setTimeout(() => {
      message.innerText = '';
    }, 4000);
  });
};

export default addScoreEventHandler;