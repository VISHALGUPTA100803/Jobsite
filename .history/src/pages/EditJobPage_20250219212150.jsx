import { useParams, useLoaderData, useNavigate } from "react-router-dom";

const EditJobPage = () => {
    const job = useLoaderData();
  return (
    <div>{job}</div>
  )
}

export default EditJobPage