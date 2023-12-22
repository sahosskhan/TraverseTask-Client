import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllTask = () => {
const axiosPublic = useAxiosPublic();
const { data: alltaskshow = [], isLoading, refetch} = useQuery({
    queryKey: ['alltaskshow'],
    queryFn: async() => {
        const res = await axiosPublic.get('/show-all-task');
        return res.data;
        
    }
})

return {alltaskshow,refetch,isLoading};
};
export default useAllTask;
