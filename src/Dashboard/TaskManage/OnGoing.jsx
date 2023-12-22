import Swal from "sweetalert2";
import useAllTask from "../../Hooks/useAllTask";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SingleOnGoing from "./SingleOnGoing";
import { MutatingDots } from "react-loader-spinner";

const OnGoing = () => {
    const {user}=useAuth();
const axiosPublic = useAxiosPublic();
const {alltaskshow,refetch,isLoading}=useAllTask();
const FilterTaskByEmail = alltaskshow.filter(task => task.creatorEmail === user?.email);
const FilterTaskBStatus = FilterTaskByEmail.filter(task => task.taskStatus === "ongoing");
console.log(FilterTaskBStatus)



const MakeApprove = (id) =>{
    axiosPublic.patch(`/task-complete/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Is Completed Now",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    });
    }

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
        <h1 className="text-center font-bold text-4xl text-white">OnGoing List</h1>
      






        {FilterTaskBStatus?.map((items) => (
          <SingleOnGoing key={items} items={items} MakeApprove={MakeApprove} ></SingleOnGoing>
        ))}
       
       
       
       
       
               </div>
    );
};

export default OnGoing;