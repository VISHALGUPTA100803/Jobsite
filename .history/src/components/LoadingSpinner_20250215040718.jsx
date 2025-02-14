import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpinner = ({loading}) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      c
    />
  )
}

export default LoadingSpinner