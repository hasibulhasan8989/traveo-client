import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

import Swal from "sweetalert2";

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddSot = (e) => {
    e.preventDefault();
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
    const userName = user.displayName;
    const email = user.email;

    const newTouristSpot = {
      userName,
      email,
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

    console.log(newTouristSpot);
    console.log(user);
    fetch(`https://traveo-server.onrender.com/touristSpot`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleAddSot}
        className="min-h-[calc(100vh-300px)] flex bg-[#F79B72] rounded-2xl my-12 justify-center items-center"
      >
        <fieldset className="fieldset  bg-transparent grow  max-w-7xl  p-18 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col space-y-4 text-black ">
            <label className=" text-lg font-bold mb-2  ">
              tourists_spot_name :
            </label>
            <input
              type="text"
              name="tourists_spot_name"
              className="input border-none rounded-full p-8  w-3/4 bg-white"
            />

            <label className="text-lg font-bold mb-2  ">image :</label>
            <input
              type="text"
              name="image"
              className="input w-3/4 border-none rounded-full p-8 bg-white"
            />

            <label className="text-lg font-bold mb-2  ">country_Name :</label>
            <input
              type="text"
              name="country_Name"
              className="input  w-3/4 border-none rounded-full p-8 bg-white"
            />

            <label className="text-lg font-bold mb-2  ">location :</label>
            <input
              type="text"
              name="location"
              className="input w-3/4 border-none rounded-full p-8 bg-white"
            />

            <label className="text-lg font-bold mb-2  ">average_cost :</label>
            <input
              type="text"
              name="average_cost"
              className="input  w-3/4 border-none rounded-full p-8 bg-white"
            />
          </div>

          <div className="flex flex-col space-y-4 text-black">
            <label className="text-lg font-bold mb-2  ">seasonality :</label>
            <input
              type="text"
              name="seasonality"
              className="input  w-3/4 border-none rounded-full p-8 bg-white"
            />

            <label className="text-lg  font-bold mb-2  ">travel_time :</label>
            <input
              type="text"
              name="travel_time"
              className="input  w-3/4 border-none rounded-full p-8 bg-white"
            />

            <label className="text-lg font-bold mb-2  ">
              totalVisitorsPerYear :
            </label>
            <input
              type="text"
              name="totalVisitorsPerYear"
              className="input  w-3/4 border-none rounded-full p-8 bg-white"
            />
            <label className="text-lg font-bold mb-2  ">
              short description :
            </label>
            <input
              type="text"
              name="description"
              className="input  w-3/4 border-none py-8 md:py-16 rounded-2xl mt-2 bg-white"
            />
          </div>

          <input
            className="col-span-2 cursor-pointer bg-black text-lg py-3 rounded-full text-white"
            type="submit"
            value="Add spot"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AddTouristSpot;
