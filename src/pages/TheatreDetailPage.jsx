import  { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Film, ChevronDown } from 'lucide-react';

const TheatreDetailPage = () => {
  const { id } = useParams();
  const [theatre, setTheatre] = useState(null);
  const [theatreHalls, setTheatreHalls] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Mock dates for showtimes
  const dates = [
    new Date(),
    new Date(Date.now() + 86400000),
    new Date(Date.now() + 86400000 * 2),
    new Date(Date.now() + 86400000 * 3),
    new Date(Date.now() + 86400000 * 4),
  ];
  
  useEffect(() => {
    const fetchTheatreDetails = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        // Instead of calling API directly, use mock data for now
        const foundTheatre = mockTheatres.find(t => t._id === id);
        if (foundTheatre) {
          setTheatre(foundTheatre);
          // Simulate fetching theatre halls
          setTheatreHalls(mockTheatreHalls.filter(hall => hall.theatreId === id));
          // Simulate fetching shows
          setShows(mockShows.filter(show => 
            mockTheatreHalls.some(hall => 
              hall.theatreId === id && hall._id === show.theatreHallId
            )
          ));
          // Set default selected date to today
          setSelectedDate(new Date().toISOString().split('T')[0]);
        } else {
          setTheatre(mockTheatres[0]);
          setTheatreHalls(mockTheatreHalls.filter(hall => hall.theatreId === mockTheatres[0]._id));
          setShows(mockShows.filter(show => 
            mockTheatreHalls.some(hall => 
              hall.theatreId === mockTheatres[0]._id && hall._id === show.theatreHallId
            )
          ));
          setSelectedDate(new Date().toISOString().split('T')[0]);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch theatre details');
        console.error('Error fetching theatre details:', err instanceof Error ? err.message : String(err));
        setLoading(false);
      }
    };
    
    fetchTheatreDetails();
  }, [id]);
  
  // Filter shows by selected date
  const filteredShows = selectedDate 
    ? shows.filter(show => {
        const showDate = new Date(show.startTimeStamp).toISOString().split('T')[0];
        return showDate === selectedDate;
      })
    : shows;
  
  // Group shows by movie
  const showsByMovie = filteredShows.reduce((acc, show) => {
    const movie = mockMovies.find(m => m._id === show.movieId);
    if (!movie) return acc;
    
    if (!acc[show.movieId]) {
      acc[show.movieId] = {
        movie,
        shows: []
      };
    }
    
    acc[show.movieId].shows.push({
      ...show,
      hallName: mockTheatreHalls.find(h => h._id === show.theatreHallId)?.number || 'Unknown Hall'
    });
    
    return acc;
  }, {});
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }
  
  if (error || !theatre) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-60">
          <p className="text-red-600">{error || 'Theatre not found'}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/theatres" className="text-primary-600 hover:text-primary-700 flex items-center">
          <ChevronDown className="h-4 w-4 mr-1 rotate-90" />
          Back to Theatres
        </Link>
      </div>
      
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">{theatre.name}</h1>
        
        <div className="flex items-start text-gray-600 dark:text-gray-400 mb-6">
          <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-primary-600" />
          <span>
            {theatre.plot}, {theatre.street}, {theatre.city}, {theatre.country}, {theatre.pincode}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-3">Theatre Information</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="font-medium w-24">Screens:</span> 
                <span>{theatreHalls.length}</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-24">Seating:</span> 
                <span>Premium recliner seats available</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-24">Facilities:</span> 
                <span>Dolby Atmos Sound, 4K Projection, Food Court</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium w-24">Parking:</span> 
                <span>Available</span>
              </p>
            </div>
          </div>
          
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1526041092449-209d556f7a32?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=400&w=600" 
              alt={theatre.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Movie Showtimes</h2>
        
        <div className="mb-6">
          <h3 className="font-medium mb-3">Select Date</h3>
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {dates.map(date => {
              const dateString = date.toISOString().split('T')[0];
              const isToday = new Date().toISOString().split('T')[0] === dateString;
              
              return (
                <button
                  key={dateString}
                  onClick={() => setSelectedDate(dateString)}
                  className={`px-4 py-2 border rounded-md whitespace-nowrap ${
                    selectedDate === dateString 
                      ? 'bg-primary-600 text-white border-primary-600' 
                      : 'border-gray-300 hover:border-primary-600 dark:border-gray-600'
                  }`}
                >
                  {isToday ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </button>
              );
            })}
          </div>
        </div>
        
        {Object.keys(showsByMovie).length > 0 ? (
          <div className="space-y-6">
            {Object.values(showsByMovie).map(({ movie, shows }) => (
              <div key={movie._id} className="card">
                <div className="p-4 border-b dark:border-gray-700 flex items-center space-x-4">
                  <div className="h-14 w-10 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={movie.coverImageURL || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800'} 
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{movie.title}</h3>
                    <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{movie.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{movie.language}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {shows.map(show => {
                      const showTime = new Date(show.startTimeStamp);
                      return (
                        <Link
                          key={show._id}
                          to={`/movies/${movie._id}?theatre=${theatre._id}&show=${show._id}&date=${selectedDate}`}
                          className="px-3 py-2 border rounded-md hover:border-primary-600 hover:text-primary-600 transition-colors flex flex-col items-center"
                        >
                          <span className="font-medium">
                            {showTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Hall {show.hallName}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card p-8 text-center">
            <Film className="h-10 w-10 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Shows Available</h3>
            <p className="text-gray-600 dark:text-gray-400">
              There are no shows scheduled for this date. Please try another date.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Mock data for preview
const mockTheatres = [
  {
    _id: '1',
    name: 'Grand Cineplex',
    plot: '123',
    street: 'Main Street',
    city: 'New York',
    country: 'USA',
    pincode: 10001,
    lat: '40.7128',
    lon: '-74.0060',
  },
  {
    _id: '2',
    name: 'Stellar Multiplex',
    plot: '456',
    street: 'Broadway Avenue',
    city: 'Los Angeles',
    country: 'USA',
    pincode: 90001,
    lat: '34.0522',
    lon: '-118.2437',
  },
  {
    _id: '3',
    name: 'Royal Cinema',
    plot: '789',
    street: 'Oak Street',
    city: 'Chicago',
    country: 'USA',
    pincode: 60007,
    lat: '41.8781',
    lon: '-87.6298',
  },
];

const mockTheatreHalls = [
  {
    _id: 'hall1',
    number: 1,
    theatreId: '1',
    seatingCapacity: 120,
  },
  {
    _id: 'hall2',
    number: 2,
    theatreId: '1',
    seatingCapacity: 100,
  },
  {
    _id: 'hall3',
    number: 3,
    theatreId: '1',
    seatingCapacity: 80,
  },
  {
    _id: 'hall4',
    number: 1,
    theatreId: '2',
    seatingCapacity: 150,
  },
  {
    _id: 'hall5',
    number: 2,
    theatreId: '2',
    seatingCapacity: 120,
  },
  {
    _id: 'hall6',
    number: 1,
    theatreId: '3',
    seatingCapacity: 100,
  },
];

const mockMovies = [
  {
    _id: '1',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    genre: ['Action', 'Crime', 'Drama'],
    duration: '152 min',
    language: 'English',
    releaseDate: '2008-07-18',
    coverImageURL: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 9.0,
  },
  {
    _id: '2',
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    duration: '148 min',
    language: 'English',
    releaseDate: '2010-07-16',
    coverImageURL: 'https://images.unsplash.com/photo-1526041092449-209d556f7a32?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 8.8,
  },
  {
    _id: '3',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    duration: '169 min',
    language: 'English',
    releaseDate: '2014-11-07',
    coverImageURL: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 8.6,
  }
];

// Create mock shows with actual timestamps
const today = new Date();
const createTimestamp = (hours, minutes, days = 0) => {
  const date = new Date(today);
  date.setDate(date.getDate() + days);
  date.setHours(hours, minutes, 0, 0);
  return date.getTime();
};

const mockShows = [
  // Shows for Theatre 1
  {
    _id: 'show1',
    movieId: '1',
    theatreHallId: 'hall1',
    startTimeStamp: createTimestamp(10, 0),
    endTimeStamp: createTimestamp(12, 32),
    price: 12,
  },
  {
    _id: 'show2',
    movieId: '1',
    theatreHallId: 'hall1',
    startTimeStamp: createTimestamp(15, 0),
    endTimeStamp: createTimestamp(17, 32),
    price: 14,
  },
  {
    _id: 'show3',
    movieId: '1',
    theatreHallId: 'hall1',
    startTimeStamp: createTimestamp(20, 0),
    endTimeStamp: createTimestamp(22, 32),
    price: 16,
  },
  {
    _id: 'show4',
    movieId: '2',
    theatreHallId: 'hall2',
    startTimeStamp: createTimestamp(11, 0),
    endTimeStamp: createTimestamp(13, 28),
    price: 12,
  },
  {
    _id: 'show5',
    movieId: '2',
    theatreHallId: 'hall2',
    startTimeStamp: createTimestamp(16, 0),
    endTimeStamp: createTimestamp(18, 28),
    price: 14,
  },
  {
    _id: 'show6',
    movieId: '3',
    theatreHallId: 'hall3',
    startTimeStamp: createTimestamp(13, 0),
    endTimeStamp: createTimestamp(15, 49),
    price: 12,
  },
  {
    _id: 'show7',
    movieId: '3',
    theatreHallId: 'hall3',
    startTimeStamp: createTimestamp(18, 0),
    endTimeStamp: createTimestamp(20, 49),
    price: 14,
  },
  
  // Shows for tomorrow
  {
    _id: 'show8',
    movieId: '1',
    theatreHallId: 'hall1',
    startTimeStamp: createTimestamp(10, 0, 1),
    endTimeStamp: createTimestamp(12, 32, 1),
    price: 12,
  },
  {
    _id: 'show9',
    movieId: '2',
    theatreHallId: 'hall2',
    startTimeStamp: createTimestamp(11, 0, 1),
    endTimeStamp: createTimestamp(13, 28, 1),
    price: 12,
  },
  {
    _id: 'show10',
    movieId: '3',
    theatreHallId: 'hall3',
    startTimeStamp: createTimestamp(13, 0, 1),
    endTimeStamp: createTimestamp(15, 49, 1),
    price: 12,
  },
];

export default TheatreDetailPage;
 