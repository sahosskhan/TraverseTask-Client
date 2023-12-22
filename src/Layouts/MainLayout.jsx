import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
const MainLayout = () => {



    return (
      <>

        <div className='bg-black'> 
       <Navbar/>
      <Outlet/>
  <Footer/>
    </div>
 
    </>
    );
};

export default MainLayout;