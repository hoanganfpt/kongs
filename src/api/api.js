// api.js
const BASE_URL = 'https://api-kongs.thammer.fun/api/join';

export const joinKongs = async (queryId, referenceId) => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("query_id", queryId);
  urlencoded.append("reference_id", referenceId);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: urlencoded,
  };

  try {
    console.log("Sending request to API with data:", { queryId, referenceId });
    const response = await fetch(BASE_URL, requestOptions);

    console.log("Raw response status:", response.status);
    const result = await response.json();
    console.log("Parsed JSON response:", result);

    if (!response.ok) {
      console.error('Response not OK', result);
      throw new Error(result.message || 'Error joining KONGS');
    }

    return result;
  } catch (error) {
    console.error('Error joining KONGS:', error.message || error);
    throw error;
  }
};


export const getInvitees = async () => {
  try {
    console.log("Fetching invitees from API");
    const response = await fetch(`${BASE_URL}/join`);

    console.log("Raw response status:", response.status);
    const result = await response.json();
    console.log("Parsed JSON response:", result);

    if (!response.ok) {
      console.error('Response not OK', result);
      throw new Error(result.message || 'Error fetching invitees');
    }

    return result;
  } catch (error) {
    console.error('Error fetching invitees:', error.message || error);
    throw error;
  }
};