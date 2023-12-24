import { FaCar, FaCheckCircle, FaKey, FaTools, FaUsers } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import CarsCard from "./CarsCard";

const Home = () => {
  const Cars = useLoaderData();
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center my-8">
        <div>
          <img src="https://i.ibb.co/6nsFxx8/01.png" alt="this is car img" />
        </div>
        <div className="lg:w-5/12 m-8">
          <h1 className="text-5xl font-bold capitalize">
            World Largest{" "}
            <span className="text-[#EF1721]">
              Car <br /> Dealer
            </span>{" "}
            Marketplace.
          </h1>
          <p className="mt-4">
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <div className="flex items-center mt-4">
            <FaCheckCircle className="text-xl text-[#EF1721] mr-4"></FaCheckCircle>
            <p>At vero eos et accusamus et iusto odio.</p>
          </div>
          <div className="flex items-center mt-4">
            <FaCheckCircle className="text-xl text-[#EF1721] mr-4"></FaCheckCircle>
            <p>Established fact that a reader will be distracted.</p>
          </div>
          <div className="flex items-center mt-4">
            <FaCheckCircle className="text-xl text-[#EF1721] mr-4"></FaCheckCircle>
            <p>Sed ut perspiciatis unde omnis iste natus sit.</p>
          </div>
        </div>
      </div>
      {/* progress section */}

      <div className="bg-progressBg bg-cover p-8 my-8">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          <div className="flex flex-col text-center">
            <FaCar className="border-white border-2 bg-black text-white rounded-full p-4 text-8xl ml-16 md:ml-28 lg:ml-28"></FaCar>
            <h2 className="text-4xl  mt-4 text-white font-bold">500</h2>
            <p className=" mb-4 text-white text-2xl">+ Available Cars</p>
          </div>
          <div className="flex flex-col text-center">
            <FaKey className="border-white border-2 bg-black text-white rounded-full p-4 text-8xl ml-16  md:ml-28 lg:ml-28"></FaKey>
            <h2 className="text-4xl  mt-4 text-white font-bold">900</h2>
            <p className=" mb-4 text-white text-2xl">+ Happy Clients</p>
          </div>
          <div className="flex flex-col  text-center">
            <FaTools className="border-white border-2 bg-black text-white rounded-full p-4 text-8xl ml-16 md:ml-28 lg:ml-28"></FaTools>
            <h2 className="text-4xl  mt-4 text-white font-bold">1500</h2>
            <p className="mb-4 text-white text-2xl">+ Team Workers</p>
          </div>
          <div className="flex flex-col  text-center">
            <FaUsers className="border-white border-2 md:ml-28 lg:ml-28 bg-black text-white rounded-full p-4 ml-16 text-8xl"></FaUsers>
            <h2 className="text-4xl  mt-4 text-white font-bold">30</h2>
            <p className=" mb-4 text-white text-2xl">+ Years Of Experience</p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-4xl font-semibold uppercase">
        Our Category
      </h2>
      <hr className=" w-1/12 mx-auto bg-red-500 h-1 rounded-lg mt-4"></hr>
      <div className="grid grid-cols-2 lg:grid-cols-3  my-8 gap-4 w-8/12 mx-auto">
        {Cars.map((car) => (
          <CarsCard key={Cars.id} car={car}></CarsCard>
        ))}
      </div>
      {/* another section here */}
      <div className="mt-4">
        <h1 className="text-center text-5xl mb-8  font-semibold text-black ">
          Meet With Our Team
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 w-10/12 mx-auto gap-4 mb-8">
          <div >
            <img
              className="h-72 rounded-lg"
              src="https://i.ibb.co/JmtCxYW/04-1.jpg"
              alt=""
            />
            <div className="lg:text-center">
              <h3 className="text-2xl font-bold ">Chad Smith</h3>
              <h3 className="text-red-600 text-lg">HR Manager</h3>
            </div>
          </div>
          <div>
            <img
              className="h-72 rounded-lg"
              src="https://i.ibb.co/BBWRYnt/03.jpg"
              alt=""
            />
            <div className="lg:text-center">
              <h3 className="text-2xl font-bold ">Malissa Fie</h3>
              <h3 className="text-red-600 text-lg">Technician</h3>
            </div>
          </div>
          <div>
            <img
              className="h-72 rounded-lg"
              src="https://i.ibb.co/d41zw2c/02.jpg"
              alt=""
            />
            <div className="lg:text-center">
              <h3 className="text-2xl font-bold ">Arron Rodri</h3>
              <h3 className="text-red-600 text-lg">CEO & Founder</h3>
            </div>
          </div>
          <div>
            <img
              className="h-72 rounded-lg"
              src="https://i.ibb.co/SRqQKWF/01.jpg"
              alt=""
            />
            <div className="lg:text-center">
              <h3 className="text-2xl font-bold ">Tony Pinto</h3>
              <h3 className="text-red-600 text-lg">Mechanical Engineer</h3>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
