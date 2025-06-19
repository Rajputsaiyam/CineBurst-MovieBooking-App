import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // adjust for production later

export const fetchTheatres = async () => {
  const response = await axios.get(`${API_BASE_URL}/admin/theatres`);
  return response.data.data; // returns the array of theatres directly
};
