import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { getSingleJeweleryApi, updateJeweleryApi } from "../../apis/Api";

const AdminUpdateProduct = () => {
  const { id } = useParams();

  useEffect(() => {
    getSingleJeweleryApi(id)
      .then((res) => {
        console.log(res.data);
        setJeweleryName(res.data.jewelery.jeweleryName);
        setJeweleryPrice(res.data.jewelery.jeweleryPrice);
        setJeweleryCategory(res.data.jewelery.jeweleryCategory);
        setJeweleryDescription(res.data.jewelery.jeweleryDescription);
        setOldImage(res.data.jewelery.jeweleryImage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // fill all the info in each fields

  // make a use state
  const [jeweleryName, setJeweleryName] = useState("");
  const [jeweleryPrice, setJeweleryPrice] = useState("");
  const [jeweleryCategory, setJeweleryCategory] = useState("");
  const [jeweleryDescription, setJeweleryDescription] = useState("");

  // state for image
  const [jeweleryNewImage, setJeweleryNewImage] = useState(null);
  const [previewNewImage, setPreviewNewImage] = useState(null);
  const [oldImage, setOldImage] = useState("");

  // image upload handler
  const handleImage = (event) => {
    const file = event.target.files[0];
    setJeweleryNewImage(file); // for backend
    setPreviewNewImage(URL.createObjectURL(file));
  };

  //update product function
  const handelUpdate = (e) => {
    e.preventDefault();

    //make a form data
    const formData = new FormData();
    formData.append("jeweleryName", jeweleryName);
    formData.append("jeweleryPrice", jeweleryPrice);
    formData.append("jeweleryCategory", jeweleryCategory);
    formData.append("jeweleryDescription", jeweleryDescription);

    if (jeweleryNewImage) {
      formData.append("jeweleryImage", jeweleryNewImage);
    }

    //api call
    updateJeweleryApi(id, formData)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          toast.error(error.response.data.message);
        } else if (error.response.status === 400) {
          toast.warning(error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h2>
          Update product for <span className="text-danger">'Jewelery'</span>
        </h2>

        <div className="d-flex gap-3">
          <form action="">
            <label htmlFor="">Jewelery Name</label>
            <input
              onChange={(e) => setJeweleryName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter your jewelery name"
              value={jeweleryName}
            />

            <label className="mt-2" htmlFor="">
              Jewelery Price
            </label>
            <input
              onChange={(e) => setJeweleryPrice(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Enter your jewelery price"
              value={jeweleryPrice}
            />

            <label className="mt-2">Choose category</label>
            <select
              onChange={(e) => setJeweleryCategory(e.target.value)}
              className="form-control"
              value={jeweleryCategory}
            >
              <option value="All">All</option>
              <option value="Earings">Earings</option>
              <option value="Bangles">Bangles</option>
              <option value="Nose Ring">Nose Ring</option>
              <option value="Necklaces">Necklaces</option>
              <option value="Rings">Rings</option>
            </select>

            <label className="mt-2">Enter description</label>
            <textarea
              onChange={(e) => setJeweleryDescription(e.target.value)}
              className="form-control"
              value={jeweleryDescription}
            ></textarea>

            <label className="mt-2">Choose jewelery Image</label>
            <input
              onChange={handleImage}
              type="file"
              className="form-control"
            />

            <button
              onClick={handelUpdate}
              className="btn btn-danger w-100 mt-2"
            >
              Update Product
            </button>
          </form>
          <div className="image section">
            <h6>Old Image Preview</h6>
            <img
              className="object-fit-cover rounded-4"
              height={"300px"}
              width={"300px"}
              src={`http://localhost:5000/jewelerys/${oldImage}`}
            />
            {previewNewImage && (
              <div>
                <h6>New Image Preview</h6>
                <img
                  src={previewNewImage}
                  className="object-fit-cover rounded-4"
                  height={"300px"}
                  width={"300px"}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminUpdateProduct;
