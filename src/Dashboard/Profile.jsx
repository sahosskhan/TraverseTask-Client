
import { Helmet } from 'react-helmet-async';
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
 <Helmet>
        <title>Profile | TraverseTask | Online Task Management Platform</title>
      </Helmet>
{filterUserList?.map((items) => (
    <ProfileCard key={items} items={items}></ProfileCard>
  ))}

    </div>
  )
}

export default Profile