import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

const {login} = useContext(AuthContext)
const navigate = useNavigate();
const location = useLocation()
const handlelogin = (e) => {
  e.preventDefault();
 //  get filds values
  const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
   console.log(email, password);
  


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

   // login user
   login(email, password)
     .then(res => console.log(res.user))
     .catch(error => console.log(error))
     navigate(location?.state? location.state: "/")
 };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlelogin} className="card-body">
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
                name="password"
                placeholder="password"
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
              <button type="submit" className="btn bg-red-600 text-white">Login</button>
            </div>
             {/* social login */}
             <SocialLogin/>
            {/* social login */}
            <div className="flex mx-auto justify-between">
              <p className="mr-4">new here?</p>
              <Link to={"/registration"}>
                <p className="ml-4 text-red-600">creat an account!</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
