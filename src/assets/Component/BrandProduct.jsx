import { Link } from "react-router-dom";

const BrandProduct = ({ brand }) => {
  const {_id, brandName, name, price, imgUrl, description } = brand;
  console.log(brand);
  return (
    <div className="">
      <div className="">
        <div className="card  bg-base-100 shadow-xl">
          <figure className="h-40 m-8">
            <img className=" " src={imgUrl} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
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
            <p className="text-xl font-semibold">$ {price}</p>

            <div className="card-actions justify-end">
              <button className="btn bg-red-500">Update</button>
              <Link to={`/cars/${brandName}/${_id}`}>
                {" "}
                <button className="btn bg-violet-600">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
