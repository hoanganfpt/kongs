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
    console.log("Raw response:", response);

    const result = await response.json();
    console.log("Parsed JSON response:", result);

    if (!response.ok) {
      console.error('Response not OK', result);
      throw new Error(result.message || 'Error joining KONGS');
    }

    return result;
  } catch (error) {
    console.error('Error joining KONGS:', error.message || error);

    if (error.response) {
      console.error('Error details:', await error.response.json());
    }

    throw error;
  }
};
