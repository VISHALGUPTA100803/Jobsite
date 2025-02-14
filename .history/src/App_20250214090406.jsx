// const App = () => {
//   const name = "Vishal";
//   const x = 20;
//   const y = 30;
//   const names = ["Vishal", "mary", "joe", "sara"];
//   const loggedIn = true;
//   return (
//     <>
//       <div classNameName="text-5xl">App</div>
//       <p>hello {name}</p>
//       <p> sum of x and y is {x + y}</p>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//         {/*using instead of if we use ternary operator*/}
//         {loggedIn ? <h1>Logged In</h1> : <h1>logged out</h1>}
//         {loggedIn && <h1>Logged In</h1>}
//       </ul>
//     </>
//   );
// };

// export default App;
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route indepath='/' element={<MainLayout} >
  <Route index element={<HomePage />} />
  </Route>
)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
