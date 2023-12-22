import { useState } from 'react'
// Components

import MenuItem from './MenuItem'
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdOutlineAddTask } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import DashTittle from '../Dashboard/Components/DashTittle';


const Sidebar = () => {

  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-black text-fus flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
          <DashTittle/>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button text-2xl text-fuchsia-500 p-4 
          '
        >
          <IoMenu  />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-black w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto'>
             <DashTittle/>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            
            <nav>
              <MenuItem
                icon={FaHome}
                label='Home'
                address='/'
              />
                 <MenuItem
                icon={CgProfile}
                label='Profile'
                address='/dashboard/profile'
              />
              <MenuItem
                icon={FaTasks}
                label='All Task'
                address='/dashboard/all-task'
              />
              <MenuItem
                icon={MdOutlineAddTask}
                label='Add Task'
                address='/dashboard/add-task'
              />

              {/* Menu Items */}
            </nav>
          </div>
        </div>


      </div>
    </>
  )
}

export default Sidebar