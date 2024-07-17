const BASE_URL = 'https://api-kongs.thammer.fun/api/leaderboard';

export const fetchLeaderboardData = async () => {
  try {
    const response = await fetch(BASE_URL);
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
