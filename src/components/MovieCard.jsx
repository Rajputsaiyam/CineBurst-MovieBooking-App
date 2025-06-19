// import  { Link } from 'react-router-dom';
// import { Clock, Calendar, Star } from 'lucide-react';

// const MovieCard = ({ movie }) => {
//   // Format release date
//   const formatReleaseDate = (dateString) => {
//     if (!dateString) return 'Coming Soon';
//     return new Date(dateString).toLocaleDateString();
//   };
  
//   // Add genre array if not present
//   const genres = movie.genre || ['Drama']; // Default genre if none provided
  
//   return (
//     <div className="card group hover:shadow-xl transition-shadow">
//       <Link to={`/movies/${movie._id}`} className="block relative overflow-hidden aspect-[2/3]">
//         <img 
//           src={movie.coverImageURL || movie.poster || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=crop&w=500&h=750'} 
//           alt={movie.title}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute top-2 left-2">
//           <div className="flex items-center bg-white/90 dark:bg-dark-900/90 px-2 py-1 rounded-md">
//             <Star className="h-4 w-4 text-yellow-500 mr-1" />
//             <span className="text-sm font-medium">{movie.rating || '8.5'}</span>
//           </div>
//         </div>
//       </Link>
      
//       <div className="p-4">
//         <Link to={`/movies/${movie._id}`} className="block">
//           <h3 className="text-lg font-semibold mb-2 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
//             {movie.title}
//           </h3>
//         </Link>
        
//         <div className="flex flex-wrap items-center text-xs text-gray-600 dark:text-gray-400 mb-2 gap-x-4 gap-y-1">
//           <div className="flex items-center">
//             <Clock className="h-3 w-3 mr-1" />
//             <span>{movie.duration || '120 min'}</span>
//           </div>
//           <div className="flex items-center">
//             <Calendar className="h-3 w-3 mr-1" />
//             <span>{formatReleaseDate(movie.releaseDate)}</span>
//           </div>
//         </div>
        
//         <div className="flex flex-wrap gap-1 mb-3">
//           {genres.map(genre => (
//             <span 
//               key={genre} 
//               className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-700 rounded-full"
//             >
//               {genre}
//             </span>
//           ))}
//         </div>
        
//         <Link 
//           to={`/movies/${movie._id}`} 
//           className="btn btn-primary w-full text-center"
//         >
//           Book Now
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
 



import { Link } from 'react-router-dom';
import { Clock, Calendar, Star, Ticket } from 'lucide-react';

const MovieCard = ({ movie }) => {
  // Format release date with cinematic style
  const formatReleaseDate = (dateString) => {
    if (!dateString) return 'COMING SOON';
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options).toUpperCase();
  };

  // Default values with cinematic fallbacks
  const genres = movie.genre || ['CINEMA'];
  const duration = movie.duration ? `${movie.duration} MIN` : '120 MIN';
  const rating = movie.rating || '8.5';

  return (
    <div className="group relative bg-black border border-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      {/* Movie Poster with Hover Effect */}
      <Link 
        to={`/movies/${movie._id}`} 
        className="block relative overflow-hidden aspect-[2/3]"
      >
        <img 
          src={movie.coverImageURL || movie.poster || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxtb3ZpZSUyMXRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=crop&w=500&h=750'} 
          alt={movie.title}
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
          loading="lazy"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-600">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400/20 mr-1" />
            <span className="text-sm font-medium text-white">{rating}</span>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Ticket className="h-8 w-8 text-white mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300" />
        </div>
      </Link>
      
      {/* Movie Details */}
      <div className="p-5">
        {/* Title */}
        <Link to={`/movies/${movie._id}`} className="block mb-3">
          <h3 className="text-xl font-serif font-bold text-white tracking-tight line-clamp-2 hover:text-gray-300 transition-colors">
            {movie.title}
          </h3>
        </Link>
        
        {/* Metadata */}
        <div className="flex items-center text-xs text-gray-400 mb-4 gap-4">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
            <span className="tracking-wide">{duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1.5 text-gray-500" />
            <span className="tracking-wide">{formatReleaseDate(movie.releaseDate)}</span>
          </div>
        </div>
        
        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-5">
          {genres.slice(0, 3).map(genre => (
            <span 
              key={genre} 
              className="text-xs px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800"
            >
              {genre.toUpperCase()}
            </span>
          ))}
        </div>
        
        {/* CTA Button */}
        <Link 
          to={`/movies/${movie._id}`} 
          className="w-full py-3 px-6 bg-white text-black hover:bg-gray-100 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 group"
        >
          <Ticket className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
          <span>RESERVE SEATS</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;