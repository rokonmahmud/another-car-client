import { key } from "localforage";
import { useLoaderData } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const SingleCarsBrand = () => {
  const brandCard = useLoaderData();

  console.log(brandCard.length);

  if (brandCard.length === 0) {
    return (
      <div>
        <div className="flex">
          <div className="my-32 mx-auto ">
            {" "}
            <img src="https://i.ibb.co/j6SyX1t/download.png" alt="" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* advirtisement */}
      <div className="mx-auto w-9/12 ">
      <div className="carousel my-4  ">
        <div id="slide1" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://dealerimages.dealereprocess.com/image/upload/1600348.jpg"
            className="w-full h-96  rounded-lg "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://s3images.coroflot.com/user_files/individual_files/large_461045_jg0beusqzxbn6b3gbs5eti8hj.jpg"
            className="w-full h-96  rounded-lg "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://wyantgroup.com/wp-content/uploads/2017/01/audi-banner-2.jpg"
            className="w-full h-96  rounded-lg "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full rounded-lg">
          <img
            src="https://www.freewebheaders.com/wp-content/gallery/cars/blue-bmw-alpina-b6-xdrive-gran-coupe-car-web-header.jpg"
            className="w-full h-96  rounded-lg "
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* advirtisement end */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-8 mx-auto w-10/12">
        {brandCard?.map((brand) => (
          <BrandProduct key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default SingleCarsBrand;
