// import  { useState, useEffect } from 'react';
// import MovieCard from './MovieCard';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FeaturedMovies = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setLoading(true);
//         // Instead of calling API directly, use mock data for now
//         // You can replace this with your API call when backend is ready
//         setMovies(mockMovies);
//         setLoading(false);
//       } catch (err) {
//         setMovies(mockMovies);
//         setError('Failed to fetch movies');
//         console.error('Error fetching movies:', err instanceof Error ? err.message : String(err));
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex justify-center items-center h-60">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
//         </div>
//       </div>
//     );
//   }

//   if (error && movies.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex justify-center items-center h-60">
//           <p className="text-red-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <div className="flex justify-between items-center mb-10">
//         <h2 className="text-3xl font-bold">Featured Movies</h2>
//         <div className="flex space-x-2">
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {movies.map((movie) => (
//           <MovieCard key={movie._id} movie={movie} />
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <a href="/movies" className="btn btn-outline">
//           View All Movies
//         </a>
//       </div>
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
//   },
//   {
//     _id: '4',
//     title: 'The Shawshank Redemption',
//     description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
//     genre: ['Drama'],
//     duration: '142 min',
//     language: 'English',
//     releaseDate: '1994-10-14',
//     coverImageURL: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 9.3,
//   }
// ];

// export default FeaturedMovies;
 


import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAllMovies } from '../service/fetchMovie';

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]); // ensure movies is always an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

useEffect(() => {
  const fetchMovies = async () => {
    try {
      setLoading(true);
      debugger;
      const moviesData = await getAllMovies();

      if (Array.isArray(moviesData)) {
        setMovies(moviesData);
      } else {
        setError("Invalid data format from API.");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  fetchMovies();
}, []);


  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-60">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (error && movies.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center h-60">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Featured Movies</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(movies) && movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="/movies" className="btn btn-outline">
          View All Movies
        </a>
      </div>
    </div>
  );
};

export default FeaturedMovies;
