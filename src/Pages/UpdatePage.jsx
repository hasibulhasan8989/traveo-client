
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePage = () => {
    const loadedData=useLoaderData()
    const {
      _id,
      tourists_spot_name,
      image,
      country_Name,
      location,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      description,
    }=loadedData



const handleUpdateSpot=e=>{
    e.preventDefault()
      const form = e.target;

    const tourists_spot_name = form.tourists_spot_name.value;
    const image = form.image.value;
    const country_Name = form.country_Name.value;
    const location = form.location.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const description = form.description.value;
    
      const newTouristSpot = {
      
      tourists_spot_name,
      image,
      country_Name,
      location,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      description,
    };

    fetch(`http://localhost:5000/update/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newTouristSpot)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
              Swal.fire({
                        title: "Success!",
                        icon: "success",
                        draggable: true,
                      });
        }
        
        
    })
}



    return (
        <div>
  <h2 className="text-3xl font-bold text-center my-8">Update Tourist Spot</h2>

  <form
    onSubmit={handleUpdateSpot}
    className="min-h-[calc(100vh-300px)] flex bg-[#F79B72] rounded-2xl my-12 justify-center items-center shadow-xl"
  >
    <fieldset className="bg-transparent grow max-w-7xl p-12 grid grid-cols-2 gap-10">
      <div className="flex flex-col">
        <label className="text-lg font-bold mb-2">Tourist Spot Name:</label>
        <input
          type="text"
          name="tourists_spot_name"
          defaultValue={tourists_spot_name}
          className="input rounded-full p-8 border-none  w-3/4"
        />

        <label className="text-lg font-bold mb-2">Image URL:</label>
        <input
          type="text"
          name="image"
          defaultValue={image}
          className="input  rounded-full p-8 border-none w-3/4"
        />

        <label className="text-lg font-bold mb-2">Country:</label>
        <input
          type="text"
          name="country_Name"
          defaultValue={country_Name}
          className="input rounded-full p-8 border-none w-3/4"
        />

        <label className="text-lg font-bold mb-2">Location:</label>
        <input
          type="text"
          name="location"
          defaultValue={location}
          className="input rounded-full p-8 border-none w-3/4"
        />

        <label className="text-lg font-bold mb-2">Average Cost:</label>
        <input
          type="text"
          name="average_cost"
          defaultValue={average_cost}
          className="input rounded-full p-8 border-none w-3/4"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg font-bold mb-2">Seasonality:</label>
        <input
          type="text"
          name="seasonality"
          defaultValue={seasonality}
          className="input rounded-full p-8 border-none w-3/4"
        />

        <label className="text-lg font-bold mb-2">Travel Time:</label>
        <input
          type="text"
          name="travel_time"
          defaultValue={travel_time}
          className="input rounded-full p-8 border-none w-3/4"
        />

        <label className="text-lg font-bold mb-2">Total Visitors Per Year:</label>
        <input
          type="text"
          name="totalVisitorsPerYear"
          defaultValue={totalVisitorsPerYear}
          className="input rounded-full p-8  border-none w-3/4"
        />

        <label className="text-lg font-bold mb-2">Short Description:</label>
        <textarea
          name="description"
          defaultValue={description}
          className="input border-none rounded-2xl  w-3/4 h-32"
        />
      </div>

      <input
        className="col-span-2 cursor-pointer bg-black text-lg py-3 rounded-full text-white"
        type="submit"
        value="Update Spot"
      />
    </fieldset>
  </form>
</div>

    );
};

export default UpdatePage;