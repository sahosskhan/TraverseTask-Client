import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
const Landing = () => {
    return (
        <div>
          <div className="container px-6  mx-auto">
        <div className="items-center lg:flex">
            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl">Effortless Task Management,<br/>Designed for<span className="text-fuchsia-500 "> Productivity</span></h1>
                    
                    <p className="mt-3 text-lg text-gray-400 ">Embark on a journey of seamless productivity as you conquer your to-dos with our cutting-edge Task Management Platform. Unleash your potential, embrace efficiency, and redefine success.</p>
                    <Link to='/dashboard/profile'>
                    <button className="flex px-5 py-2 mt-6 text-base gap-x-1 tracking-wider text-white uppercase transition-colors duration-300 transform bg-fuchsia-500 rounded-lg w-auto hover:bg-fuchsia-500 focus:outline-none focus:bg-fuchsia-500">Let’s Explore <AiOutlineArrowRight className=" text-xl" /> </button>
                    </Link>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="animate-pulse flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src="https://i.ibb.co/wsYBVzv/image.png" alt="img"/>
            </motion.div>
        </div>
    </div>  
        </div>
    );
};

export default Landing;