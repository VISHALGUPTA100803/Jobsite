// const App = () => {
//   const name = "Vishal";
//   const x = 20;
//   const y = 30;
//   const names = ["Vishal", "mary", "joe", "sara"];
//   const loggedIn = true;
//   return (
//     <>
//       <div CLAName="text-5xl">App</div>
//       <p>hello {name}</p>
//       <p> sum of x and y is {x + y}</p>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//         {/*using instead of if we use ternary operator*/}
//         {loggedIn ? <h1>Logged In</h1> : <h1>logged out</h1>}
//         {loggedIn && <h1>Logged In</h1>}
//       </ul>
//     </>
//   );
// };

// export default App;
import React from "react";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
        <nav CLA="bg-indigo-700 border-b border-indigo-500">
      <div CLA="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div CLA="flex h-20 items-center justify-between">
          <div
            CLA="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}
            <a CLA="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                CLA="h-10 w-auto"
                src="images/logo.png"
                alt="React Jobs"
              />
              <span CLA="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </a>
            <div CLA="md:ml-auto">
              <div CLA="flex space-x-2">
                <a
                  href="/index.html"
                  CLA="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="/jobs.html"
                  CLA="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</a
                >
                <a
                  href="/add-job.html"
                  CLA="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* <!-- Hero --> */}
    <section CLA="bg-indigo-700 py-20 mb-4">
      <div
        CLA="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div CLA="text-center">
          <h1
            CLA="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Become a React Dev
          </h1>
          <p CLA="my-4 text-xl text-white">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Developers and Employers --> */}
    <section CLA="py-4">
      <div CLA="container-xl lg:container m-auto">
        <div CLA="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div CLA="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 CLA="text-2xl font-bold">For Developers</h2>
            <p CLA="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <a
              href="/jobs.html"
              CLA="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </a>
          </div>
          <div CLA="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 CLA="text-2xl font-bold">For Employers</h2>
            <p CLA="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              CLA="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Browse Jobs --> */}
    <section CLA="bg-blue-50 px-4 py-10">
      <div CLA="container-xl lg:container m-auto">
        <h2 CLA="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div CLA="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          <div CLA="bg-white rounded-xl shadow-md relative">
            <div CLA="p-4">
              <div CLA="mb-6">
                <div CLA="text-gray-600 my-2">Full-Time</div>
                <h3 CLA="text-xl font-bold">Senior React Developer</h3>
              </div>

              <div CLA="mb-5">
               We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...
              </div>

              <h3 CLA="text-indigo-500 mb-2">$70 - $80K / Year</h3>

              <div CLA="border border-gray-100 mb-5"></div>

              <div CLA="flex flex-col lg:flex-row justify-between mb-4">
                <div CLA="text-orange-700 mb-3">
                  <i CLA="fa-solid fa-location-dot text-lg"></i>
                  Boston, MA
                </div>
                <a
                  href="job.html"
                  CLA="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 2 --> */}
          <div CLA="bg-white rounded-xl shadow-md relative">
            <div CLA="p-4">
              <div CLA="mb-6">
                <div CLA="text-gray-600 my-2">Remote</div>
                <h3 CLA="text-xl font-bold">Front-End Engineer (React)</h3>
              </div>

              <div CLA="mb-5">
               Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion...
              </div>

              <h3 CLA="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div CLA="border border-gray-100 mb-5"></div>

              <div CLA="flex flex-col lg:flex-row justify-between mb-4">
                <div CLA="text-orange-700 mb-3">
                  <i CLA="fa-solid fa-location-dot text-lg"></i>
                  Miami, FL
                </div>
                <a
                  href="job.html"
                  CLA="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 3 --> */}
          <div CLA="bg-white rounded-xl shadow-md relative">
            <div CLA="p-4">
              <div CLA="mb-6">
                <div CLA="text-gray-600 my-2">Remote</div>
                <h3 CLA="text-xl font-bold">React.js Developer</h3>
              </div>

              <div CLA="mb-5">
                Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference...
              </div>

              <h3 CLA="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div CLA="border border-gray-100 mb-5"></div>

              <div CLA="flex flex-col lg:flex-row justify-between mb-4">
                <div CLA="text-orange-700 mb-3">
                  <i CLA="fa-solid fa-location-dot text-lg"></i>
                  Brooklyn, NY
                </div>
                <a
                  href="job.html"
                  CLA="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section CLA="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        CLA="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  );
};

export default App;
