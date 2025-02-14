import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold"> {job.title}</h3>
        </div>
        <div className="mb-2">{description}</div>
        {/* <button onClick={console.log("Button Clicked!")}>Click Me</button>
        incorrect way (executes immediately): This runs console.log()
        immediately when the component renders instead of waiting for a click. */}
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </button>
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

// onClick is a built-in event handler in React that listens for click events on an element (like a button).
// Example:
// <button onClick={handleClick}>Click Me</button>
// Here, when the button is clicked, it calls the handleClick function.
// Breaking Down Your Code
// onClick={() => setShowFullDescription((prevState) => !prevState)}
// 1️⃣ onClick={() => ... } (Arrow Function)
// onClick expects a function, not a direct function call.
// If you wrote:
// onClick={setShowFullDescription((prevState) => !prevState)}
// ❌ This is incorrect because it would execute immediately when the component renders, instead of waiting for a click.
// Solution:

// onClick={() => setShowFullDescription((prevState) => !prevState)}
// ✅ Now, setShowFullDescription only runs when the button is clicked.
// 2️⃣ setShowFullDescription((prevState) => !prevState)
// setShowFullDescription updates the state in React.
// The previous state (prevState) is passed to the function.
// !prevState means toggle the value:
// If prevState is false → it becomes true.
// If prevState is true → it becomes false.
