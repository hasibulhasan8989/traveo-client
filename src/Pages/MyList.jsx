import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {  ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const MyList = () => {
  const loadedData = useLoaderData();
  const [myList, setMyList] = useState(loadedData);

 const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:5000/touristSpot/${id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            
            const remainingList = myList.filter((spot) => spot._id !== id);
            setMyList(remainingList);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
       
    }
  });
};




  
  

  if (myList.length === 0) {
    return (
      <div className="min-h-[calc(100vh-266px)] flex justify-center items-center flex-col gap-2">
        <h1 className="text-4xl font-bold text-lime-500">Add some spot</h1>
        <Link to={"/addTouristSpot"}>
          {" "}
          <button className="btn bg-[#FE5D26]">Click to add</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-266px)]">
      <div className="overflow-x-auto mt-16">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Country Name</th>
              <th>Tour Spot</th>
              <th>Location</th>
              <th>Average Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myList.map((spot, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{spot.country_Name}</td>
                <td>{spot.tourists_spot_name}</td>
                <td>{spot.location}</td>
                <td>{spot.average_cost}</td>
                <td>
                 <Link to={`/update/${spot._id}`}> <button className="btn bg-[#CAE8BD]">Update</button></Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(spot._id)}
                    className="btn bg-[#CB0404] text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyList;


