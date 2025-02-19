import { useParams, useLoaderData, useNavigate } from "react-router-dom";

const EditJobPage = () => {
    const job = useLoaderData();
  return (
    <div>{job.ti}</div>
  )
}

export default EditJobPage