
const refresh = async (baseUrl, gameId) => {
  const urlAppend = gameId + '/scores/'
  const response = await fetch(baseUrl + urlAppend);
  const leaderboardData = await response.json();
  return leaderboardData;
}

export default refresh;