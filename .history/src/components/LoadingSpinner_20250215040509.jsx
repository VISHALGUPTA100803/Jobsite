import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
  return (
    <ClipLoader
      size={30}
      color={"#123abc"}
      loading={true}
    />
  )
}

export default LoadingSpinner