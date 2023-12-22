
import useAuth from '../Hooks/useAuth';
import useUser from '../Hooks/userUser';
import ProfileCard from './Components/ProfileCard';

const Profile = () => {
  const {userList}= useUser();
  const {user}=useAuth()
  const filterUserList = userList.filter(contest => contest.email === user?.email);
  console.log(filterUserList);
  return (
    <div className='flex justify-center items-center min-h-screen'>

{filterUserList?.map((items) => (
    <ProfileCard key={items} items={items}></ProfileCard>
  ))}

    </div>
  )
}

export default Profile