import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: ''
}

const LoadingSpinner = ({loading}) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
    />
  )
}

export default LoadingSpinner