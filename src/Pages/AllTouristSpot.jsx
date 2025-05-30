
import { Link, useLoaderData } from 'react-router-dom';
import PlaceCart from '../Components/PlaceCart';
import { FaSadCry } from 'react-icons/fa';
import { useState } from 'react';

const AllTouristSpot = () => {
    const loadedData=useLoaderData()
    const [places,setPlaces]=useState(loadedData)

    if(loadedData.length===0){
        return(
            <div className='min-h-[700px] flex justify-center items-center flex-col'>

                <div className='text-5xl .eb-garamond font-bold text-amber-500 flex gap-4'>
                    <h1 className=' '>No Place Found </h1>
                <span><FaSadCry></FaSadCry></span>
                </div>

                <Link to={'/addTouristSpot'}><button className='btn btn-accent mt-10'>Add</button></Link>

            </div>
        )
    }
    console.log(loadedData)
    return (
        <div className='min-h-[600px] my-18 flex flex-col items-center '>

            <button className='btn bg-amber-500 mb-10'>Low to high</button>
            <div className='grid  md:grid-cols-4  gap-5'>
                {
                places.map(spot=><PlaceCart key={spot._id} spot={spot} ></PlaceCart>)
            }
            </div>

            
        </div>
    );
};

export default AllTouristSpot;