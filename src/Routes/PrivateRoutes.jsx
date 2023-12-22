import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { MutatingDots } from "react-loader-spinner";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div>
            <div className="bg-black min-h-screen flex flex-col gap-10 justify-center items-center">
<MutatingDots 
  height="100"
  width="100"
  color="#9523EA"
  secondaryColor= '#E04DCF'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />




        </div>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;