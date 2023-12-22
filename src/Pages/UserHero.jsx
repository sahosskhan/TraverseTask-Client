import { motion } from 'framer-motion';

const UserHero = () => {
    return (
    
                <div className="container px-6 py-6 mx-auto">
        <h1 className="text-2xl font-semibold text-center  capitalize lg:text-4xl text-white">Meet Our Tribe: <span className="text-fuchsia-500">Empowering Every Profession</span></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3">

        <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="w-full max-w-md px-8 py-4 mt-16 bg-black border-2 border-fuchsia-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-fuchsia-500 rounded-full " alt="Testimonial avatar" src="https://i.ibb.co/6r75GWG/image.png"/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-fuchsia-500 md:mt-0">Developers </h2>

    <p className="mt-2 text-base text-gray-200">Seamlessly manage coding tasks. Organize projects with agility. Collaborate efficiently with your team.</p>

</motion.div>

<div className="lg:flex hidden"></div>


<motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="w-full max-w-md px-8 py-4 mt-16 bg-black border-2 border-fuchsia-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-fuchsia-500 rounded-full " alt="Testimonial avatar" src="https://i.ibb.co/xCtVdfc/image.png"/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-fuchsia-500 md:mt-0">Corporate Professionals</h2>

    <p className="mt-2 text-base text-gray-200">Streamline project workflows effortlessly. Enhance team collaboration and communication.Boost overall productivity in your corporate endeavors.</p>

</motion.div>

<div className="lg:flex hidden"></div>

<motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="w-full max-w-md px-8 py-4 mt-16 bg-black border-2 border-fuchsia-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-fuchsia-500 rounded-full " alt="Testimonial avatar" src="https://i.ibb.co/D8J2jTY/image.png"/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-fuchsia-500 md:mt-0">Bankers</h2>

    <p className="mt-2 text-base text-gray-200">Navigate financial strategies with precision. Manage tasks and deadlines seamlessly. Ensure compliance and strategic financial planning.</p>

</motion.div>


<div className="lg:flex hidden"></div>


<motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="w-full max-w-md px-8 py-4 mt-16 bg-black border-2 border-fuchsia-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-fuchsia-500 rounded-full " alt="Testimonial avatar" src="https://i.ibb.co/BVmqQ7q/image.png"/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-fuchsia-500 md:mt-0">Creative Minds</h2>

    <p className="mt-2 text-base text-gray-200">Transform ideas into creative masterpieces. Organize and plan your creative process. Collaborate with fellow creatives effortlessly.</p>

</motion.div>

<div className="lg:flex hidden"></div>

<motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="w-full max-w-md px-8 py-4 mt-16 bg-black border-2 border-fuchsia-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-fuchsia-500 rounded-full " alt="Testimonial avatar" src="https://i.ibb.co/z6Cqkfj/image.png"/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-fuchsia-500 md:mt-0">Educators</h2>

    <p className="mt-2 text-base text-gray-200">Plan lessons, track student progress, and enhance learning experiences. Streamline educational tasks for a more organized approach. Foster collaboration among educators and students.</p>

</motion.div>

<div className="lg:flex hidden"></div>


<motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="w-full max-w-md px-8 py-4 mt-16 bg-black border-2 border-fuchsia-500 rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-fuchsia-500 rounded-full " alt="Testimonial avatar" src="https://i.ibb.co/6WJ8k0v/image.png"/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-fuchsia-500 md:mt-0">Doctors</h2>

    <p className="mt-2 text-base text-gray-200">Prioritize patient care with efficient task management. Organize healthcare processes and workflows. Ensure compliance and precision in healthcare tasks.</p>

</motion.div>

<div  className="lg:flex hidden"></div>

        </div>
    </div>
        
    );
};

export default UserHero;