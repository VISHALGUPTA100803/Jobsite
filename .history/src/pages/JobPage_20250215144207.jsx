import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const JobPage = () => {
    const [job,setJob] = useState(null);
    const [loading,setLoading] = useState(true);
    const {id} = useParams(job);
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetchJob(`/api/jobs/${id}`);
                const data = res.json();
                setJob(data);
    
            } catch (e){
                console.log(e);
    
            } finally {
                setLoading(false);
    
            }
        }
        fetchJob();
    },[]);
    
  return (
    loading ? <LoadingSpinner loading={loading} /> : <h1> hello </h1>
  )
}

export default JobPage