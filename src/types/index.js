//  Movie interface
export const MovieType = {
  _id: String,
  title: String,
  description: String,
  language: String,
  duration: String,
  coverImageURL: String,
  genre: Array, // We'll add this for frontend organization
  rating: Number, // We'll add this for frontend display
};

// Theatre interface
export const TheatreType = {
  _id: String,
  name: String,
  plot: String,
  street: String,
  city: String,
  country: String,
  pincode: Number,
  lat: String,
  lon: String,
};

// TheatreHall interface
export const TheatreHallType = {
  _id: String,
  number: Number,
  theatreId: String,
  seatingCapacity: Number,
};

// Show interface
export const ShowType = {
  _id: String,
  movieId: String,
  theatreHallId: String,
  startTimeStamp: Number,
  endTimeStamp: Number,
  price: Number,
};

// Booking interface
export const BookingType = {
  _id: String,
  showId: String,
  seatNumber: Number,
  paymentId: String,
  gateway: String,
  userId: String,
};

// User interface
export const UserType = {
  _id: String,
  firstname: String,
  lastname: String,
  email: String,
  role: String,
};
 