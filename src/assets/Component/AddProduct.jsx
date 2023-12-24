import toast from "react-hot-toast";

const AddProduct = () => {
  const handaleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const imgUrl = form.imgUrl.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;

    const newCar = {
      name,
      brandName,
      imgUrl,
      price,
      type,
      description,
    };
    console.log(newCar);

    //send Data to the sever
    fetch("http://localhost:5000/cars", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCar)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('PRODUCT ADDED ');
      });
  };

  return (
    <div>
      <div className="w-7/12 text-center mt-4 mx-auto">
        <h1 className="text-3xl font-bold py-8 px-4 bg-red-200">
          ADD NEW PRODUCT
        </h1>
      </div>
      <div className="w-10/12 lg:w-6/12 mx-auto my-8">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handaleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
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

export default AddProduct;
