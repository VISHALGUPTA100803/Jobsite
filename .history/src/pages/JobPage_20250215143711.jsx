import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const JobPage = () => {
    const [job,setJob] = useState(null);
    const [loading,setLoading] = useState(true);
    const {id} = useParams(job);
    const fetchJob = async ()
  return (
    loading ? <LoadingSpinner loading={loading} /> : <h1> hello </h1>
  )
}

export default JobPage