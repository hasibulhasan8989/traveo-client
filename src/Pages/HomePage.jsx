import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel";
import {   Link, useLoaderData } from "react-router-dom";
import CountryCard from "../Components/CountryCard";
import TopDestinations from "../Components/TopDestinations";
import PlanJourney from "../Components/PlanJourney";
import PlaceCard2 from "../Components/PlaceCard2";


const HomePage = () => {
  const countries=useLoaderData()
  const [spots,setSpot]=useState([])

  useEffect(()=>{
    fetch(`https://traveo-server.onrender.com/touristSpot`)
    .then(res=>res.json())
    .then(data=>{
      setSpot(data)
    })
  },[])

  const final =spots.slice(0,6)
  console.log(final)


  
  return (
    <div>
      <Carousel></Carousel>
      <h1 className="eb-garamond text-4xl  font-bold text-center  mb-12">Tourists Spots</h1>
      <div className="grid md:grid-cols-3 gap-6 ">
       {
        spots.slice(0,6).map(spot=><PlaceCard2 key={spot._id} spot={spot}></PlaceCard2>)
       }
      </div>
      <div>
        <h1 className="eb-garamond text-4xl  font-bold text-center mt-12"> Countries Section </h1>
        <div className="grid  md:grid-cols-4 gap-4 my-20 ">
          {
            countries.map(country => <Link  to={`/tourPlaces/${country.country_name}`}><CountryCard country={country} ></CountryCard></Link>)
          }
        </div>

      </div>
      <div className="mb-20">
        <TopDestinations></TopDestinations>
      </div>
      <div>
        <PlanJourney></PlanJourney>
      </div>
    </div>
  );
};

export default HomePage;
