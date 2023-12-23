import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { GiCrossMark } from "react-icons/gi";
import { motion } from 'framer-motion';
import Logo from "../Layouts/Logo";
import useAuth from "../Hooks/useAuth";
import { MdInput, MdOutput } from "react-icons/md";



const Navbar = () => {
  const {user,logOut} = useAuth();
  const handleLogOut = () => {
    logOut()
    .then(() =>{})
    .catch(error => console.log(error));
  }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} >

<nav x-data="{ isOpen: false }" className="relative bg-black">
        <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
        
       <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} >
   <Logo/>
       </motion.div>
           

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-2xl text-fuchsia-500"
                aria-label="toggle menu"
              >
                {!isOpen ? (
          <IoMdMenu />
                ) : (
                      <GiCrossMark />
                    
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black lg:bg-transparent lg:dark:bg-transparent lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div id="sidebar" className="flex flex-col lg:flex-row lg:mx-6">
                <NavLink to="/"  className="my-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
                <i className="fa-solid fa-house"></i> Home
              </NavLink>
          
              <NavLink to="/about"  className="my-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
              <i className="fa-solid fa-circle-info"></i> About
              </NavLink>
              <NavLink to="/statistics"  className="my-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
              <i className="fa-solid fa-chart-line"></i> Statistics
              </NavLink>
              <NavLink to="/blog"  className="my-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
              <i className="fa-solid fa-bookmark"></i> Blog
              </NavLink>
              <NavLink to="/support"  className="my-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
              <i className="fa-solid fa-headset"></i> Support
              </NavLink>
              <NavLink to="/dashboard/profile"  className="my-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
              <i className="fa-solid fa-server"></i> Dashboard
              </NavLink>
              {user?
              <NavLink onClick={handleLogOut}    className="my-2 flex gap-x-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
               Logout  <MdOutput className="mt-1" />
              </NavLink>
              :
              <NavLink to="/login"  className="my-2 flex gap-x-2 text-fuchsia-500 font-medium text-xl  uppercase transition-colors duration-300 transform  hover:text-white lg:mx-4 lg:my-0">
               Login <MdInput className="mt-1" />
              </NavLink>
  }

            </div>


          </div>
        </div>
      </nav>
        </motion.div>
    );
};

export default Navbar;