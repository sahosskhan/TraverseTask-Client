import { MutatingDots } from "react-loader-spinner";
import useAllTask from "../../Hooks/useAllTask";
import useAuth from "../../Hooks/useAuth";
import SingleCompleted from "./SingleCompleted";

const Complete = () => {
    const {user}=useAuth();

const {alltaskshow,isLoading}=useAllTask();
const FilterTaskByEmail = alltaskshow.filter(task => task.creatorEmail === user?.email);
const FilterTaskBStatus = FilterTaskByEmail.filter(task => task.taskStatus === "completed");
console.log(FilterTaskBStatus)


if (isLoading){
    return <>
    
    <div className="bg-black min-h-screen flex flex-col gap-10 justify-center items-center">
  <MutatingDots 
    height="100"
    width="100"
    color="#9523EA"
    secondaryColor= '#E04DCF'
    radius='12.5'
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   />
  
  
  
  
          </div>
    
    
    
    
    </>
  }


    return (
        <div className="my-5">
        <h1 className="text-center font-bold text-4xl text-white">Completed List</h1>
       
        {FilterTaskBStatus?.map((items) => (
          <SingleCompleted key={items} items={items}  ></SingleCompleted>
        ))}
       
       
       
       
       
       
               </div>
    );
};

export default Complete;