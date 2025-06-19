// import { useState, useEffect } from 'react';
// import TheatreCard from '../components/TheatreCard';
// import { Filter, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
// import { fetchTheatres } from '../service/fetchTheatres'; // ✅ Keep this import

// const TheatresPage = () => {
//   const [theatres, setTheatres] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedCity, setSelectedCity] = useState('');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

//   useEffect(() => {
//     const loadTheatres = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchTheatres();
//         setTheatres(data);
//         setTotalPages(1); // Set real pagination if backend supports it
//       } catch (err) {
//         setError('Failed to fetch theatres');
//         console.error('Error fetching theatres:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadTheatres();
//   }, [currentPage]);

//   const filteredTheatres = selectedCity
//     ? theatres.filter(theatre => theatre.city === selectedCity)
//     : theatres;

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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

//   if (error && theatres.length === 0) {
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
//       <h1 className="text-3xl font-bold mb-8">Theatres</h1>

//       <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
//         <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
//           <button 
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="btn btn-outline flex items-center"
//           >
//             <Filter className="h-4 w-4 mr-2" />
//             Filter by City
//           </button>

//           {isFilterOpen && (
//             <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
//               <button
//                 onClick={() => setSelectedCity('')}
//                 className={`px-3 py-1 text-sm rounded-full ${
//                   selectedCity === '' 
//                     ? 'bg-primary-600 text-white' 
//                     : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
//                 }`}
//               >
//                 All Cities
//               </button>
//               {cities.map(city => (
//                 <button
//                   key={city}
//                   onClick={() => setSelectedCity(city)}
//                   className={`px-3 py-1 text-sm rounded-full ${
//                     selectedCity === city 
//                       ? 'bg-primary-600 text-white' 
//                       : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
//                   }`}
//                 >
//                   {city}
//                 </button>
//               ))}
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
//           <span className="text-sm">Page {currentPage} of {totalPages}</span>
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

//       {filteredTheatres.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredTheatres.map((theatre) => (
//             <TheatreCard key={theatre._id} theatre={theatre} />
//           ))}
//         </div>
//       ) : (
//         <div className="flex justify-center items-center h-60">
//           <p className="text-gray-500 dark:text-gray-400">
//             No theatres found matching your criteria
//           </p>
//         </div>
//       )}

//       <div className="mt-12">
//         <div className="card p-6">
//           <h2 className="text-xl font-bold mb-4 flex items-center">
//             <MapPin className="h-5 w-5 mr-2 text-primary-600" />
//             Find Theatres Near You
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mb-4">
//             Share your location to find theatres closest to you and get personalized recommendations.
//           </p>
//           <button className="btn btn-primary">
//             Share Location
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TheatresPage;


import { useState, useEffect } from 'react';
import TheatreCard from '../components/TheatreCard';
import { Filter, ChevronLeft, ChevronRight, MapPin, Loader2 } from 'lucide-react';
import { fetchTheatres } from '../service/fetchTheatres';

const TheatresPage = () => {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCity, setSelectedCity] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const cities = ['NEW YORK', 'LOS ANGELES', 'CHICAGO', 'HOUSTON', 'MIAMI'];

  useEffect(() => {
    const loadTheatres = async () => {
      try {
        setLoading(true);
        const data = await fetchTheatres();
        setTheatres(data);
        setTotalPages(Math.ceil(data.length / 6)); // Assuming 6 items per page
      } catch (err) {
        setError('Failed to fetch theatres. Please try again later.');
        console.error('Error fetching theatres:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTheatres();
  }, [currentPage]);

  const filteredTheatres = selectedCity
    ? theatres.filter(theatre => theatre.city?.toUpperCase() === selectedCity)
    : theatres;

  const paginatedTheatres = filteredTheatres.slice((currentPage - 1) * 6, currentPage * 6);

  const handlePreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="h-12 w-12 animate-spin text-white" />
      </div>
    );
  }

  if (error && theatres.length === 0) {
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
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-800 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">THEATRES</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Discover our premium cinemas featuring Dolby Atmos, IMAX Laser, and luxury seating
            </p>
          </div>

          {/* Filter Controls */}
          <div className="mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:bg-gray-900/50 transition-colors group"
              >
                <Filter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                <span className="text-sm uppercase tracking-wider">Filter</span>
              </button>

              {isFilterOpen && (
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCity('')}
                    className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors ${
                      selectedCity === '' 
                        ? 'bg-white text-black border-white' 
                        : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    All Locations
                  </button>
                  {cities.map(city => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors ${
                        selectedCity === city 
                          ? 'bg-white text-black border-white' 
                          : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Theatre Grid */}
        {paginatedTheatres.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {paginatedTheatres.map((theatre) => (
              <TheatreCard key={theatre._id} theatre={theatre} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 border border-gray-800 rounded-xl">
            <MapPin className="h-12 w-12 text-gray-600 mb-4" />
            <h3 className="text-xl font-medium mb-2">No Theatres Found</h3>
            <p className="text-gray-500 max-w-md text-center">
              {selectedCity 
                ? `We don't currently have theaters in ${selectedCity}. Try another location.`
                : 'Unable to load theaters at this time.'}
            </p>
            <button 
              onClick={() => setSelectedCity('')}
              className="mt-6 px-6 py-2 border border-gray-700 rounded-full hover:bg-gray-900/50 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {paginatedTheatres.length > 0 && (
          <div className="flex items-center justify-between border-t border-gray-800 pt-8">
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors ${
                currentPage === 1 
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed' 
                  : 'border-gray-600 text-gray-300 hover:bg-gray-900/50'
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider">Previous</span>
            </button>
            
            <div className="text-sm text-gray-400">
              PAGE <span className="text-white mx-1">{currentPage}</span> OF {totalPages}
            </div>
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors ${
                currentPage === totalPages 
                  ? 'border-gray-800 text-gray-600 cursor-not-allowed' 
                  : 'border-gray-600 text-gray-300 hover:bg-gray-900/50'
              }`}
            >
              <span className="text-sm uppercase tracking-wider">Next</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        {/* Location CTA */}
        <div className="mt-24 p-8 border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-serif font-bold mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-white" />
              <span>NEARBY THEATRE EXPERIENCE</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Enable location services to discover premium cinemas near you and get personalized showtime recommendations based on your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 bg-white text-black rounded-full hover:bg-gray-100 transition-colors font-medium">
                Share Location
              </button>
              <button className="px-8 py-3.5 border border-gray-600 text-white rounded-full hover:bg-gray-900/50 transition-colors">
                Browse All Locations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheatresPage;