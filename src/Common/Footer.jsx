import { MdOutlineArrowForwardIos } from "react-icons/md";
import Logo from "../Layouts/Logo";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>

<footer className="bg-black">
    <div className="container px-6 py-12 mx-auto">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-xl font-semibold tracking-tight  md:mx-3 xl:text-2xl text-white">Subscribe our newsletter to get update.</h1>
            
            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                <a href="#" className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300 bg-fuchsia-500 rounded-lg gap-x-3 hover:bg-gray-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    <span>Sign Up Now</span>

                   <MdOutlineArrowForwardIos/>
                </a>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
                <p className="font-semibold text-xl uppercase text-fuchsia-500">Quick Link</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">Home</a>
                    <a  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">About</a>
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">Customer Care</a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-xl uppercase text-fuchsia-500">Product</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">Netpad Text Editor</a>
                    <a className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">Dadtro Data Management </a>
                    <a  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">Fintro Finance Tech </a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-xl uppercase text-fuchsia-500">Social media</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="https://www.facebook.com/sahosskhan" className="flex gap-x-2 text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500"><FaFacebookSquare className="text-2xl" /> <span className="mt-[2px]">@traversetask</span></a>
                    <a href="https://github.com/sahosskhan" className="flex gap-x-2 text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500"><FaGithubSquare className="text-2xl" /><span className="mt-[2px]">@traversetask</span></a>
                    <a href="https://www.linkedin.com/in/sahosskhan" className="flex gap-x-2 text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500"><FaLinkedin className="text-2xl" /><span className="mt-[2px]">@traversetask</span></a>
                </div>
            </div>

            <div>
                <p className="font-semibold text-xl uppercase text-fuchsia-500">Contact Us</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">+8801778030482</a>
                    <a href="#" className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-fuchsia-400 hover:underline hover:text-fuchsia-500">info@traversetask.com</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
        
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Logo/>

            <p className="mt-4 text-sm text-fuchsia-300 sm:mt-0 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>
        </div>
    </div>
</footer>







          
            
        </div>
    );
};

export default Footer;