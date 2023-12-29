import { Link, useLoaderData } from "react-router-dom";
import SingleCarsBrand from "./SingleCarsBrand";

// eslint-disable-next-line react/prop-types
const CarsCard = ({ car}) => {
  // eslint-disable-next-line react/prop-types
  const singleBrand = useLoaderData([]);
  const { brand, image_url } = car;
  console.log(brand);
 
  return (
    <Link to={`/cars/${brand}`}>

      
    <div >
      <div>
        <div className="card card-compact rounded-lg p-8 bg-base-100 text-center shadow-xl hover:text-red-500">
          <figure>
            <img className="h-[200px] w-[400px]" src={image_url} alt="img" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center lg:ml-4"> {brand}</h2>
          </div>
        </div>
      </div>
    </div>
      
    
    </Link>
    
  );
};

export default CarsCard;
