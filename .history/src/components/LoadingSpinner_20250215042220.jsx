import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: '100px auto',
};

const LoadingSpinner = ({loading}) => {
  return (
    <ClipLoader
      color='#4338ca'
      loading={loading}
      cssOverride={override}
      size={150}
    />
  )
}

export default LoadingSpinner

// When using display: "block" in the cssOverride of ClipLoader:
// What Happens?
// The loader takes the full width of its parent.
// It ensures that margin: "100px auto" centers the loader horizontally.
// ✅ Without display: "block", the spinner behaves like an inline element, and margin: auto wouldn't work properly.