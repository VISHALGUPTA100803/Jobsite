import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = ({ updateTrigger }) => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} trigger={updateTrigger} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
