// import  { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import SeatSelector from '../components/SeatSelector';
// import { Clock, Calendar, Star, Users, ChevronDown, CreditCard, Globe } from 'lucide-react';

// const MovieDetailPage = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedTheatre, setSelectedTheatre] = useState(null);
//   const [showSeatSelector, setShowSeatSelector] = useState(false);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [isBookingComplete, setIsBookingComplete] = useState(false);
  
//   // Mock available showtimes
//   const dates = ['2023-11-01', '2023-11-02', '2023-11-03', '2023-11-04', '2023-11-05'];
//   const times = ['10:00 AM', '1:30 PM', '4:00 PM', '7:30 PM', '10:00 PM'];
//   const theatres = [
//     { id: '1', name: 'Grand Cineplex', price: 12 },
//     { id: '2', name: 'Stellar Multiplex', price: 14 },
//     { id: '3', name: 'Royal Cinema', price: 10 }
//   ];
  
//   // Mock available seats
//   const allSeats = Array.from({ length: 8 }, (_, i) => 
//     Array.from({ length: 10 }, (_, j) => `${String.fromCharCode(65 + i)}${j+1}`)
//   ).flat();
  
//   // Randomly make some seats unavailable for the demo
//   const unavailableSeats = allSeats.filter(() => Math.random() > 0.7);
//   const availableSeats = allSeats.filter(seat => !unavailableSeats.includes(seat));
  
//   useEffect(() => {
//     const fetchMovie = async () => {
//       if (!id) return;
      
//       try {
//         setLoading(true);
//         // Instead of calling API directly, use mock data for now
//         const foundMovie = mockMovies.find(m => m._id === id);
//         if (foundMovie) {
//           setMovie(foundMovie);
//         } else {
//           setMovie(mockMovies[0]);
//         }
//         setLoading(false);
//       } catch (err) {
//         setMovie(mockMovies[0]);
//         setError('Failed to fetch movie details');
//         console.error('Error fetching movie details:', err instanceof Error ? err.message : String(err));
//         setLoading(false);
//       }
//     };
    
//     fetchMovie();
//   }, [id]);
  
//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null);
//     setSelectedTheatre(null);
//     setShowSeatSelector(false);
//   };
  
//   const handleTimeSelect = (time) => {
//     setSelectedTime(time);
//     setSelectedTheatre(null);
//     setShowSeatSelector(false);
//   };
  
//   const handleTheatreSelect = (theatre) => {
//     setSelectedTheatre(theatre);
//     setShowSeatSelector(false);
//   };
  
//   const handleShowSeatSelector = () => {
//     if (selectedDate && selectedTime && selectedTheatre) {
//       setShowSeatSelector(true);
//     }
//   };
  
//   const handleSelectSeats = (seats) => {
//     setSelectedSeats(seats);
//     setIsBookingComplete(true);
//   };
  
//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex justify-center items-center h-60">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
//         </div>
//       </div>
//     );
//   }
  
//   if (error || !movie) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex justify-center items-center h-60">
//           <p className="text-red-600">{error || 'Movie not found'}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="mb-8">
//         <Link to="/movies" className="text-primary-600 hover:text-primary-700 flex items-center">
//           <ChevronDown className="h-4 w-4 mr-1 rotate-90" />
//           Back to Movies
//         </Link>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//         <div className="md:col-span-1">
//           <img 
//             src={movie.coverImageURL || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800'} 
//             alt={movie.title}
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
        
//         <div className="md:col-span-2">
//           <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          
//           <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-6 gap-x-6 gap-y-2">
//             <div className="flex items-center">
//               <Star className="h-4 w-4 text-yellow-500 mr-1" />
//               <span>{movie.rating}/10</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{movie.duration}</span>
//             </div>
//             <div className="flex items-center">
//               <Calendar className="h-4 w-4 mr-1" />
//               <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
//             </div>
//             <div className="flex items-center">
//               <Globe className="h-4 w-4 mr-1" />
//               <span>{movie.language}</span>
//             </div>
//           </div>
          
