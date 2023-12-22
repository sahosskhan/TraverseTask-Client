import Complete from "./TaskManage/Complete";
import OnGoing from "./TaskManage/OnGoing";
import ToDo from "./TaskManage/ToDo";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const AllTask = () => {
    return (
        <>
         <DndProvider backend={HTML5Backend}>
<div className="flex lg:flex-row flex-col gap-10 min-h-screen container mx-auto">
<ToDo/>
<OnGoing/>
<Complete/>
</div>
</DndProvider>
        </>
    );
};

export default AllTask;