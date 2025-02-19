//import { useState, useEffect } from "react";
//import LoadingSpinner from "../components/LoadingSpinner";
import { useParams, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const JobPage = () => {
  const { id } = useParams();
  // fetching data using Data Loader
  const job = useLoaderData();
  // 3️⃣ What is useLoaderData()?
  //Once the loader fetches data, useLoaderData() retrieves the preloaded data inside the component.

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" /> Back to Job
            Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
            {/* The <main> tag in HTML represents the main content of a webpage that is unique to that document. It is a semantic element introduced in HTML5 and helps improve accessibility and SEO. */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex items-center justify-center md:justify-start">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-lg text-orange-700 mr-2"
                  />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{job.salary} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
            {/* The <aside> tag is a semantic HTML5 element used to define content that is related to the main content but not essential to it. It is typically used for sidebars, widgets, advertisements, or additional information. */}
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to="/add-job.html"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

// The loader function fetches data and return data sends it to React Router.
//React Router stores this data and makes it available via useLoaderData() inside the component.

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
// const jobLoader = async ({ params }) => {
//     🔹 Function Definition:

//     jobLoader is an async function that loads job data before rendering JobPage.
//     { params } → Contains URL parameters (params.id is the job ID).

//       const res = await fetch(`/api/jobs/${params.id}`);
//     🔹 Fetching Data:

//     Calls the API to get job details.
//     If params.id = 3, it fetches:

//     GET /api/jobs/3

//       const data = await res.json();
//     🔹 Extracts JSON Response:

//     Converts API response into a JavaScript object (data).

//       return data;
//     };
//     🔹 Returns the Job Data:

//     The returned data is automatically passed to useLoaderData() in JobPage.jsx.

//     export { JobPage as default, jobLoader };
//     🔹 Exports:

//     export { JobPage as default } → Allows JobPage to be imported directly.
//     export { jobLoader } → Allows jobLoader to be imported separately.

// import JobPage, { jobLoader } from "./pages/JobPage";
// 🔹 Imports:

// JobPage → The Job details page component.
// jobLoader → A function that fetches job data before rendering the page.
// <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
// 🔹 What Happens Here?

// Defines a dynamic route (/jobs/:id).
// element={<JobPage />} → Loads the JobPage component.
// loader={jobLoader} → Runs jobLoader before rendering, fetching job data.
// 🔹 Example:

// If the user visits /jobs/3:
// React Router runs jobLoader first.
// Then, it renders JobPage with the fetched data.

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
