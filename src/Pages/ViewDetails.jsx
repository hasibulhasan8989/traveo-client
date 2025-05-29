import { useLoaderData } from "react-router-dom";

import { GiGlobe } from "react-icons/gi";
import { FaCalendar, FaClock, FaDollarSign, FaGlobe, FaUser } from "react-icons/fa";




const ViewDetails = () => {

    const spot=useLoaderData();
    const {
      
      tourists_spot_name,
      image,
      country_Name,
      location,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      description,
    }=spot

   

   


    return (
          <div className="max-w-5xl mx-auto p-6 text-gray-800 mt-10">
      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img src={image} alt={tourists_spot_name} className="w-full h-96 object-cover" />
      </div>

      {/* Title and Location */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-4xl font-bold text-teal-700">{tourists_spot_name}</h1>
        <p className="text-gray-600 mt-2 sm:mt-0">{location}</p>
      </div>

      {/* Description */}
      <p className="mt-4 text-lg leading-relaxed">{description}</p>

      {/* Map Embed */}
      <div className="mt-8">
       
         <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-teal-700 mb-6">
        Travel Info: {country_Name}
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <div>
            <div className=" flex items-center gap-2 text-2xl text-green-500 font-bold">
                <span> <FaGlobe></FaGlobe></span>
               <label>Country</label>
            </div>
            
            <h1 className="text-xl mt-2 ">{country_Name}</h1>
        </div>

        <div>
            <div className=" flex items-center gap-2 text-2xl text-green-500 font-bold">
                <span> <FaDollarSign></FaDollarSign></span>
               <label>Average Cost</label>
            </div>
            
            <h1 className="text-xl mt-2 ">{average_cost}</h1>
        </div>




        <div className="">
            <div className=" flex items-center gap-2 text-2xl text-green-500 font-bold">
                <span> <FaClock></FaClock></span>
               <label>Seasonality</label>
            </div>
            
            <h1 className="text-xl mt-2 ">{seasonality}</h1>
        </div>

        <div className="">
            <div className=" flex items-center gap-2 text-2xl text-green-500 font-bold">
                <span> <FaCalendar></FaCalendar></span>
               <label>Travel Time</label>
            </div>
            
            <h1 className="text-xl mt-2 ">{travel_time}</h1>
        </div>
        <div className="">
            <div className=" flex items-center gap-2 text-2xl text-green-500 font-bold">
                <span><FaUser></FaUser></span>
               <label>Total Visitor</label>
            </div>
            
            <h1 className="text-xl mt-2 ">{totalVisitorsPerYear}</h1>
        </div>
       
       
      </div>
    </div>
       
      </div>

      {/* Contact or Footer */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TravelExplorer. All rights reserved.
      </div>
    </div>
    );
};

export default ViewDetails;