//           <div className="mb-6">
//             <div className="flex flex-wrap gap-2 mb-4">
//               {movie.genre && movie.genre.map(genre => (
//                 <span 
//                   key={genre} 
//                   className="bg-gray-100 dark:bg-dark-700 px-3 py-1 rounded-full text-sm"
//                 >
//                   {genre}
//                 </span>
//               ))}
//             </div>
            
//             <p className="text-gray-700 dark:text-gray-300 mb-6">
//               {movie.description}
//             </p>
//           </div>
          
//           {!isBookingComplete && (
//             <>
//               <h3 className="text-xl font-semibold mb-4">Book Tickets</h3>
              
//               <div className="mb-6">
//                 <h4 className="font-medium mb-2">Date</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {dates.map(date => {
//                     const formattedDate = new Date(date).toLocaleDateString('en-US', {
//                       weekday: 'short',
//                       month: 'short',
//                       day: 'numeric'
//                     });
                    
//                     return (
//                       <button
//                         key={date}
//                         onClick={() => handleDateSelect(date)}
//                         className={`px-4 py-2 border rounded-md ${
//                           selectedDate === date 
//                             ? 'bg-primary-600 text-white border-primary-600' 
//                             : 'border-gray-300 hover:border-primary-600 dark:border-gray-600'
//                         }`}
//                       >
//                         {formattedDate}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
              
//               {selectedDate && (
//                 <div className="mb-6">
//                   <h4 className="font-medium mb-2">Time</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {times.map(time => (
//                       <button
//                         key={time}
//                         onClick={() => handleTimeSelect(time)}
//                         className={`px-4 py-2 border rounded-md ${
//                           selectedTime === time 
//                             ? 'bg-primary-600 text-white border-primary-600' 
//                             : 'border-gray-300 hover:border-primary-600 dark:border-gray-600'
//                         }`}
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
              
//               {selectedDate && selectedTime && (
//                 <div className="mb-6">
//                   <h4 className="font-medium mb-2">Theatre</h4>
//                   <div className="space-y-2">
//                     {theatres.map(theatre => (
//                       <button
//                         key={theatre.id}
//                         onClick={() => handleTheatreSelect(theatre)}
//                         className={`w-full px-4 py-3 border rounded-md flex justify-between items-center ${
//                           selectedTheatre && selectedTheatre.id === theatre.id 
//                             ? 'bg-primary-600 text-white border-primary-600' 
//                             : 'border-gray-300 hover:border-primary-600 dark:border-gray-600'
//                         }`}
//                       >
//                         <span>{theatre.name}</span>
//                         <span>${theatre.price.toFixed(2)}</span>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}
              
//               {selectedDate && selectedTime && selectedTheatre && !showSeatSelector && (
//                 <button 
//                   onClick={handleShowSeatSelector}
//                   className="btn btn-primary flex items-center"
//                 >
//                   <Users className="h-5 w-5 mr-2" />
//                   Select Seats
//                 </button>
//               )}
//             </>
//           )}
          
//           {isBookingComplete && (
//             <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-4">Booking Successful!</h3>
//               <p className="mb-4">Your tickets for <strong>{movie.title}</strong> have been confirmed.</p>
              
//               <div className="space-y-2 mb-6">
//                 <p><span className="font-medium">Theatre:</span> {selectedTheatre.name}</p>
//                 <p><span className="font-medium">Date:</span> {new Date(selectedDate).toLocaleDateString()}</p>
//                 <p><span className="font-medium">Time:</span> {selectedTime}</p>
//                 <p><span className="font-medium">Seats:</span> {selectedSeats.join(', ')}</p>
//               </div>
              
//               <Link to="/movies" className="btn btn-primary">
//                 Browse More Movies
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
      
//       {showSeatSelector && !isBookingComplete && (
//         <div className="card">
//           <div className="p-6 border-b dark:border-gray-700">
//             <h3 className="text-xl font-semibold">Select Your Seats</h3>
//             <p className="text-gray-600 dark:text-gray-400">
//               Click on the seats you want to book at {selectedTheatre.name}
//             </p>
//           </div>
          
