import { useDrag } from "react-dnd";

// eslint-disable-next-line react/prop-types
const SingleCompleted = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const  {taskTitle,taskDeadline,taskPriority,taskDetails} =items;

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

</div>
    </div>
    );
};

export default SingleCompleted;