//import { useState, useEffect } from "react";
//import LoadingSpinner from "../components/LoadingSpinner";
import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  // fetching data using Data Loader
  const job = useLoaderData();

  return <h1> {job.title} </h1>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };

// import { useParams, useLoaderData } from "react-router-dom";
// 🔹 Imports:

// useParams → Extracts route parameters (id) from the URL.
// useLoaderData → Retrieves data preloaded by the loader function` before rendering the component.

// const JobPage = () => {
//   const { id } = useParams();
//   const job = useLoaderData();
// 🔹 Component Definition:

// const { id } = useParams();

// Extracts id from the URL (/jobs/:id).
// If the user visits /jobs/3, then id = "3".
// const job = useLoaderData();

// Fetches job data before the component renders (using loader).
// job contains the job details (title, description, etc.).
const jobLoader = async ({ params }) => {
    🔹 Function Definition:
    
    jobLoader is an async function that loads job data before rendering JobPage.
    { params } → Contains URL parameters (params.id is the job ID).
    jsx
    Copy
    Edit
      const res = await fetch(`/api/jobs/${params.id}`);
    🔹 Fetching Data:
    
    Calls the API to get job details.
    If params.id = 3, it fetches:
    bash
    Copy
    Edit
    GET /api/jobs/3
    jsx
    Copy
    Edit
      const data = await res.json();
    🔹 Extracts JSON Response:
    
    Converts API response into a JavaScript object (data).
    jsx
    Copy
    Edit
      return data;
    };
    🔹 Returns the Job Data:
    
    The returned data is automatically passed to useLoaderData() in JobPage.jsx.
    jsx
    Copy
    Edit
    export { JobPage as default, jobLoader };
    🔹 Exports:
    
    export { JobPage as default } → Allows JobPage to be imported directly.
    export { jobLoader } → Allows jobLoader to be imported separately.





// useParams is a React Router hook that allows you to access dynamic URL parameters in a component.
// When you define a route with a parameter, like:
// <Route path="/user/:id" element={<UserPage />} />
// 👉 If the user visits /user/123, the URL parameter (id) is 123.
// Inside UserPage:
// const { id } = useParams(); // id = "123"
// console.log(id); // Logs "123"

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
