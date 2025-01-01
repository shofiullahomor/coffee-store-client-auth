import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Data successfully deleted",
                icon: "success",
                confirmButtonText: "Cool",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-[300px] h-[300px]">
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full p-8">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-3">
              <button className="btn join-item">view</button>
              <Link to={`updateCoffee/${_id}`}>
                <button className="btn join-item">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