//           <SeatSelector 
//             availableSeats={availableSeats} 
//             onSelectSeats={handleSelectSeats}
//           />
//         </div>
//       )}
      
//       {selectedSeats.length > 0 && !isBookingComplete && (
//         <div className="mt-8">
//           <div className="card p-6">
//             <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
            
//             <div className="space-y-4 mb-6">
//               <div className="flex justify-between">
//                 <span>Movie:</span>
//                 <span className="font-medium">{movie.title}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Theatre:</span>
//                 <span>{selectedTheatre.name}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Date:</span>
//                 <span>{new Date(selectedDate).toLocaleDateString()}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Time:</span>
//                 <span>{selectedTime}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Seats:</span>
//                 <span>{selectedSeats.join(', ')}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Number of Tickets:</span>
//                 <span>{selectedSeats.length}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Price per Ticket:</span>
//                 <span>${selectedTheatre.price.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between font-bold">
//                 <span>Total:</span>
//                 <span>${(selectedSeats.length * selectedTheatre.price).toFixed(2)}</span>
//               </div>
//             </div>
            
//             <button 
//               onClick={() => setIsBookingComplete(true)}
//               className="btn btn-primary w-full flex items-center justify-center"
//             >
//               <CreditCard className="h-5 w-5 mr-2" />
//               Complete Booking
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Mock data for preview
// const mockMovies = [
//   {
//     _id: '1',
//     title: 'The Dark Knight',
//     description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
//     genre: ['Action', 'Crime', 'Drama'],
//     duration: '152 min',
//     language: 'English',
//     releaseDate: '2008-07-18',
//     coverImageURL: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 9.0,
//   },
//   {
//     _id: '2',
//     title: 'Inception',
//     description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
//     genre: ['Action', 'Adventure', 'Sci-Fi'],
//     duration: '148 min',
//     language: 'English',
//     releaseDate: '2010-07-16',
//     coverImageURL: 'https://images.unsplash.com/photo-1526041092449-209d556f7a32?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 8.8,
//   },
//   {
//     _id: '3',
//     title: 'Interstellar',
//     description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
//     genre: ['Adventure', 'Drama', 'Sci-Fi'],
//     duration: '169 min',
//     language: 'English',
//     releaseDate: '2014-11-07',
//     coverImageURL: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 8.6,
//   }
// ];

// export default MovieDetailPage;
 



// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import SeatSelector from '../components/SeatSelector';
// import { Clock, Calendar, Star, Users, ChevronDown, CreditCard, Globe } from 'lucide-react';
// import { fetchMovieById } from '../service/fetchMovie';
// import { fetchTheatres } from '../service/fetchTheatres'; // 👈 NEW import

// const MovieDetailPage = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedTheatre, setSelectedTheatre] = useState(null);
//   const [showSeatSelector, setShowSeatSelector] = useState(false);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [isBookingComplete, setIsBookingComplete] = useState(false);
//   const [theatres, setTheatres] = useState([]); // 👈 Replace mock data

//   const dates = ['2025-06-19', '2025-06-20', '2025-06-21', '2025-06-22', '2025-06-23'];
//   const times = ['11:00 AM', '2:30 PM', '5:00 PM', '8:00 PM'];

//   const allSeats = Array.from({ length: 8 }, (_, i) =>
//     Array.from({ length: 10 }, (_, j) => `${String.fromCharCode(65 + i)}${j + 1}`)
//   ).flat();
//   const unavailableSeats = allSeats.filter(() => Math.random() > 0.7);
//   const availableSeats = allSeats.filter(seat => !unavailableSeats.includes(seat));

//   useEffect(() => {
//     const loadMovie = async () => {
//       if (!id) return;
//       setLoading(true);
//       try {
//         const data = await fetchMovieById(id);
//         setMovie(data);
//       } catch (err) {
//         setError(err.message || 'Failed to fetch movie');
//       } finally {
//         setLoading(false);
//       }
//     };

