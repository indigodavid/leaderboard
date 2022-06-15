const game = {
  name: '2022 FIFA World Cup Correct Predictions',
};

const createGame = async (baseUrl) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const text = await response.json();
  const gameH2 = document.getElementById('game');
  gameH2.innerHTML = text.result;
};

export default createGame;
