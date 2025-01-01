import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: " coffee updated successfully ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#f2f0ed] p-24 ">
      <h1 className="text-4xl text-center">Add Coffee</h1>
      <form onSubmit={handleUpdateCoffee}>
        <div className="flex gap-2 ">
          <div className="form-control w-[50%]  mx-auto ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-info file-input-md w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-info file-input-md w-full"
                name="quantity"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-[50%]  mx-auto ">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={supplier}
                placeholder="Add supplier"
                className="input input-info file-input-md w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={taste}
                placeholder="Add Taste"
                className="input input-info file-input-md w-full"
                name="taste"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-[50%]  mx-auto ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={category}
                placeholder="Add Category"
                className="input input-info file-input-md w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control w-[50%]">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={details}
                placeholder="Add Details"
                className="input input-info file-input-md w-full"
                name="details"
              />
            </label>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-[100%]    ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-info file-input-md w-full"
                name="photo"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-block btn-primary mt-2">
          <input type="submit" value="Update Coffee" />
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
