import { useState } from "react";
import { useNavigate } from "react-router-dom";
// This hook allows the programmer to navigate the user to a new page without the user interacting.
import { toast } from "react-toastify";
const AddJobPage = ({addJobSubmit}) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const newJob = {
        title,
        type,
        description,
        location,
        salary,
        company: {
          name: companyName,
          description: companyDescription,
          contactEmail,
          contactPhone,
        },
      };
      const result = await addJobSubmit(newJob);
      if (result.success) {
        toast.success('Job added successfully!');
        navigate('/jobs');
      } else {
        toast.error(result.error || 'Failed to add job');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
    
    
  };
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="salary"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-gray-700 font-bold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
                // the form onSubmit function will be automatically trigerred after clicking this button
                //The type="submit" attribute designates the button as a submit button. When clicked, it triggers the submission of the form that the button is a part of.
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;

// e (short for event) is the event object that gets passed automatically to the onChange function when the user interacts with the <select> element.
// value={type} → This makes the <select> a controlled component, meaning its value is controlled by React state (type).
// onChange={(e) => setType(e.target.value)}:
// Whenever the user selects an option, this function runs.
// e.target.value gets the selected value.
// setType(e.target.value) updates the type state.

// onChange={(e) => setTitle(e.target.value)} →
// Runs when the user types in the input field.
// e.target.value contains the current input text.
// setTitle(e.target.value) updates the title state with the new input.

// 1. type
// Used for: Specifying the type of input field.
// Applies to: <input> elements.
// Examples:

// <input type="text" />
// <input type="email" />
// <input type="password" />
// <input type="checkbox" />
// Purpose:
// Defines what kind of data the field should accept.
// Affects input behavior (e.g., type="email" enforces an email format).
// Determines how browsers handle validation (e.g., type="number" only allows numbers).
// 2. id
// Used for: Uniquely identifying an element in the HTML document.
// Applies to: Any HTML element (<input>, <div>, <label>, etc.).
// Examples:

// <input type="text" id="username" />
// <label for="username">Username</label>
// Purpose:
// The id must be unique within a document.
// Helps JavaScript or CSS target specific elements.
// Used for accessibility: <label for="id"> links a label to an input field.
// 3. name
// Used for: Identifying the form field when data is submitted.
// Applies to: Form elements (<input>, <select>, <textarea>).
// Examples:

// <input type="text" name="email" />
// Purpose:
// Used when submitting a form: the name acts as the key in key-value pairs sent to the backend.
// Unlike id, name does not have to be unique.
// Useful in grouping inputs (e.g., radio buttons with the same name belong to the same group).
// 4. value
// Used for: Setting the default or current value of an input field.
// Applies to: <input>, <option> in <select>, <textarea>.
// Examples:

// <input type="text" value="John Doe" />
// <input type="checkbox" value="yes" />
// <select>
//   <option value="Full-Time">Full-Time</option>
// </select>
// Purpose:
// Defines the pre-filled value in text inputs.
// For checkboxes and radio buttons, the value is sent when selected.
// In <select>, it represents the option’s actual value.
