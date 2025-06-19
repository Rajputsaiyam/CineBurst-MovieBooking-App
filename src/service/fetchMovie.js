import axios from "axios";

export const getAllMovies = async () => {
  try {
    const response = await axios.get("http://localhost:8000/admin/movies");

    console.log("Full API response:", response); // 👈 Debug log
    console.log("Extracted movies:", response.data?.data); // 👈 Should be array

    // Make sure you return exactly the movie array from `data.data`
    return response.data?.data || [];

  } catch (error) {
    console.error("Error during API call:", error);
    return []; // Fallback to empty array
  }
};



const API_BASE_URL = 'http://localhost:8000';

export const fetchMovieById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/admin/movies/${id}`);
  return response.data; // Assuming backend returns a single movie object
};
