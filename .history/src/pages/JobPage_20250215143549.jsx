import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const JobPage = () => {
    const [job,setJob] = useState(null);
    const [loading,setLoading] = useState(true);
  return (
    loading ? <LoadingSpinner loading={loading} /> : {
        <h1
    }
  )
}

export default JobPage