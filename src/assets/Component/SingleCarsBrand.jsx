import { key } from "localforage";
import { useLoaderData } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const SingleCarsBrand = () => {
  const brandCard = useLoaderData();

  console.log(brandCard.length);

  if (brandCard.length === 0) {
    return (
      <div className="flex">
        <div className="my-32 mx-auto ">
          {" "}
          <img src="https://i.ibb.co/j6SyX1t/download.png" alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-16 mx-auto w-10/12">
      {brandCard.map((brand) => <BrandProduct key={brand._id} brand={brand}/>)}
    </div>
  );
};

export default SingleCarsBrand;
