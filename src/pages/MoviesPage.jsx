// import  { useState, useEffect } from 'react';
// import MovieCard from '../components/MovieCard';
// import { Filter, ChevronLeft, ChevronRight } from 'lucide-react';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const [selectedLanguage, setSelectedLanguage] = useState('');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller'];
//   const languages = ['English', 'Hindi', 'Spanish', 'French', 'Korean'];

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         setLoading(true);
//         // Instead of calling API directly, use mock data for now
//         setMovies(mockMovies);
//         setTotalPages(2);
//         setLoading(false);
//       } catch (err) {
//         setMovies(mockMovies);
//         setTotalPages(2);
//         setError('Failed to fetch movies');
//         console.error('Error fetching movies:', err instanceof Error ? err.message : String(err));
//         setLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [currentPage]);

//   const filteredMovies = movies.filter(movie => {
//     if (selectedGenre && (!movie.genre || !movie.genre.includes(selectedGenre))) {
//       return false;
//     }
//     if (selectedLanguage && movie.language !== selectedLanguage) {
//       return false;
//     }
//     return true;
//   });

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
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

//   if (error && movies.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex justify-center items-center h-60">
//           <p className="text-red-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-8">Movies</h1>
      
//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
//         <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
//           <button 
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="btn btn-outline flex items-center"
//           >
//             <Filter className="h-4 w-4 mr-2" />
//             Filter Movies
//           </button>
          
//           {isFilterOpen && (
//             <div className="mt-4 md:mt-0 space-y-4">
//               <div>
//                 <h3 className="font-medium mb-2">Genre</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     onClick={() => setSelectedGenre('')}
//                     className={`px-3 py-1 text-sm rounded-full ${
//                       selectedGenre === '' 
//                         ? 'bg-primary-600 text-white' 
//                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
//                     }`}
//                   >
//                     All
//                   </button>
//                   {genres.map(genre => (
//                     <button
//                       key={genre}
//                       onClick={() => setSelectedGenre(genre)}
//                       className={`px-3 py-1 text-sm rounded-full ${
//                         selectedGenre === genre 
//                           ? 'bg-primary-600 text-white' 
//                           : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
//                       }`}
//                     >
//                       {genre}
//                     </button>
//                   ))}
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="font-medium mb-2">Language</h3>
//                 <div className="flex flex-wrap gap-2">
//                   <button
//                     onClick={() => setSelectedLanguage('')}
//                     className={`px-3 py-1 text-sm rounded-full ${
//                       selectedLanguage === '' 
//                         ? 'bg-primary-600 text-white' 
//                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
//                     }`}
//                   >
//                     All
//                   </button>
//                   {languages.map(language => (
//                     <button
//                       key={language}
//                       onClick={() => setSelectedLanguage(language)}
//                       className={`px-3 py-1 text-sm rounded-full ${
//                         selectedLanguage === language 
//                           ? 'bg-primary-600 text-white' 
//                           : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
//                       }`}
//                     >
//                       {language}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <button 
//             onClick={handlePreviousPage}
//             disabled={currentPage === 1}
//             className={`p-2 rounded-full ${
//               currentPage === 1 
//                 ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-dark-800 dark:text-gray-600' 
//                 : 'bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700'
//             }`}
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <span className="text-sm">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button 
//             onClick={handleNextPage}
//             disabled={currentPage === totalPages}
//             className={`p-2 rounded-full ${
//               currentPage === totalPages 
//                 ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-dark-800 dark:text-gray-600' 
//                 : 'bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700'
//             }`}
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
      
//       {filteredMovies.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredMovies.map((movie) => (
//             <MovieCard key={movie._id} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="flex justify-center items-center h-60">
//           <p className="text-gray-500 dark:text-gray-400">
//             No movies found matching your criteria
//           </p>
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
//   },
//   {
//     _id: '5',
//     title: 'The Godfather',
//     description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
//     genre: ['Crime', 'Drama'],
//     duration: '175 min',
//     language: 'English',
//     releaseDate: '1972-03-24',
//     coverImageURL: 'https://images.unsplash.com/photo-1526041092449-209d556f7a32?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 9.2,
//   },
//   {
//     _id: '6',
//     title: 'Pulp Fiction',
//     description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
//     genre: ['Crime', 'Drama'],
//     duration: '154 min',
//     language: 'English',
//     releaseDate: '1994-10-14',
//     coverImageURL: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 8.9,
//   },
//   {
//     _id: '7',
//     title: 'The Matrix',
//     description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
//     genre: ['Action', 'Sci-Fi'],
//     duration: '136 min',
//     language: 'English',
//     releaseDate: '1999-03-31',
//     coverImageURL: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 8.7,
//   },
//   {
//     _id: '8',
//     title: 'Fight Club',
//     description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
//     genre: ['Drama'],
//     duration: '139 min',
//     language: 'English',
//     releaseDate: '1999-10-15',
//     coverImageURL: 'https://images.unsplash.com/photo-1526041092449-209d556f7a32?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
//     rating: 8.8,
//   }
// ];

