import axios from 'axios';

export const addSteps = async (userId, date, steps) => {
  try {
    const response = await axios.post('https://example.com/api/steps', {
      userId,
      date,
      steps,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding steps:', error);
    throw error;
  }
};

export const fetchStepData = async (userId, dataType) => {
  try {
    const response = await axios.get(`https://api.example.com/${userId}/${dataType}`);
    return response;
  } catch (error) {
    console.error('Error fetching step data:', error);
    return { data: [] };
  }
};
