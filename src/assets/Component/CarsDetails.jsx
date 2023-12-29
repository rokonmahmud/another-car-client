import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";

const CarsDetails = () => {
  const carDetail = useLoaderData();
  const { _id, type,brandName, name, price, imgUrl, description } = carDetail;

  const handleaddtocart = ()=> {
    fetch(
      "https://car-heaven-server.vercel.app/my-cart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(`${name} added successfully to cart`);
        }
      })
      .catch((err) => {
        err.message;
      });
  }

  return (
    <div>
      <div className="w-9/12 mx-auto my-28">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className=" my-5 mx-10">
            <img className=" h-[300px] w-[500px] " src={imgUrl} alt="Album" />
          </figure>
          <div className="card-body w-80">
            <h2 className="card-title text-4xl">{name}</h2>
            <p className="text-xl font-semibold ">Brand : {brandName}</p>
            <p className="text-xl font-semibold ">Type : {type}</p>

            {/* rating */}
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/* rating */}
            <p className="text-2xl font-semibold bg-red-600  text-center py-2 px-2 my-2 text-white rounded-full">$ {price}</p>
            <div className="card-actions justify-end">
              <button 
              onClick={handleaddtocart}
               className="btn text-xl bg-red-600  text-center text-white rounded-full w-full "><FaShoppingCart />
 Add to cart</button>
            </div>
          </div>
        </div>
        <span className="text-2xl font-bold bg-red-500  text-center py-2 px-2 my-2 text-white rounded-lg ">Description:</span>
      <p className="text-xl mt-4">{description}</p>
      </div>
    </div>
  );
};

export default CarsDetails;
