import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
   ;
    if(!user?.email){
      return  <Navigate to={'/login'} />
    }

    return children;
};

export default PrivetRoute;