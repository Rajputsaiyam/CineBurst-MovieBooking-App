// import  { useState } from 'react';

// const SeatSelector = ({ availableSeats, onSelectSeats }) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
  
//   const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
//   const seatsPerRow = 10;
  
//   const toggleSeat = (seat) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };
  
//   const handleConfirm = () => {
//     onSelectSeats(selectedSeats);
//   };
  
//   const getSeatStatus = (seat) => {
//     if (selectedSeats.includes(seat)) return 'selected';
//     if (!availableSeats.includes(seat)) return 'occupied';
//     return 'available';
//   };
  
//   return (
//     <div className="seat-selector">
//       <div className="py-6">
//         <div className="mx-auto max-w-3xl">
//           <div className="mb-6 text-center">
//             <div className="mb-10 rounded-lg bg-gray-800 p-4 text-center">
//               <div className="mx-auto w-2/3 rounded-lg bg-gray-900 py-4 text-white">SCREEN</div>
//             </div>
            
//             <div className="mb-6 grid grid-cols-10 gap-2">
//               {rows.map(row => (
//                 Array.from({ length: seatsPerRow }, (_, i) => {
//                   const seatNumber = `${row}${i+1}`;
//                   const status = getSeatStatus(seatNumber);
                  
//                   return (
//                     <button
//                       key={seatNumber}
//                       className={`
//                         h-8 w-8 rounded-t-lg text-xs font-medium transition-colors
//                         ${status === 'available' ? 'bg-gray-200 hover:bg-primary-200 dark:bg-gray-700 dark:hover:bg-primary-700' : ''}
//                         ${status === 'selected' ? 'bg-primary-600 text-white' : ''}
//                         ${status === 'occupied' ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600' : ''}
//                       `}
//                       onClick={() => status !== 'occupied' && toggleSeat(seatNumber)}
//                       disabled={status === 'occupied'}
//                     >
//                       {seatNumber}
//                     </button>
//                   );
//                 })
//               ))}
//             </div>
            
//             <div className="mb-8 flex items-center justify-center space-x-8">
//               <div className="flex items-center">
//                 <div className="mr-2 h-4 w-4 rounded-t-sm bg-gray-200 dark:bg-gray-700"></div>
//                 <span className="text-sm">Available</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="mr-2 h-4 w-4 rounded-t-sm bg-primary-600"></div>
//                 <span className="text-sm">Selected</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="mr-2 h-4 w-4 rounded-t-sm bg-gray-400 dark:bg-gray-600"></div>
//                 <span className="text-sm">Occupied</span>
//               </div>
//             </div>
            
//             <div className="mt-8">
//               <button 
//                 onClick={handleConfirm}
//                 disabled={selectedSeats.length === 0}
//                 className={`btn ${selectedSeats.length > 0 ? 'btn-primary' : 'btn-outline opacity-50 cursor-not-allowed'} w-full`}
//               >
//                 {selectedSeats.length > 0 
//                   ? `Continue with ${selectedSeats.length} seat${selectedSeats.length > 1 ? 's' : ''}`
//                   : 'Select at least one seat'}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeatSelector;
 

import { useState } from 'react';

const SeatSelector = ({ availableSeats, onSelectSeats }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 10;
  
  const toggleSeat = (seat) => {
    setSelectedSeats(prev => 
      prev.includes(seat) 
        ? prev.filter(s => s !== seat) 
        : [...prev, seat]
    );
  };
  
  const handleConfirm = () => {
    onSelectSeats(selectedSeats);
  };
  
  const getSeatStatus = (seat) => {
    if (selectedSeats.includes(seat)) return 'selected';
    if (!availableSeats.includes(seat)) return 'occupied';
    return 'available';
  };
  
  return (
    <div className="bg-black text-white p-8 rounded-xl border border-gray-800">
      {/* Screen Display */}
      <div className="mb-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="h-4 bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-2"></div>
          <div className="bg-gray-900/80 backdrop-blur-sm py-6 rounded-lg border border-gray-700 shadow-lg">
            <h3 className="text-xl font-serif tracking-wider text-gray-300">PREMIUM SCREEN</h3>
          </div>
        </div>
      </div>

      {/* Seat Grid */}
      <div className="grid grid-cols-10 gap-3 mb-12 mx-auto max-w-2xl">
        {rows.map(row => (
          Array.from({ length: seatsPerRow }, (_, i) => {
            const seatNumber = `${row}${i+1}`;
            const status = getSeatStatus(seatNumber);
            
            return (
              <button
                key={seatNumber}
                className={`
                  h-10 w-10 rounded-t-lg text-xs font-medium transition-all duration-300
                  flex items-center justify-center relative
                  ${status === 'available' 
                    ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-600' 
                    : ''}
                  ${status === 'selected' 
                    ? 'bg-white text-black border-white shadow-lg transform -translate-y-1' 
                    : ''}
                  ${status === 'occupied' 
                    ? 'bg-gray-900 border border-gray-800 cursor-not-allowed' 
                    : ''}
                `}
                onClick={() => status !== 'occupied' && toggleSeat(seatNumber)}
                disabled={status === 'occupied'}
                aria-label={`Seat ${seatNumber} - ${status}`}
              >
                {seatNumber}
                {status === 'selected' && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></span>
                )}
              </button>
            );
          })
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-8 mb-12">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-t-sm bg-gray-800 border border-gray-700 mr-2"></div>
          <span className="text-sm text-gray-400">Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-t-sm bg-white mr-2"></div>
          <span className="text-sm text-gray-400">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-t-sm bg-gray-900 border border-gray-800 mr-2"></div>
          <span className="text-sm text-gray-400">Occupied</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center">
        <button 
          onClick={handleConfirm}
          disabled={selectedSeats.length === 0}
          className={`
            px-8 py-4 rounded-full font-medium transition-all duration-300
            ${selectedSeats.length > 0 
              ? 'bg-white text-black hover:bg-gray-100 hover:shadow-lg' 
              : 'bg-gray-900 text-gray-500 border border-gray-800 cursor-not-allowed'}
            flex items-center justify-center gap-2 mx-auto
          `}
        >
          <span className="text-sm uppercase tracking-wider">
            {selectedSeats.length > 0 
              ? `Confirm ${selectedSeats.length} seat${selectedSeats.length > 1 ? 's' : ''}`
              : 'Select seats to continue'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;