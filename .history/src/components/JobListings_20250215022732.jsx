import {useState,useEffect} from "react";

import JobListing from "./JobListing";

const JobListings = ({ isHome = false }) => {
  const []
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListing.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
          ;
        </div>
      </div>
    </section>
  );
};

export default JobListings;




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
