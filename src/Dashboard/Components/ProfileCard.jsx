import { MdOutlineEmail, MdOutlinePeopleAlt } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const ProfileCard = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const { image, name, email, role } = items;
    return (
        <div>
                 <div className="flex mx-3 flex-col items-center p-8 transition-colors duration-300 transform border-2  border-fuchsia-500 cursor-pointer rounded-xl group ">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={image} alt=""/>

                <h1 className="mt-4 text-2xl font-semibold uppercase text-white">{name}</h1>

                <p className="mt-3 text-xl flex gap-2  text-fuchsia-500 capitalize "><MdOutlinePeopleAlt /> <span className='-mt-1'>{role}</span></p>
                <p className="mt-3 text-xl flex gap-2   text-fuchsia-300 lowercase "><MdOutlineEmail className='text-2xl' /><span className='-mt-1'>{email}</span></p>


            </div> 
        </div>
    );
};

export default ProfileCard;