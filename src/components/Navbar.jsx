// import  { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Moon, Sun, Film, Globe, User } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const location = useLocation();
  
//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle('dark');
//   };
  
//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Movies', path: '/movies' },
//     { name: 'Theatres', path: '/theatres' },
//   ];
  
//   const isActive = (path) => {
//     return location.pathname === path;
//   };
  
//   return (
//     <nav className="bg-white shadow-sm dark:bg-dark-800 dark:shadow-gray-900/30">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 flex items-center">
//               <Film className="h-8 w-8 text-primary-600" />
//               <span className="ml-2 text-xl font-bold text-primary-600">CineBurst</span>
//             </Link>
//             <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                     isActive(item.path)
//                       ? 'border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500'
//                       : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
          
//           <div className="hidden sm:flex sm:items-center sm:space-x-2">
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700"
//               aria-label="Toggle dark mode"
//             >
//               {isDarkMode ? (
//                 <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//               ) : (
//                 <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//               )}
//             </button>
            
//             <div className="ml-3 relative">
//               <Link
//                 to="/login"
//                 className="btn btn-outline flex items-center"
//               >
//                 <User className="h-4 w-4 mr-2" />
//                 Sign In
//               </Link>
//             </div>
//           </div>
          
//           <div className="flex items-center sm:hidden">
//             <button
//               onClick={toggleDarkMode}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 mr-2"
//               aria-label="Toggle dark mode"
//             >
//               {isDarkMode ? (
//                 <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//               ) : (
//                 <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//               )}
//             </button>
            
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700"
//             >
//               {isMenuOpen ? (
//                 <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//               ) : (
//                 <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="sm:hidden">
//           <div className="pt-2 pb-3 space-y-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
//                   isActive(item.path)
//                     ? 'border-primary-600 text-primary-600 bg-primary-50 dark:bg-primary-900/10 dark:border-primary-500 dark:text-primary-500'
//                     : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 dark:text-gray-300 dark:hover:bg-dark-700'
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link
//               to="/login"
//               className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 dark:text-gray-300 dark:hover:bg-dark-700"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
 

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Film, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const location = useLocation();
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'FILMS', path: '/movies' },
    { name: 'THEATRES', path: '/theatres' },
    { name: 'PREMIUM', path: '/premium' },
  ];
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto px-6">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={() => setIsMenuOpen(false)}
          >
            <Film className="h-7 w-7 text-white group-hover:text-gray-400 transition-colors" />
            <span className="ml-3 text-2xl font-serif font-bold text-white group-hover:text-gray-400 transition-colors tracking-tight">
              CINÉVERSE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-1 text-sm font-medium uppercase tracking-widest ${
                    isActive(item.path) 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white transition-colors'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-underline"></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-6 ml-8">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-900 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-gray-300 hover:text-white" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-300 hover:text-white" />
                )}
              </button>
              
              <Link
                to="/signin"
                className="flex items-center space-x-2 group"
              >
                <div className="h-9 w-9 rounded-full border-2 border-gray-600 flex items-center justify-center group-hover:border-white transition-colors">
                  <User className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors hidden xl:block">
                  SIGN IN
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-300" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-3 text-sm font-medium uppercase tracking-widest ${
                    isActive(item.path)
                      ? 'text-white border-l-4 border-white pl-4'
                      : 'text-gray-400 hover:text-white pl-4 transition-colors'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="py-3 text-sm font-medium uppercase tracking-widest text-gray-400 hover:text-white pl-4 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;