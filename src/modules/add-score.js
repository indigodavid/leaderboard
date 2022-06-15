
const addScore = async (baseUrl, gameId, userScore) => {
  const urlAppend = gameId + '/scores/'
  const response = await fetch(baseUrl + urlAppend, {
    method: 'POST',
    body: JSON.stringify(userScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const serverMessage = await response.json();
  return serverMessage;
}

export default addScore;