import React from "react";
import Jobs from "../jobs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const JobListings = () => {
  console.log(Jobs);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {Jobs,map(KeyboardEvent,job => )}
          {/* <!-- Job Listing 2 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">
                  Front-End Engineer (React)
                </h3>
              </div>

              <div className="mb-5">
                Join our team as a Front-End Developer in sunny Miami, FL. We
                are looking for a motivated individual with a passion...
              </div>

              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex items-center space-x-2 text-orange-700 mb-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                  <span>Boston, MA</span>
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 3 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">React.js Developer</h3>
              </div>

              <div className="mb-5">
                Are you passionate about front-end development? Join our team in
                vibrant Brooklyn, NY, and work on exciting projects that make a
                difference...
              </div>

              <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex items-center space-x-2 text-orange-700 mb-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
                  <span>Boston, MA</span>
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