// export default MoviesPage;
 


import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { Filter, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const genres = ['ACTION', 'ADVENTURE', 'COMEDY', 'DRAMA', 'HORROR', 'SCI-FI', 'THRILLER'];
  const languages = ['ENGLISH', 'HINDI', 'SPANISH', 'FRENCH', 'KOREAN'];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        // Simulate API call with mock data
        setTimeout(() => {
          setMovies(mockMovies);
          setTotalPages(2);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError('Failed to fetch movies');
        console.error('Error:', err);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const filteredMovies = movies.filter(movie => {
    if (selectedGenre && (!movie.genre || !movie.genre.map(g => g.toUpperCase()).includes(selectedGenre))) {
      return false;
    }
    if (selectedLanguage && movie.language.toUpperCase() !== selectedLanguage) {
      return false;
    }
    return true;
  });

  const handlePreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="h-12 w-12 animate-spin text-white" />
      </div>
    );
  }

  if (error && movies.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center p-8 border border-gray-800 rounded-xl">
          <p className="text-red-400 font-medium mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-gray-800 pb-8">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                CINEMATIC COLLECTION
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Explore our curated selection of films from around the world
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:bg-gray-900/50 transition-colors group"
            >
              <Filter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              <span className="text-sm uppercase tracking-wider">FILTER</span>
            </button>

            {isFilterOpen && (
              <div className="mt-6 space-y-6 p-4 border border-gray-800 rounded-xl bg-gray-900/30">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">GENRE</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedGenre('')}
                      className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors ${
                        selectedGenre === '' 
                          ? 'bg-white text-black border-white' 
                          : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      ALL GENRES
                    </button>
                    {genres.map(genre => (
                      <button
                        key={genre}
                        onClick={() => setSelectedGenre(genre)}
                        className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors ${
                          selectedGenre === genre 
                            ? 'bg-white text-black border-white' 
                            : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3">LANGUAGE</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedLanguage('')}
                      className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors ${
                        selectedLanguage === '' 
                          ? 'bg-white text-black border-white' 
                          : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      ALL LANGUAGES
                    </button>
                    {languages.map(language => (
                      <button
                        key={language}
                        onClick={() => setSelectedLanguage(language)}
                        className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors ${
                          selectedLanguage === language 
                            ? 'bg-white text-black border-white' 
                            : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-gray-400">
            SHOWING {filteredMovies.length} OF {movies.length} FILMS
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border transition-colors ${
                currentPage === 1 
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed' 
                  : 'border-gray-600 text-gray-300 hover:bg-gray-900/50'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm text-gray-300">
              PAGE {currentPage} OF {totalPages}
            </span>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border transition-colors ${
                currentPage === totalPages 
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed' 
                  : 'border-gray-600 text-gray-300 hover:bg-gray-900/50'
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 border border-gray-800 rounded-xl">
            <Filter className="h-12 w-12 text-gray-600 mb-4" />
            <h3 className="text-xl font-medium mb-2">No Films Found</h3>
            <p className="text-gray-500 max-w-md text-center mb-6">
              Try adjusting your filters to discover more films
            </p>
            <button 
              onClick={() => {
                setSelectedGenre('');
                setSelectedLanguage('');
              }}
              className="px-6 py-2 border border-gray-700 rounded-full hover:bg-gray-900/50 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Mock data remains the same as in your original code
const mockMovies = [{
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
  },
  {
    _id: '4',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    genre: ['Drama'],
    duration: '142 min',
    language: 'English',
    releaseDate: '1994-10-14',
    coverImageURL: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 9.3,
  },
  {
    _id: '5',
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    genre: ['Crime', 'Drama'],
    duration: '175 min',
    language: 'English',
    releaseDate: '1972-03-24',
    coverImageURL: 'https://images.unsplash.com/photo-1526041092449-209d556f7a32?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 9.2,
  },
  {
    _id: '6',
    title: 'Pulp Fiction',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    genre: ['Crime', 'Drama'],
    duration: '154 min',
    language: 'English',
    releaseDate: '1994-10-14',
    coverImageURL: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 8.9,
  },
  {
    _id: '7',
    title: 'The Matrix',
    description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    genre: ['Action', 'Sci-Fi'],
    duration: '136 min',
    language: 'English',
    releaseDate: '1999-03-31',
    coverImageURL: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 8.7,
  },
  {
    _id: '8',
    title: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    genre: ['Drama'],
    duration: '139 min',
    language: 'English',
    releaseDate: '1999-10-15',
    coverImageURL: 'https://images.unsplash.com/photo-1526041092449-209d556f7a32?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800',
    rating: 8.8,
  }]; 

export default MoviesPage;