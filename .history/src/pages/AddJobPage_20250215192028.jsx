const AddJobPage = () => {
  return (
    <section C="bg-indigo-50">
      <div C="container m-auto max-w-2xl py-24">
        <div C="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form>
            <h2 C="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div C="mb-4">
              <label for="type" C="block text-gray-700 font-bold mb-2">
                Job Type
              </label>
              <select
                id="type"
                name="type"
                C="border rounded w-full py-2 px-3"
                required
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div C="mb-4">
              <label C="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                C="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div C="mb-4">
              <label
                for="description"
                C="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                C="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
              ></textarea>
            </div>

            <div C="mb-4">
              <label for="type" C="block text-gray-700 font-bold mb-2">
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                C="border rounded w-full py-2 px-3"
                required
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

            <div C="mb-4">
              <label C="block text-gray-700 font-bold mb-2">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                C="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 C="text-2xl mb-5">Company Info</h3>

            <div C="mb-4">
              <label for="company" C="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                C="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div C="mb-4">
              <label
                for="company_description"
                C="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                C="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
              ></textarea>
            </div>

            <div C="mb-4">
              <label
                for="contact_email"
                C="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                C="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div C="mb-4">
              <label
                for="contact_phone"
                C="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                C="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                C="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
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
