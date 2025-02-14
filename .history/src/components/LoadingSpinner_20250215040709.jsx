import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({loading}) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
    />
  )
}

export default LoadingSpinner