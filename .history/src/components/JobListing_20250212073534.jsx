import React from "react";

const JobListing = ({job}) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job</div>
          <h3 className="text-xl font-bold">Senior React Developer</h3>
        </div>

        <div className="mb-5">
          We are seeking a talented Front-End Developer to join our team in
          Boston, MA. The ideal candidate will have strong skills in HTML, CSS,
          and JavaScript...
        </div>

        <h3 className="text-indigo-500 mb-2">$70 - $80K / Year</h3>

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
  );
};

export default JobListing;
