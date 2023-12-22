import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5 rounded-lg text-fuchsia-500 transition-colors duration-300 transform  hover:bg-white  hover:text-fuchsia-500 ${
          isActive ? 'bg-white   text-fuchsia-500' : ' text-fuchsia-5000'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem