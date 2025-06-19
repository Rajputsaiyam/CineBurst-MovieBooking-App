// import  { Link } from 'react-router-dom';
// import { MapPin } from 'lucide-react';

// const TheatreCard = ({ theatre }) => {
//   return (
//     <div className="card group hover:shadow-xl transition-shadow">
//       <Link to={`/theatres/${theatre._id}`} className="block relative overflow-hidden aspect-video">
//         <img 
//           src={theatre.coverImageURL}
//           alt={theatre.name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </Link>
      
//       <div className="p-4">
//         <Link to={`/theatres/${theatre._id}`} className="block">
//           <h3 className="text-lg font-semibold mb-2 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
//             {theatre.name}
//           </h3>
//         </Link>
        
//         <div className="flex items-start text-sm text-gray-600 dark:text-gray-400 mb-4">
//           <MapPin className="h-4 w-4 mr-1 mt-0.5 shrink-0" />
//           <span>
//             {theatre.plot}, {theatre.street}, {theatre.city}, {theatre.country}, {theatre.pincode}
//           </span>
//         </div>
        
//         <Link 
//           to={`/theatres/${theatre._id}`} 
//           className="btn btn-primary w-full text-center"
//         >
//           View Shows
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TheatreCard;
 

import { Link } from 'react-router-dom';
import { MapPin, Ticket } from 'lucide-react';

const TheatreCard = ({ theatre }) => {
  return (
    <div className="group relative bg-black border border-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      {/* Theatre Image with Hover Effect */}
      <Link 
        to={`/theatres/${theatre._id}`} 
        className="block relative overflow-hidden aspect-video"
      >
        <img 
          src={theatre.coverImageURL || 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&h=450'} 
          alt={theatre.name}
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Ticket className="h-8 w-8 text-white mx-auto mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300" />
        </div>
      </Link>
      
      {/* Theatre Details */}
      <div className="p-6">
        {/* Theatre Name */}
        <Link 
          to={`/theatres/${theatre._id}`} 
          className="block mb-4"
        >
          <h3 className="text-xl font-serif font-bold text-white tracking-tight line-clamp-2 hover:text-gray-300 transition-colors">
            {theatre.name}
          </h3>
        </Link>
        
        {/* Location */}
        <div className="flex items-start text-sm text-gray-400 mb-6">
          <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
          <address className="not-italic leading-relaxed">
            {[theatre.plot, theatre.street, theatre.city, theatre.country]
              .filter(Boolean)
              .join(', ')}
            {theatre.pincode && <>, {theatre.pincode}</>}
          </address>
        </div>
        
        {/* CTA Button */}
        <Link 
          to={`/theatres/${theatre._id}`} 
          className="w-full py-3 px-6 bg-white text-black hover:bg-gray-100 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 group"
        >
          <Ticket className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
          <span>VIEW SHOWTIMES</span>
        </Link>
      </div>

      {/* Premium Badge (conditional) */}
      {theatre.premium && (
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-600 text-xs uppercase tracking-wider text-white">
          PREMIUM
        </div>
      )}
    </div>
  );
};

export default TheatreCard;