//     const loadTheatres = async () => {
//       try {
//         const data = await fetchTheatres();
//         console.log('Fetched Theatres:', data);
//         setTheatres(data); // Adjust if response is wrapped like `data.data`
//       } catch (err) {
//         console.error('Failed to fetch theatres:', err);
//       }
//     };

//     loadMovie();
//     loadTheatres();
//   }, [id]);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//     setSelectedTime(null);
//     setSelectedTheatre(null);
//     setShowSeatSelector(false);
//   };

//   const handleTimeSelect = (time) => {
//     setSelectedTime(time);
//     setSelectedTheatre(null);
//     setShowSeatSelector(false);
//   };

//   const handleTheatreSelect = (theatre) => {
//     setSelectedTheatre(theatre);
//     setShowSeatSelector(false);
//   };

//   const handleShowSeatSelector = () => {
//     if (selectedDate && selectedTime && selectedTheatre) {
//       setShowSeatSelector(true);
//     }
//   };

//   const handleSelectSeats = (seats) => {
//     setSelectedSeats(seats);
//     setIsBookingComplete(true);
//   };

//   if (loading) {
//     return (
//       <div className="container px-4 py-12">
//         <div className="flex justify-center items-center h-60">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !movie) {
//     return (
//       <div className="container px-4 py-12">
//         <div className="flex justify-center items-center h-60">
//           <p className="text-red-600">{error || 'Movie not found'}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="mb-8">
//         <Link to="/movies" className="text-primary-600 hover:text-primary-700 flex items-center">
//           <ChevronDown className="h-4 w-4 mr-1 rotate-90" />
//           Back to Movies
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//         <div className="md:col-span-1">
//           <img
//             src={movie.data.coverImageURL || 'https://via.placeholder.com/600x800'}
//             alt={movie.data.title}
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>

//         <div className="md:col-span-2">
//           <h1 className="text-3xl font-bold mb-4">{movie.data.title}</h1>
//           <h6 className="text-3l mb-4">{movie.data.description}</h6>

//           <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-6 gap-x-6 gap-y-2">
//             <div className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-1" /><span>{movie.rating}/10</span></div>
//             <div className="flex items-center"><Clock className="h-4 w-4 mr-1" /><span>{movie.data.duration}</span></div>
//             <div className="flex items-center"><Calendar className="h-4 w-4 mr-1" /><span>{new Date(movie.releaseDate).toLocaleDateString()}</span></div>
//             <div className="flex items-center"><Globe className="h-4 w-4 mr-1" /><span>{movie.data.language}</span></div>
//           </div>

//           {!isBookingComplete && (
//             <>
//               <h3 className="text-xl font-semibold mb-4">Book Tickets</h3>

//               <div className="mb-6">
//                 <h4 className="font-medium mb-2">Date</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {dates.map(date => {
//                     const formattedDate = new Date(date).toLocaleDateString('en-US', {
//                       weekday: 'short',
//                       month: 'short',
//                       day: 'numeric'
//                     });
//                     return (
//                       <button
//                         key={date}
//                         onClick={() => handleDateSelect(date)}
//                         className={`px-4 py-2 border rounded-md ${selectedDate === date ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-300 hover:border-primary-600 dark:border-gray-600'}`}
//                       >
//                         {formattedDate}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>

//               {selectedDate && (
//                 <div className="mb-6">
//                   <h4 className="font-medium mb-2">Time</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {times.map(time => (
//                       <button
//                         key={time}
//                         onClick={() => handleTimeSelect(time)}
//                         className={`px-4 py-2 border rounded-md ${selectedTime === time ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-300 hover:border-primary-600 dark:border-gray-600'}`}
//                       >
//                         {time}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {selectedDate && selectedTime && (
//                 <div className="mb-6">
//                   <h4 className="font-medium mb-2">Theatre</h4>
//                   <div className="space-y-2">
//                     {theatres.map(theatre => (
//                       <button
//                         key={theatre._id}
//                         onClick={() => handleTheatreSelect(theatre)}
//                         className={`w-full px-4 py-3 border rounded-md flex justify-between items-center ${selectedTheatre && selectedTheatre._id === theatre._id ? 'bg-primary-600 text-white border-primary-600' : 'border-gray-300 hover:border-primary-600 dark:border-gray-600'}`}
//                       >
//                         <span>{theatre.name}</span>
//                         <span>${theatre.price?.toFixed(2) || '10.00'}</span>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {selectedDate && selectedTime && selectedTheatre && !showSeatSelector && (
//                 <button onClick={handleShowSeatSelector} className="btn btn-primary flex items-center">
//                   <Users className="h-5 w-5 mr-2" />
//                   Select Seats
//                 </button>
//               )}
//             </>
//           )}

