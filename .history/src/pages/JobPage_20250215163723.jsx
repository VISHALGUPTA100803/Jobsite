//import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
//import LoadingSpinner from "../components/LoadingSpinner";

const JobPage = () => {

  const { id } = useParams();
  const job = useLoaderData();
  


  return <h1> {job.title} </h1>
};

const jobLoader = async ({params}) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export {JobPage as default, jobLoader};

// In JSX, you can write JavaScript inside the return() statement using {}


   // Fetching data using useEffect hook 
//     const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//       } catch (e) {
//         console.log(e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJob();
//   }, []);


