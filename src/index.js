import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import addLi from './modules/add-li.js';

const leaderboardData = {
  result: [
    {
      user: 'John Doe',
      score: 42,
    },
    {
      user: 'Peter Parker',
      score: 35,
    },
    {
      user: 'Wonder Woman',
      score: 50,
    },
  ],
};

leaderboardData.result.forEach((element) => {
  const text = `${element.user}: ${element.score}`;
  addLi(text);
});