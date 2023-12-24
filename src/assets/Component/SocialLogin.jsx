import { useContext } from "react";
import { FaGoogle, FaFacebook  } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const {user, googleLogin} = useContext(AuthContext);

 const handleSocialLogin = ()=>{
    googleLogin()
    .then(res => console.log(res))
    .then(err => console.log(err))
    
 }

  return (
    <div className="mb-4">
      <div className="divider divider-neutral">connect with</div>
      <div className="flex justify-around">
        <div>
          <button onClick={ ()=> handleSocialLogin(googleLogin)} className="btn">
            <FaGoogle />
            Google
          </button>
        </div>
        {/* <div>
          <button className="btn">
          <FaFacebook />

            Button
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SocialLogin;
