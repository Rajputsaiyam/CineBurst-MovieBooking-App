// import  HeroSection from '../components/HeroSection';
// import FeaturedMovies from '../components/FeaturedMovies';
// import FeaturedTheatres from '../components/FeaturedTheatres';

// const HomePage = () => {
//   return (
//     <div>
//       <HeroSection />
//       <FeaturedMovies />
//       <FeaturedTheatres />
      
//       <div className="bg-white dark:bg-dark-800 py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold">1</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Browse Movies</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Explore our collection of latest movies and find what you're looking for.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold">2</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Select Seats</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Choose your preferred theatre, date, time, and select the best seats.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="h-16 w-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold">3</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2">Enjoy the Show</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 Make your payment and receive your tickets instantly. Head to the theatre and enjoy!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-primary-600 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-3">Download Our Mobile App</h2>
//           <p className="text-primary-100 mb-8 max-w-xl mx-auto">
//             Get exclusive offers and book tickets on the go with our mobile application.
//             Available for iOS and Android.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="btn bg-white text-primary-600 hover:bg-primary-50">
//               Download for iOS
//             </button>
//             <button className="btn bg-white text-primary-600 hover:bg-primary-50">
//               Download for Android
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
 

import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTheatres from '../components/FeaturedTheatres';

const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <HeroSection />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 -mt-20">
        <FeaturedMovies />
        <FeaturedTheatres />
      </div>

      {/* How It Works Section */}
      <section className="py-24 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-gray-500 uppercase tracking-widest text-sm font-medium mb-4 inline-block">Process</span>
            <h2 className="text-5xl font-bold font-serif tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Effortless Booking
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                number: '1',
                title: 'Browse Movies',
                description: 'Discover our curated collection of cinematic experiences, from blockbusters to indie gems.'
              },
              {
                number: '2',
                title: 'Select Seats',
                description: 'Interactive seat map lets you choose the perfect viewing position in your preferred theater.'
              },
              {
                number: '3',
                title: 'Enjoy the Show',
                description: 'Digital tickets with QR codes for contactless entry. Just arrive and immerse yourself.'
              }
            ].map((step, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative bg-gray-900 p-8 rounded-xl h-full border border-gray-800 group-hover:border-gray-600 transition-all duration-300">
                  <div className="w-16 h-16 mb-6 rounded-full border-2 border-white flex items-center justify-center text-2xl font-bold transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 font-sans">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-800 rounded-full mb-8">
            <span className="text-sm font-medium text-gray-300">MOBILE EXPERIENCE</span>
          </div>
          <h2 className="text-5xl font-bold font-serif tracking-tight mb-6">
            Cinema In Your Pocket
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Our award-winning app puts premium booking at your fingertips with exclusive mobile-only benefits.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-1.56 2.96-1.93 4.17-1.93 1.69 0 3.37.45 4.5 1.64-1.43.91-2.25 2.21-2.25 4.37 0 3.03 1.89 4.13 3.7 5.27-.42.62-1.63 1.9-2.2 2.62zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.2 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </button>
            <button className="px-8 py-4 bg-transparent text-white hover:bg-gray-800 rounded-full font-medium transition-all duration-300 border-2 border-gray-600 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
              </svg>
              Play Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Experience The Difference</p>
          <h3 className="text-3xl font-serif tracking-tight mb-6">Ready for your next movie night?</h3>
          <button className="px-10 py-3.5 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-300 border-2 border-white hover:shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;