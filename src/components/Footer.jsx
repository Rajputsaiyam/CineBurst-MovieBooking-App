// import  { Link } from 'react-router-dom';
// import { Facebook, Instagram, Twitter, Globe, Mail, Phone } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 dark:bg-dark-800">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-1">
//             <Link to="/" className="flex items-center">
//               <Globe className="h-8 w-8 text-primary-600" />
//               <span className="ml-2 text-xl font-bold text-primary-600">CineBurst</span>
//             </Link>
//             <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
//               Your one-stop platform for booking movie tickets at theatres near you.
//             </p>
//             <div className="mt-6 flex space-x-4">
//               <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
//                 <Instagram className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
          
//           <div className="col-span-1">
//             <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
//               Quick Links
//             </h3>
//             <div className="mt-4 space-y-3">
//               {['Home', 'Movies', 'Theatres', 'About Us', 'Contact'].map((item) => (
//                 <Link 
//                   key={item}
//                   to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
//                   className="block text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </div>
          
//           <div className="col-span-1">
//             <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
//               Support
//             </h3>
//             <div className="mt-4 space-y-3">
//               {['Help Center', 'FAQs', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy'].map((item) => (
//                 <a 
//                   key={item}
//                   href="#"
//                   className="block text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="col-span-1">
//             <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
//               Contact Us
//             </h3>
//             <div className="mt-4 space-y-3">
//               <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                 <Mail className="h-4 w-4 mr-2" />
//                 support@cineburst.com
//               </p>
//               <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
//                 <Phone className="h-4 w-4 mr-2" />
//                 +1 (800) 123-4567
//               </p>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
//           <p className="text-sm text-center text-gray-500 dark:text-gray-400">
//             © {new Date().getFullYear()} CineBurst. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
 

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center group">
              <Globe className="h-8 w-8 text-white transition-all duration-300 group-hover:text-gray-400" />
              <span className="ml-3 text-2xl font-serif font-bold text-white group-hover:text-gray-400 transition-all duration-300">
                CineVerse
              </span>
            </Link>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Curating exceptional cinematic experiences through seamless digital booking.
            </p>
            <div className="mt-8 flex space-x-5">
              {[
                { icon: Facebook, url: "#" },
                { icon: Twitter, url: "#" },
                { icon: Instagram, url: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={`${social.icon.name} link`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div className="col-span-1">
            <h3 className="text-xs font-medium text-white uppercase tracking-widest mb-6">
              Navigation
            </h3>
            <div className="space-y-4">
              {['Home', 'Movies', 'Theatres', 'Screenings', 'Premium'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Support Column */}
          <div className="col-span-1">
            <h3 className="text-xs font-medium text-white uppercase tracking-widest mb-6">
              Support
            </h3>
            <div className="space-y-4">
              {['Help Center', 'FAQs', 'Terms', 'Privacy', 'Accessibility'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="text-xs font-medium text-white uppercase tracking-widest mb-6">
              Concierge
            </h3>
            <address className="not-italic space-y-5">
              <div className="flex items-start">
                <Mail className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-400">
                  support@cineverse.com<br />
                  <span className="text-xs text-gray-500">Response within 24h</span>
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-400">
                  +1 (888) 555-CINE<br />
                  <span className="text-xs text-gray-500">9AM-9PM EST</span>
                </span>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 order-2 md:order-1 mt-4 md:mt-0">
              © {new Date().getFullYear()} CineVerse Holdings. All rights reserved.
            </p>
            <div className="flex space-x-6 order-1 md:order-2">
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
                GDPR
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;