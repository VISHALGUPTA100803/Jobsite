import { useState, useEffect } from "react";

import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs");
        const data = await res.json();

        console.log("Fetched Data:", data);
        setJobs(data);
      } catch (e) {
        console.log("Error fetching data", e);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;




// 1️⃣ useEffect(() => { ... }, []);

// useEffect(() => { 
//   // Effect logic here 
// }, []);
// 🔹 What is useEffect?

// useEffect is a React Hook that allows you to run side effects (e.g., fetching data, event listeners, etc.).
// It automatically runs after the component mounts.
// 🔹 Breaking it Down:

// Code	Meaning
// useEffect(	Calls the useEffect function.
// () => { ... }	The function that runs when the component mounts.
// , []);	Dependency array - [] means this runs only once.
// ✅ Key Takeaway: Since the dependency array is empty ([]), useEffect runs only once, just like componentDidMount in class components.

// 2️⃣ const fetchJobs = async () => { ... };

// const fetchJobs = async () => {
//   // Fetching logic
// };
// 🔹 What is This?

// This defines an async function fetchJobs inside useEffect.
// The async keyword allows us to use await inside the function.
// 🔹 Breaking it Down:

// Code	Meaning
// const fetchJobs =	Declares a constant function called fetchJobs.
// async () => {	Defines an asynchronous arrow function.
// };	Ends the function declaration.
// 3️⃣ try { ... } catch (e) { ... } finally { ... }

// try {
//   // Try to fetch data
// } catch (e) {
//   console.log("Error fetching data", e);
// } finally {
//   setLoading(false);
// }
// 🔹 What is try...catch...finally?

// Used for error handling.
// try {} → Runs the code inside it.
// catch (e) {} → Catches any error that occurs inside try {}.
// finally {} → Runs whether an error occurs or not.
// ✅ Key Takeaway:
// If the API call fails, catch logs the error, but finally still runs to stop the loading state.

// 4️⃣ const res = await fetch("http://localhost:8000/jobs");

// const res = await fetch("http://localhost:8000/jobs");
// 🔹 Breaking it Down:

// Code	Meaning
// const res =	Stores the API response in res.
// await	Waits for the API request to complete before moving to the next line.
// fetch("http://localhost:8000/jobs")	Sends a GET request to http://localhost:8000/jobs.
// ✅ Key Takeaway:

// await fetch(...) ensures the request completes before moving to the next step.
// If await wasn’t used, the function would continue before the request finishes.
// 5️⃣ const data = await res.json();

// const data = await res.json();
// 🔹 Breaking it Down:

// Code	Meaning
// const data =	Stores the JSON response in data.
// await	Waits for .json() to finish converting data.
// res.json();	Extracts JSON data from the API response.
// ✅ Key Takeaway:

// .json() is also asynchronous, so await is needed.
// 6️⃣ setJobs(data);

// setJobs(data);
// 🔹 What is setJobs(data)?

// This updates the jobs state with the fetched data.
// Since React state updates trigger a re-render, the new job data is displayed in the UI.
// ✅ Key Takeaway:

// This ensures React knows the data has changed, so it re-renders the component.
// 7️⃣ finally { setLoading(false); }

// finally {
//   setLoading(false);
// }
// 🔹 What is setLoading(false);?

// Stops showing the loading indicator after the fetch request is complete.
// ✅ Key Takeaway:

// Runs whether fetching succeeds or fails, ensuring loading is always false when the request completes.
// 8️⃣ fetchJobs(); (Calling the Function)

// fetchJobs();
// 🔹 Why Call fetchJobs() Here?

// This executes the fetchJobs function immediately when useEffect runs.
// ✅ Key Takeaway:

// Without this line, fetchJobs is defined but never executed.
// 9️⃣ }, []); (Dependency Array)
// js
// Copy
// Edit
// }, []);
// 🔹 Breaking it Down:

// Code	Meaning
// },	Closes the effect function.
// []);	Empty dependency array → Runs only once when the component mounts.
// ✅ Key Takeaway:

// [] prevents infinite re-fetching.
// If jobs was added ([jobs]), it would fetch every time jobs changes.

// When you start JSON Server using:

// npx json-server --watch jobs.json --port 8000
// It creates automatic RESTful routes based on the JSON file's structure.

// 📌 For your jobs.json:

// {
//   "jobs": [
//     { "id": "1", "title": "Senior React Developer", "location": "Boston, MA" },
//     { "id": "2", "title": "Front-End Engineer", "location": "Miami, FL" }
//   ]
// }
// JSON Server creates these endpoints:

// URL	Action
// http://localhost:8000/jobs	GET all jobs
// http://localhost:8000/jobs/1	GET job with id: "1"
// http://localhost:8000/jobs/2	GET job with id: "2"
// http://localhost:8000/jobs?_limit=2	GET first 2 jobs
// http://localhost:8000/jobs?location=Boston, MA	GET jobs in Boston
// http://localhost:8000/jobs/1 (POST, PUT, DELETE)	Modify or delete job id:1
// ✅ How Does JSON Server Know?

// It reads the jobs array from jobs.json.
// Each job object has an "id".
// When you request /jobs/1, JSON Server matches "id": "1" and returns that object.
