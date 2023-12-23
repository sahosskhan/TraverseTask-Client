
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const UpdateTask = () => {
    const navigate = useNavigate()
    const {user}=useAuth();
    const data = useLoaderData();

    const {_id,taskTitle,taskDeadline,taskPriority,taskDetails } = data;

    const {
        register,
        handleSubmit, reset
      } = useForm()
      
      const creatorName = user?.displayName;
      const creatorEmail = user?.email;
      

      const onSubmit = (data) => {
        const taskTitle = data.taskTitle;
        const taskDeadline = data.taskDeadline;
        const taskPriority = data.taskPriority;
        const taskDetails= data.taskDetails;
        const taskStatus = "todo";
        reset({
            taskTitle: "",
            taskDeadline:"",
            taskPriority:"",
            taskDetails:""
          });

const TaskUpdate =
{taskTitle,creatorName,taskDeadline,taskPriority,taskDetails,taskStatus, creatorEmail };
console.log(TaskUpdate);
fetch(
  `https://task-management-server-pied-mu.vercel.app/updatedTask/${_id}`,
  {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(TaskUpdate),
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire({
        title: "Success!",
        text: "Task Updated Successfully",
        icon: "success",
        confirmButtonText: "Done",
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
        <title>Edit Task | TraverseTask | Online Task Management Platform</title>
      </Helmet>
          <h1 className="flex gap-x-2  justify-center items-center text-fuchsia-500 text-4xl font-bold"><MdOutlineBrowserUpdated className="text-5xl" /> Update Your Task Here</h1>

<section className="">

<form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Title</label>
                        <input type="text" 
                        name="taskTitle"
                        defaultValue={taskTitle}
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
                        defaultValue={taskDeadline}
              name="taskDeadline"
              {...register("taskDeadline")} placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg focus:border-fuchsia-400  focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Priority </label>

                        
                        <select {...register("taskPriority")} defaultValue={taskPriority} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg focus:border-fuchsia-400  focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Select Priority" >

<option value="Low">Low</option>
<option value="Moderate">Moderate</option>
<option value="High">High</option>
</select>
                    </div>

               

                    <div>
                        <label className="block mb-2 text-xl  text-fuchsia-500 ">Task Description</label>
                        <textarea
                         defaultValue={taskDetails}
                          name="taskDetails"
                          {...register("taskDetails")} placeholder="Enter Task Description" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-fuchsia-400 dark:focus:border-fuchsia-400 focus:ring-fuchsia-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
<div></div>
                    <button
                    type="submit"
                        className="flex mt-5 items-center justify-between w-full px-6 py-3 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-fuchsia-500 rounded-lg hover:bg-black border-fuchsia-500 border-2 ">
                        <span>Update Task </span>

                        <BiSolidEditAlt className="text-3xl" />
                    </button>
                </form>




</section>









        </div>
    );
};

export default UpdateTask;