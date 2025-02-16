import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const JobListing = ({ job }) => {
    const [showFullDescription,setshowFullDescription] = useState(false);
    let description = job.description
    if(!showFullDescription) {
        description = description.substring(0,90) + "...";
    }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold"> {job.title}</h3>
        </div>
 
        <div className="mb-5">{description}</div>
        button.text-indigo


        <h3 className="text-indigo-500 mb-2"> {job.salary} </h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center space-x-2 text-orange-700 mb-3">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
            <span> {job.location} </span>
          </div>

          <a
            href={`/job/${job.id}`}
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
