import Swal from "sweetalert2";
import useAllTask from "../../Hooks/useAllTask";
import useAuth from "../../Hooks/useAuth";
import SingleTodo from "./SingleTodo";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MutatingDots } from "react-loader-spinner";

const ToDo = () => {
const {user}=useAuth();
const axiosPublic = useAxiosPublic();
const {alltaskshow,refetch,isLoading}=useAllTask();
const FilterTaskByEmail = alltaskshow.filter(task => task.creatorEmail === user?.email);
const FilterTaskBStatus = FilterTaskByEmail.filter(task => task.taskStatus === "todo");
console.log(FilterTaskBStatus)



const MakeApprove = (id) =>{
    axiosPublic.patch(`/task-ongoing/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Is Ongoing Now",
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





const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://task-management-server-pied-mu.vercel.app/task-delete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Task has been deleted.",
                "success"
              );
            }
            refetch()
          });
      }
    });
  };


    return (
        <div className="my-5">
 <h1 className="text-center font-bold text-4xl text-white">Todo List</h1>

 {FilterTaskBStatus?.map((items) => (
          <SingleTodo key={items} items={items} handleDelete={handleDelete} MakeApprove={MakeApprove}></SingleTodo>
        ))}








        </div>
    );
};

export default ToDo;