import JobListings from "../components/JobListings";
const JobsPage = ({trigger}) => {
  return (
    <section>
      <div className="bg-blue-50 px-4 py-6">
        <JobListings trigger={trigger} />
      </div>
    </section>
  );
};

export default JobsPage;
