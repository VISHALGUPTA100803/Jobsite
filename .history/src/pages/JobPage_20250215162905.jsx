//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const JobPage = () => {

  const { id } = useParams();
  // useParams is a React Router hook that allows you to access dynamic URL parameters in a component.
  // When you define a route with a parameter, like:
  // <Route path="/user/:id" element={<UserPage />} />
  // 👉 If the user visits /user/123, the URL parameter (id) is 123.
  // Inside UserPage:
  // const { id } = useParams(); // id = "123"
  // console.log(id); // Logs "123"

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

  return loading ? (
    <LoadingSpinner loading={loading} />
  ) : (
    <h1> {job.title} </h1>
  );
};

const jobLoader = async ()

export default JobPage;

// In JSX, you can write JavaScript inside the return() statement using {}


