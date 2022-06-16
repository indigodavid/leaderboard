import refresh from './refresh.js';
import addLi from './add-li.js';

const refreshList = (baseUrl, gameId) => {
  const leaderboard = document.getElementById('leaderboard');
  leaderboard.innerHTML = '';
  const leaderboardData = refresh(baseUrl, gameId);
  leaderboardData.then((value) => {
    if (value.result) {
      value.result.forEach((element) => {
        const text = `${element.user} <span>${element.score}</span>`;
        addLi(text);
      });
    }
  });
};

export default refreshList;