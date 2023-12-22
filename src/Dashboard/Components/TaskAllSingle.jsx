import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever, MdStart } from "react-icons/md";


const TaskAllSingle = ({items}) => {
   const {taskTitle, taskDetails   }=items;
    return (
        <div>
            <div className="bg-white p-7 rounded-xl my-5">
<div className="mb-4">
<h1 className="lg:text-3xl text-2xl text-fuchsia-500">{taskTitle}</h1>
<p className="lg:text-xl text-lg my-3">{taskDetails}</p>
</div>
<div className="flex lg:flex-row flex-col gap-4">

<button className="px-5 uppercase  py-2 rounded-lg text-center text-lg font-bold bg-fuchsia-500 flex gap-x-[5px]"><span>Start Task</span><MdStart className="mt-[2px] text-2xl" /></button> 
<button className="px-5 uppercase   py-2 rounded-lg text-center text-lg font-bold bg-fuchsia-500 flex gap-x-[5px]"><span>Edit Task</span><FaEdit className="mt-[4px] t" /></button> 
<button className="px-5 uppercase   py-2 rounded-lg text-center text-lg font-bold bg-fuchsia-500 flex gap-x-[2px]"><span>Remove Task</span><MdOutlineDeleteForever className="mt-[3px] text-xl" /></button> 
</div>


</div>
        </div>
    );
};

export default TaskAllSingle;