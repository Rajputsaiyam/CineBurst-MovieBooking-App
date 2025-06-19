import  axios from 'axios';

// Set your API base URL here
const API_URL = 'http://localhost:5000/api';

// Create axios instance without transformRequest
const api = axios.create({
  baseURL: API_URL,
  transformRequest: undefined
});

// Movies API
export const getMovies = async (page = 1, limit = 6) => {
  try {
    const response = await api.get(`/movies?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
};

export const createMovie = async (movieData) => {
  try {
    const response = await api.post('/movies', movieData);
    return response.data;
  } catch (error) {
    console.error('Error creating movie:', error);
    throw error;
  }
};

export const updateMovie = async (id, movieData) => {
  try {
    const response = await api.patch(`/movies/${id}`, movieData);
    return response.data;
  } catch (error) {
    console.error('Error updating movie:', error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    const response = await api.delete(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting movie:', error);
    throw error;
  }
};

// Theatres API
export const getTheatres = async (page = 1, limit = 6) => {
  try {
    const response = await api.get(`/theatres?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching theatres:', error);
    throw error;
  }
};

export const getTheatreById = async (id) => {
  try {
    const response = await api.get(`/theatres/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching theatre:', error);
    throw error;
  }
};

export const getTheatreHallsByTheatreId = async (theatreId) => {
  try {
    const response = await api.get(`/theatres/${theatreId}/halls`);
    return response.data;
  } catch (error) {
    console.error('Error fetching theatre halls:', error);
    throw error;
  }
};

export const createTheatre = async (theatreData) => {
  try {
    const response = await api.post('/theatres', theatreData);
    return response.data;
  } catch (error) {
    console.error('Error creating theatre:', error);
    throw error;
  }
};

export const createTheatreHall = async (hallData) => {
  try {
    const response = await api.post('/theatres/halls', hallData);
    return response.data;
  } catch (error) {
    console.error('Error creating theatre hall:', error);
    throw error;
  }
};

export const createShow = async (showData) => {
  try {
    const response = await api.post('/shows', showData);
    return response.data;
  } catch (error) {
    console.error('Error creating show:', error);
    throw error;
  }
};

// Bookings API
export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('/bookings', bookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};
 