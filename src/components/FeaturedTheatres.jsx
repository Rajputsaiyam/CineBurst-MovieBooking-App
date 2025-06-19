// import  { useState, useEffect } from 'react';
// import TheatreCard from './TheatreCard';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FeaturedTheatres = () => {
//   const [theatres, setTheatres] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchTheatres = async () => {
//       try {
//         setLoading(true);
//         // Instead of calling API directly, use mock data for now
//         setTheatres(mockTheatres);
//         setLoading(false);
//       } catch (err) {
//         setTheatres(mockTheatres);
//         setError('Failed to fetch theatres');
//         console.error('Error fetching theatres:', err instanceof Error ? err.message : String(err));
//         setLoading(false);
//       }
//     };

//     fetchTheatres();
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

//   if (error && theatres.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex justify-center items-center h-60">
//           <p className="text-red-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-dark-900">
//       <div className="flex justify-between items-center mb-10">
//         <h2 className="text-3xl font-bold">Popular Theatres</h2>
//         <div className="flex space-x-2">
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {theatres.map((theatre) => (
//           <TheatreCard key={theatre._id} theatre={theatre} />
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <a href="/theatres" className="btn btn-outline">
//           View All Theatres
//         </a>
//       </div>
//     </div>
//   );
// };

// // Mock data for preview
// const mockTheatres = [
//   {
//     _id: '1',
//     name: 'Grand Cineplex',
//     plot: '123',
//     street: 'Main Street',
//     city: 'New York',
//     country: 'USA',
//     pincode: 10001,
//     lat: '40.7128',
//     lon: '-74.0060',
//   },
//   {
//     _id: '2',
//     name: 'Stellar Multiplex',
//     plot: '456',
//     street: 'Broadway Avenue',
//     city: 'Los Angeles',
//     country: 'USA',
//     pincode: 90001,
//     lat: '34.0522',
//     lon: '-118.2437',
//   },
//   {
//     _id: '3',
//     name: 'Royal Cinema',
//     plot: '789',
//     street: 'Oak Street',
//     city: 'Chicago',
//     country: 'USA',
//     pincode: 60007,
//     lat: '41.8781',
//     lon: '-87.6298',
//   },
// ];

// export default FeaturedTheatres;
 

// import { useState, useEffect } from 'react';
// import TheatreCard from './TheatreCard';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { fetchTheatres } from '../service/fetchTheatres'; // ✅ Import your service

// const FeaturedTheatres = () => {
//   const [theatres, setTheatres] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const getTheatres = async () => {
//       try {
//         setLoading(true);
//         debugger;
//         const data = await fetchTheatres(); // ✅ Call the service
//         setTheatres(data);
//       } catch (err) {
//         setError('Failed to fetch theatres');
//         console.error('Error fetching theatres:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getTheatres();
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

//   if (error && theatres.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-16">
//         <div className="flex justify-center items-center h-60">
//           <p className="text-red-600">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-dark-900">
//       <div className="flex justify-between items-center mb-10">
//         <h2 className="text-3xl font-bold">Popular Theatres</h2>
//         <div className="flex space-x-2">
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-dark-800 dark:hover:bg-dark-700">
//             <ChevronRight className="h-6 w-6" />
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {theatres.map((theatre) => (
//           <TheatreCard key={theatre._id} theatre={theatre} />
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <a href="/theatres" className="btn btn-outline">
//           View All Theatres
//         </a>
//       </div>
//     </div>
//   );
// };

// export default FeaturedTheatres;


import { useState, useEffect } from 'react';
import TheatreCard from './TheatreCard';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Ticket } from 'lucide-react';
import { fetchTheatres } from '../service/fetchTheatres';

const FeaturedTheatres = () => {
  const [theatres, setTheatres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getTheatres = async () => {
      try {
        setLoading(true);
        const data = await fetchTheatres();
        setTheatres(data.slice(0, 6)); // Show only 6 featured theatres
      } catch (err) {
        setError('Failed to fetch theatres');
        console.error('Error fetching theatres:', err);
      } finally {
        setLoading(false);
      }
    };

    getTheatres();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(theatres.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(theatres.length / 3)) % Math.ceil(theatres.length / 3));
  };

  if (loading) {
    return (
      <div className="bg-black py-24">
        <div className="container mx-auto px-6 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (error && theatres.length === 0) {
    return (
      <div className="bg-black py-24">
        <div className="container mx-auto px-6 text-center">
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
    <section className="bg-black py-24 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-serif font-bold tracking-tight mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                PREMIUM THEATRES
              </span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Experience cinema in our handpicked venues with Dolby Atmos and luxury seating
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-3">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-700 hover:bg-gray-900/50 transition-colors"
              aria-label="Previous theatres"
            >
              <ChevronLeft className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-700 hover:bg-gray-900/50 transition-colors"
              aria-label="Next theatres"
            >
              <ChevronRight className="h-5 w-5 text-gray-300 hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Theatre Cards */}
        <div className="relative overflow-hidden">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {theatres.map((theatre) => (
              <TheatreCard key={theatre._id} theatre={theatre} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/theatres"
            className="inline-flex items-center px-8 py-3.5 border border-gray-600 text-white rounded-full hover:bg-gray-900/50 transition-colors group"
          >
            <Ticket className="h-5 w-5 mr-2 text-gray-300 group-hover:text-white transition-colors" />
            <span className="text-sm uppercase tracking-wider">EXPLORE ALL VENUES</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTheatres;