import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const JobPage = () => {
    const [job,setJob] = useState(null);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
    
            } catch (e){
                console.log(e);
    
            } finally {
                setLoading(false);
    
            }
        };
        fetchJob();
    },[]);
    
  return (
    loading ? <LoadingSpinner loading={loading} /> : <h1> {job.title} </h1>
  )
};

export default JobPage