import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleTodo = ({items, handleDelete, MakeApprove}) => {
    // eslint-disable-next-line react/prop-types
    const  {_id,taskTitle,taskDeadline,taskPriority,taskDetails} =items;
    const [{ isDragging }, drag] = useDrag({
      type: "TASK", // Add this line
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });


    return (
        <div ref={drag} className={`task ${isDragging ? "dragging" : ""}`}>
         



<div className=" flex flex-col gap-2 my-8 border-2 border-fuchsia-500 p-5 rounded-lg">
  <h1 className="text-2xl text-fuchsia-500">{taskTitle}</h1> 
  <p className="text-lg text-fuchsia-300">{taskDetails}</p> 
<div className="flex justify-between items-center ">
<p className="text-xl text-red-500">DeadLine: <span className=" text-white">{taskDeadline}</span></p>
  <p className="text-xl text-red-500">Priority: <span className=" text-white">{taskPriority}</span></p>
</div>
<div className="flex flex-row text-xl justify-between text-white mt-2">
    <p onClick={() => MakeApprove(_id)} className="bg-fuchsia-500 px-6 py-1 rounded-lg  hover:bg-black border-2 border-fuchsia-500" >Start <i className=" ml-2 mt-1 fa-solid fa-play"></i></p>
    <Link to={`/dashboard/updateTask/${_id}`}>
    <p className="bg-fuchsia-500 px-6 py-1 rounded-lg  hover:bg-black border-2 border-fuchsia-500" >Edit <i className="ml-2 mt-1 fa-solid fa-pen-to-square"></i></p>
    </Link>

    <p onClick={() => handleDelete(_id)} className="bg-fuchsia-500 px-6 py-1 rounded-lg  hover:bg-black border-2 border-fuchsia-500" >Delete <i className="ml-2 mt-1 fa-solid fa-trash"></i></p>
</div>
</div>   
        </div>
    );
};

export default SingleTodo;