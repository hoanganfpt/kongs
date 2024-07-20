const BASE_URL = 'https://api-kongs.thammer.fun/api/leaderboard';

export const fetchLeaderboardData = async () => {
  try {
    const user = JSON.parse(localStorage.getItem('userData'));
    const response = await fetch(`${BASE_URL}?telegramId=${user.telegramId}`);
    const data = await response.json();
    console.log("API response data:", data);
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch leaderboard data');
    }
    return data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    throw error;
  }
};
