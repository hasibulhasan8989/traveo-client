import React from "react";
import { Link } from "react-router-dom";

const PlaceCart = ({ spot }) => {
  const {
    tourists_spot_name,
    average_cost,
    totalVisitorsPerYear,
    travel_time,
    seasonality,
    image,
    _id
  } = spot;
  return (
    <div className="card shadow-2xl p-6 bg-[#F2F2F2] text-black">
      <figure>
        <img
          src={image}
          alt="Place"
          className="rounded-2xl "
        />
      </figure>
      <div className=" space-y-3">
        <h2 className="card-title text-2xl mt-4">{tourists_spot_name}</h2>
        <div className="space-y-3 flex flex-col">
            <p className="text-lg font-semibold ">Average cost : <span className="font-normal">{average_cost}</span></p>
        <p className="text-lg font-semibold ">Total Visitor Per Year : <span className="font-normal" > {totalVisitorsPerYear} </span> </p>
        <p className="text-lg font-semibold ">Travel Time : <span className="font-normal" >{travel_time}</span> </p>
        <p className="text-lg font-semibold grow ">Seasonality : <span className="font-normal"> {seasonality} </span> </p>

        <Link to={`/viewDetails/${_id}`}><button className="btn btn-neutral">View Details</button> </Link>
        </div>
       
      
      </div>
    </div>
  );
};

export default PlaceCart;