//           {isBookingComplete && (
//             <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
//               <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-4">Booking Successful!</h3>
//               <p className="mb-4">Your tickets for <strong>{movie.title}</strong> have been confirmed.</p>
//               <div className="space-y-2 mb-6">
//                 <p><span className="font-medium">Theatre:</span> {selectedTheatre.name}</p>
//                 <p><span className="font-medium">Date:</span> {new Date(selectedDate).toLocaleDateString()}</p>
//                 <p><span className="font-medium">Time:</span> {selectedTime}</p>
//                 <p><span className="font-medium">Seats:</span> {selectedSeats.join(', ')}</p>
//               </div>
//               <Link to="/movies" className="btn btn-primary">Browse More Movies</Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {showSeatSelector && !isBookingComplete && (
//         <div className="card">
//           <div className="p-6 border-b dark:border-gray-700">
//             <h3 className="text-xl font-semibold">Select Your Seats</h3>
//             <p className="text-gray-600 dark:text-gray-400">Click on the seats you want to book at {selectedTheatre.name}</p>
//           </div>
//           <SeatSelector availableSeats={availableSeats} onSelectSeats={handleSelectSeats} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDetailPage;



import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SeatSelector from '../components/SeatSelector';
import { Clock, Calendar, Star, Users, ChevronDown, CreditCard, Globe, ArrowLeft } from 'lucide-react';
import { fetchMovieById } from '../service/fetchMovie';
import { fetchTheatres } from '../service/fetchTheatres';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTheatre, setSelectedTheatre] = useState(null);
  const [showSeatSelector, setShowSeatSelector] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [theatres, setTheatres] = useState([]);

  const dates = ['2025-06-19', '2025-06-20', '2025-06-21', '2025-06-22', '2025-06-23'];
  const times = ['11:00', '14:30', '17:00', '20:00'];

  const allSeats = Array.from({ length: 8 }, (_, i) =>
    Array.from({ length: 10 }, (_, j) => `${String.fromCharCode(65 + i)}${j + 1}`)
  ).flat();
  const unavailableSeats = allSeats.filter(() => Math.random() > 0.7);
  const availableSeats = allSeats.filter(seat => !unavailableSeats.includes(seat));

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [movieData, theatreData] = await Promise.all([
          fetchMovieById(id),
          fetchTheatres()
        ]);
        setMovie(movieData);
        setTheatres(theatreData);
      } catch (err) {
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setSelectedTheatre(null);
    setShowSeatSelector(false);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSelectedTheatre(null);
    setShowSeatSelector(false);
  };

  const handleTheatreSelect = (theatre) => {
    setSelectedTheatre(theatre);
    setShowSeatSelector(false);
  };

  const handleShowSeatSelector = () => {
    if (selectedDate && selectedTime && selectedTheatre) {
      setShowSeatSelector(true);
    }
  };

  const handleSelectSeats = (seats) => {
    setSelectedSeats(seats);
    setIsBookingComplete(true);
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    return `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-t-transparent"></div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center p-8 border border-gray-800 rounded-xl">
          <p className="text-red-400 font-medium mb-4">{error || 'Movie not found'}</p>
          <Link 
            to="/movies" 
            className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors inline-block"
          >
            Browse Movies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Back Button */}
        <div className="mb-12">
          <Link 
            to="/movies" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            BACK TO MOVIES
          </Link>
        </div>

        {/* Movie Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="relative group overflow-hidden rounded-xl border border-gray-800">
              <img
                src={movie.data.coverImageURL || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=1200'}
                alt={movie.data.title}
                className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl font-serif font-bold tracking-tight mb-4">
                {movie.data.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {movie.data.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>{movie.rating}/10</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{movie.data.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{new Date(movie.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{movie.data.language}</span>
                </div>
              </div>
            </div>

            {/* Booking Flow */}
            {!isBookingComplete ? (
              <div className="border-t border-gray-800 pt-8">
                <h2 className="text-2xl font-serif font-bold tracking-tight mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    BOOK YOUR EXPERIENCE
                  </span>
                </h2>

                {/* Date Selection */}
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">SELECT DATE</h3>
                  <div className="flex flex-wrap gap-2">
                    {dates.map(date => {
                      const formattedDate = new Date(date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      });
                      return (
                        <button
                          key={date}
                          onClick={() => handleDateSelect(date)}
                          className={`px-5 py-2.5 rounded-full border transition-colors ${
                            selectedDate === date
                              ? 'bg-white text-black border-white'
                              : 'border-gray-700 text-gray-400 hover:border-gray-600'
                          }`}
                        >
                          {formattedDate}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div className="mb-8">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">SELECT TIME</h3>
                    <div className="flex flex-wrap gap-2">
                      {times.map(time => (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className={`px-5 py-2.5 rounded-full border transition-colors ${
                            selectedTime === time
                              ? 'bg-white text-black border-white'
                              : 'border-gray-700 text-gray-400 hover:border-gray-600'
                          }`}
                        >
                          {formatTime(time)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Theatre Selection */}
                {selectedDate && selectedTime && (
                  <div className="mb-8">
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">SELECT THEATRE</h3>
                    <div className="space-y-3">
                      {theatres.map(theatre => (
                        <button
                          key={theatre._id}
                          onClick={() => handleTheatreSelect(theatre)}
                          className={`w-full px-6 py-4 rounded-xl border flex justify-between items-center transition-colors ${
                            selectedTheatre && selectedTheatre._id === theatre._id
                              ? 'bg-white text-black border-white'
                              : 'border-gray-700 hover:border-gray-600'
                          }`}
                        >
                          <span className="font-medium">{theatre.name}</span>
                          <span className="text-sm">${theatre.price?.toFixed(2) || '12.00'}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Proceed to Seat Selection */}
                {selectedDate && selectedTime && selectedTheatre && !showSeatSelector && (
                  <button 
                    onClick={handleShowSeatSelector}
                    className="w-full py-4 px-6 bg-white text-black hover:bg-gray-100 rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-300 mt-8"
                  >
                    <Users className="h-5 w-5" />
                    <span className="text-sm uppercase tracking-wider">SELECT SEATS</span>
                  </button>
                )}
              </div>
            ) : (
              /* Booking Confirmation */
              <div className="border border-gray-800 rounded-xl p-8 bg-gray-900/30">
                <h2 className="text-2xl font-serif font-bold tracking-tight mb-6 text-green-400">
                  BOOKING CONFIRMED
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-lg">
                    Your tickets for <span className="font-bold">{movie.data.title}</span> are secured.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Theatre</p>
                      <p>{selectedTheatre.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Date & Time</p>
                      <p>
                        {new Date(selectedDate).toLocaleDateString()} at {formatTime(selectedTime)}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Seats</p>
                      <p>{selectedSeats.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider text-xs mb-1">Total</p>
                      <p>${(selectedTheatre.price * selectedSeats.length).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/movies" 
                    className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-100 text-center transition-colors"
                  >
                    Browse More Films
                  </Link>
                  <button className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-900/50 transition-colors flex items-center justify-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <span>View Ticket</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Seat Selector */}
        {showSeatSelector && !isBookingComplete && (
          <div className="border-t border-gray-800 pt-16">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-serif font-bold tracking-tight mb-2">
                SELECT YOUR SEATS
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                At {selectedTheatre.name} on {new Date(selectedDate).toLocaleDateString()} at {formatTime(selectedTime)}
              </p>
            </div>
            <SeatSelector availableSeats={availableSeats} onSelectSeats={handleSelectSeats} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;