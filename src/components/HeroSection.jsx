// import  { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <div className="relative">
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
//           alt="Cinema" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/70"></div>
//       </div>
//       <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
//         <div className="max-w-xl">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
//             Experience Movies Like Never Before
//           </h1>
//           <p className="text-xl text-gray-300 mb-8">
//             Book your tickets for the latest blockbusters and secure the best seats in the house.
//           </p>
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//             <Link to="/movies" className="btn btn-primary px-8 py-3 text-lg">
//               Browse Movies
//             </Link>
//             <Link to="/signup" className="btn btn-outline border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
//               Create Account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
 

import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHRoZWF0ZXIlMjBjaW5lbWF8ZW58MHx8fHwxNzQ3MDM2MzU2fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200" 
          alt="Cinema" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <p className="text-gray-400 uppercase tracking-widest text-sm font-medium mb-4 animate-fadeIn">
              Premium Cinematic Experience
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif tracking-tight animate-fadeIn delay-100">
              Immerse Yourself in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Cinema</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed animate-fadeIn delay-200">
              Reserve seats for the latest masterpieces in our state-of-the-art theaters with Dolby Atmos and IMAX.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-300">
              <Link 
                to="/movies" 
                className="px-10 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Browse Films
              </Link>
              <Link 
                to="/signup" 
                className="px-10 py-4 bg-transparent text-white hover:bg-gray-900/50 rounded-full font-medium transition-all duration-300 border-2 border-white hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                Join Membership
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;