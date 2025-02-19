//import { useState, useEffect } from "react";
//import LoadingSpinner from "../components/LoadingSpinner";
import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  // fetching data using Data Loader
  const job = useLoaderData();
  // 3️⃣ What is useLoaderData()?
  //Once the loader fetches data, useLoaderData() retrieves the preloaded data inside the component.

  return (
    <>
      <section>
        <div c="container m-auto py-6 px-6">
          <a
            href="/jobs.html"
            class="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
          </a>
        </div>
      </section>

      <section class="bg-indigo-50">
        <div class="container m-auto py-10 px-6">
          <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div class="text-gray-500 mb-4">Full-Time</div>
                <h1 class="text-3xl font-bold mb-4">Senior React Developer</h1>
                <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p class="text-orange-700">Boston, MA</p>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>

                <p class="mb-4">
                  We are seeking a talented Front-End Developer to join our team
                  in Boston, MA. The ideal candidate will have strong skills in
                  HTML, CSS, and JavaScript, with experience working with modern
                  JavaScript frameworks such as React or Angular.
                </p>

                <h3 class="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                <p class="mb-4">$70k - $80K / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-6">Company Info</h3>

                <h2 class="text-2xl">NewTek Solutions</h2>

                <p class="my-2">
                  NewTek Solutions is a leading technology company specializing
                  in web development and digital solutions. We pride ourselves
                  on delivering high-quality products and services to our
                  clients while fostering a collaborative and innovative work
                  environment.
                </p>

                <hr class="my-4" />

                <h3 class="text-xl">Contact Email:</h3>

                <p class="my-2 bg-indigo-100 p-2 font-bold">
                  contact@newteksolutions.com
                </p>

                <h3 class="text-xl">Contact Phone:</h3>

                <p class="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p>
              </div>

              {/* <!-- Manage --> */}
              <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                <a
                  href="/add-job.html"
                  class="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </a>
                <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
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
