import React from 'react';

const PlaceCard2 = ({spot}) => {
    return (
         <div className=" p-12 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={spot.image}
        alt="Marina Bay Sights"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold uppercase text-gray-800">{spot.location}</h3>

        <div className="flex items-center space-x-2 mt-2">
          <div className="text-yellow-400 text-sm">
            ★★★★★
          </div>
          <span className="text-sm text-gray-500">(52 Reviews)</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm">From</span>
          <span className="text-orange-500 font-bold text-xl"> ${spot.average_cost
}</span>
        </div>
      </div>
    </div>
    );
};

export default PlaceCard2;