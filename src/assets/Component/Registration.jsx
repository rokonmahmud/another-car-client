import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import {  updateProfile } from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";

const Registration = () => {
  const { creatUser } = useContext(AuthContext);

  const handleRegister = (e) => {
   e.preventDefault();
  //  get filds values
   const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL,email, password);


    if(password.length < 6){
      toast.error('password must be at least 6 characters ');
      return;
    }else if(!/[A-Z]/.test(password)){
      toast.error('password must be have capital letter ');
      return;

    }else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)){
      toast.error('password must be have one spacial letter ');
      return;
    }

    // creat a new user
    creatUser(email, password)
      .then(res => console.log(res.user))
      .catch(error => console.log(error))
   
      // updateProfile(auth.currentUser, {
      //   displayName : name,
      //   photoURL : photoURL
      // })
      
  };

  return (
    <div>
      <div className="hero min-h-screen  bg-base-200">
        <div className="card flex-shrink-0 my-14 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={ handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Piture</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-red-600 text-white">Register</button>
            </div>
            {/* social login */}
            <SocialLogin />
            {/* social login */}
            <div className="flex mx-auto justify-between">
              <p className="mr-4">already member?</p>
              <Link to={"/login"}>
                <p className="ml-4 text-red-600">creat an account!</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
