const game = {
  name: '2022 FIFA World Cup Correct Predictions'
}

const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const text = await response.json();
  const gameH2 = document.getElementById('game');
  gameH2.innerHTML = text.result;
}

export default createGame;
