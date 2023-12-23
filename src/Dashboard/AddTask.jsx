import { MdPlaylistAddCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { RiAddCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
const AddTask = () => {
    const navigate = useNavigate();
    const {user}=useAuth();
    const {
        register,
        handleSubmit, reset,
      } = useForm()
      const onSubmit = (data) => {
        
        const taskTitle = data.taskTitle;
        const creatorName = user?.displayName;
        const taskDeadline = data.taskDeadline;
        const taskPriority = data.taskPriority;
        const taskDetails= data.taskDetails;
        const taskStatus = "todo";
        const creatorEmail= user?.email;
        reset({
            taskTitle: "",
            taskDeadline:"",
            taskPriority:"",
            taskDetails:""
          });

const PostedTaskData = {taskTitle,creatorName,taskDeadline,taskPriority,taskDetails,taskStatus, creatorEmail}

console.log(PostedTaskData)

fetch(
    "https://task-management-server-pied-mu.vercel.app/added-tasks",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PostedTaskData),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Successfully!",
          text: "Your Task Added  ",
          icon: "success",
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) { 
            navigate('/dashboard/all-task'); 
          }
        });
      }
    });



      }
    return (
        <div className="bg-black min-h-screen">
 <Helmet>
        <title>Add Task | TraverseTask | Online Task Management Platform</title>
      </Helmet>

          <h1 className="flex gap-x-2  justify-center items-center text-fuchsia-500 text-4xl font-bold"><MdPlaylistAddCircle className="text-5xl" /> Add Your Task Here</h1>

<section className="">

<form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Title</label>
                        <input type="text" 
                        name="taskTitle"
                        {...register("taskTitle")}
                        placeholder="Enter Task Title" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg focus:border-fuchsia-400  focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Creator</label>
                        <input type="text" 
                         name="creatorName"
                         defaultValue={user?.displayName}
                         disabled
                         {...register("creatorName")} placeholder="Enter Your Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg focus:border-fuchsia-400  focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Deadline</label>
                        <input type="date" 
              name="taskDeadline"
              {...register("taskDeadline")} placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg focus:border-fuchsia-400  focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Priority </label>

                        
                        <select {...register("taskPriority")} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg focus:border-fuchsia-400  focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Select Priority" >

<option value="Low">Low</option>
<option value="Moderate">Moderate</option>
<option value="High">High</option>
</select>
                    </div>

               

                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Description</label>
                        <textarea
                          name="taskDetails"
                          {...register("taskDetails")} placeholder="Enter Task Description" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-fuchsia-400 dark:focus:border-fuchsia-400 focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
<div></div>
                    <button
                    type="submit"
                        className="flex mt-5 items-center justify-between w-full px-6 py-3 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-fuchsia-500 rounded-lg hover:bg-black border-fuchsia-500 border-2 ">
                        <span>Add Task </span>

                        <RiAddCircleLine className="text-3xl" />
                    </button>
                </form>




</section>









        </div>
    );
};

export default AddTask;