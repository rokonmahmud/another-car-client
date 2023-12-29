import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateCars = () => {
  const curentCars = useLoaderData();
  const { _id, type, brandName, name, price, imgUrl, description } = curentCars;

  const handaleUpdateSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const imgUrl = form.imgUrl.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;

    const updateCar = {
      name,
      brandName,
      imgUrl,
      price,
      type,
      description,
    };
    // console.log(updateCar);

    //send Data to the sever
    fetch(`https://car-heaven-server.vercel.app/cars/${brandName}/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.modifiedCount);
        if(data.modifiedCount > 0){
        toast.success("Car Updated Successfully ");
    }
    window.location('/')
      });
  };

  return (
    <div>
      <div className="w-7/12 text-center mt-4 mx-auto">
        <h1 className="text-3xl font-bold py-8 px-4 bg-red-200">
         UPDATE : {name}
        </h1>
      </div>
      <div className="w-10/12 lg:w-6/12 mx-auto my-8">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handaleUpdateSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                name="brandName"
                defaultValue={brandName}
                type="text"
                placeholder="Brand Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                name="imgUrl"
                defaultValue={imgUrl}
                type="text"
                placeholder="Image Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name="price"
                defaultValue={price}
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                name="type"
                defaultValue={type}
                type="text"
                placeholder="Type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>

              <textarea
                name="description"
                defaultValue={description}
                id=""
                cols="30"
                rows="10"
                placeholder="Dscription"
                className="input input-bordered"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-red-600 text-white">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCars;
