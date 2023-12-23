import { useEffect, useState } from "react";
import useAllTask from "../Hooks/useAllTask";
import useUser from "../Hooks/userUser";
import { MdPeople, MdTaskAlt } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PieChart } from "react-minimal-pie-chart";
import { MutatingDots } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";

const Report = () => {
    const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 
  
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const formattedTime = dateTime.toLocaleTimeString();

const {userList} =useUser();
  const {alltaskshow, refetch,isLoading}=useAllTask();
  refetch();
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




  const OnGoTask = alltaskshow.filter(task => task.taskStatus === "ongoing");
  const DoneTask = alltaskshow.filter(task => task.taskStatus === "completed");

console.log(alltaskshow.length)
console.log(OnGoTask.length)
console.log(DoneTask.length)
console.log(userList.length)

  
    return (
        <div>
           <Helmet>
        <title>Statistics | TraverseTask | Online Task Management Platform</title>
      </Helmet>
<div className="flex justify-center items-center">
<div className="bg-white rounded-r-none rounded-lg p-4">
         <h1 className="text-3xl  text-black">Our Live  Statistics & Reports Of <br /> </h1>
         </div>
         <div className="bg-fuchsia-500 rounded-l-none rounded-lg p-4">
         <h1 className="text-3xl  text-black">{formattedDate},{formattedTime}  <br /> </h1>
         </div>
</div>

<section className="p-6 my-6 dark:bg-gray-800 text-gray-100">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">

		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-fuchsia-500 text-gray-100 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-fuchsia-400">
            <MdPeople className="text-5xl" />
			</div>
			<div className="flex flex-row gap-2  justify-center items-center">
				<p className="text-3xl font-semibold ">{userList.length}</p>
				<p className="capitalize text-3xl">Active Users</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-fuchsia-500 text-gray-100 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-fuchsia-400">
            <FaTasks className="text-5xl" />
			</div>
			<div className="flex flex-row gap-2  justify-center items-center">
				<p className="text-3xl font-semibold ">{alltaskshow.length}</p>
				<p className="capitalize text-3xl">Task Added</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-fuchsia-500 text-gray-100 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-fuchsia-400">
            <MdPeople className="text-5xl" />
			</div>
			<div className="flex flex-row gap-2  justify-center items-center">
				<p className="text-3xl font-semibold ">{OnGoTask.length}</p>
				<p className="capitalize text-3xl">Task Pending</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-fuchsia-500 text-gray-100 ">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-fuchsia-400">
            <MdTaskAlt className="text-5xl" />
			</div>
			<div className="flex flex-row gap-2  justify-center items-center">
				<p className="text-3xl font-semibold ">{DoneTask.length}</p>
				<p className="capitalize text-3xl">Task Done</p>
			</div>
		</div>









		
	</div>
</section>





<div className="container mx-auto">
<h1 className="text-fuchsia-500 text-3xl mb-6 text-center">Task Statistics Report Pie Chart</h1>

    <div className="flex lg:flex-row flex-col gap-5">
<h1 className="bg-[#E38627] rounded-lg px-6 py-1">Total Task</h1>
<h1 className="bg-[#C13C37] rounded-lg px-6 py-1">Pending Task</h1>
<h1 className="bg-[#e2b72b] rounded-lg px-6 py-1">Completed Task</h1> 
    </div>
<PieChart className="lg:-my-[500px] -my-20" animate={true} animationDuration="1500" radius="17"
  data={[
    { title: 'Total Task', value: alltaskshow.length, color: '#E38627' },
    { title: 'Pending Task', value: OnGoTask.length, color: '#C13C37' },
    { title: 'Completed Task', value: DoneTask.length, color: '#e2b72b' },
  ]}
/>;
</div>




            
        </div>
    );
};

export default Report;