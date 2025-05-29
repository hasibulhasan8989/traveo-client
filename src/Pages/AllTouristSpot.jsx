
import { useLoaderData } from 'react-router-dom';
import PlaceCart from '../Components/PlaceCart';

const AllTouristSpot = () => {
    const loadedData=useLoaderData()
    console.log(loadedData)
    return (
        <div className='min-h-[600px] my-18'>
            <div className='grid grid-cols-3 gap-5'>
                {
                loadedData.map(spot=><PlaceCart key={spot._id} spot={spot} ></PlaceCart>)
            }
            </div>

            
        </div>
    );
};

export default AllTouristSpot;