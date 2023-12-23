import { Helmet } from "react-helmet-async";
import Landing from "./Landing";
import UserHero from "./UserHero";


const Home = () => {
    return (
        <div>
 <Helmet>
        <title>Home | TraverseTask | Online Task Management Platform</title>
      </Helmet>

           <Landing/>
           <UserHero/>
        </div>
    );
};

export default Home;