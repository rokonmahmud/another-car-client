// import { useContext } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handlesinOut =()=>{
    logout()
    .then((result)=>{
      console.log(result.user)
    })
    .catch()
  }
  console.log(user);
  const navigateLink = (
    <>
      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/pricing"}
        >
          My Cart
        </NavLink>
      </li>

      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/addProduct"}
        >
          Add Product{" "}
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/about"}
        >
          About Us{" "}
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={`text-xl hover:bg-white focos:bg-white text-black`}
          to={"/contact"}
        >
          Contact Us{" "}
        </NavLink>
      </li>
    </>
  );
console.log(user?.photoURL);
  return (
    <div className="navbar  w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigateLink}
          </ul>
        </div>
        <img
          className="w-44 h-12 mr-4"
          src={"https://i.ibb.co/Y2JcpF5/logo-1.png"}
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigateLink}</ul>
      </div>
      <div className="navbar-end rounde">
        <img
          className="h-[50px] rounded-full mr-4"
          src={user?.photoURL}
          alt=''
        />
        

        {user?.email ? (
          
          <button
            onClick={handlesinOut}
            className="text-white py-2 px-8 rounded-md bg-[#f05151]"
          >
            Logout
          </button>
        ) : (
          <Link to='/Login'>
          <button
            
            className="text-white py-2 px-8 rounded-md bg-[#f05151]"
          >
            Login
          </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
