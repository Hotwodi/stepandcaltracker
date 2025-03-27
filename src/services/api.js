import axios from 'axios';

export const addSteps = async (userId, date, steps) => {
  try {
    const response = await axios.post('/steps', { userId, date, steps });
    return response.data;
  } catch (error) {
    console.error('Error adding steps:', error);
    throw error;
  }
};
