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
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// 1️⃣ First Line: const router = createBrowserRouter(...)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<MainLayout />}>
//       <Route index element={<HomePage />} />
//     </Route>
//   )
// );
// 🔹 const router = ...
// We declare a constant named router using const.
// This variable stores the routing configuration for our React app.
// 🔹 createBrowserRouter(...)
// This function creates a router for handling navigation in the browser (Client-Side Routing).
// It uses the HTML5 History API (pushState and replaceState) to update the URL without reloading the page.
// ✅ Example:

// When the user clicks a link to /about, React updates the page content without a full page refresh.
// 🔹 createRoutesFromElements(...)
// This function converts React elements (<Route>) into a format that createBrowserRouter can understand.
// ✅ Why use this?

// It allows us to define routes using JSX (<Route>), which is more readable and intuitive.
// 🔹 <Route path="/" element={<MainLayout />}>
// Defines a route with:
// path="/" → This means when the user visits / (homepage), React should render <MainLayout />.
// element={<MainLayout />} → This tells React that when the route matches /, it should render the MainLayout component.
// ✅ Why wrap everything in <MainLayout />?

// This allows us to have a common layout (e.g., Navbar, Footer) while displaying different pages inside it.
// 🔹 <Route index element={<HomePage />} />
// Defines a nested route inside / that loads HomePage.
// ✅ Breaking it Down:

// index → This means this is the default child route of /.
// Instead of writing <Route path="" element={<HomePage />}>, we use index.
// If we go to /, React will show <HomePage /> inside <MainLayout />.
// 📌 Final Breakdown of router
// When the user visits /:
// MainLayout is loaded.
// Inside MainLayout, Outlet is replaced with HomePage.
// 2️⃣ Second Part: const App = () => { return <RouterProvider router={router} />; }

// const App = () => {
//   return <RouterProvider router={router} />;
// };
// 🔹 const App = () => {...}
// Declares the App component as an arrow function.
// 🔹 <RouterProvider router={router} />
// This activates routing in our app using the router we defined earlier.
// ✅ Breaking it Down:

// <RouterProvider /> is a component from React Router that makes routing available throughout the app.
// The router prop (router={router}) tells RouterProvider to use the router we created.

//1️⃣ <Route /> - Defines Individual Routes
// The <Route /> component is used to define a URL path and specify which component should be displayed when the user visits that path.
// 2️⃣ createBrowserRouter() - Creates a Router Object
// createBrowserRouter() is used in React Router v6.4+ to create a client-side router.

// const router = createBrowserRouter(routes);
// ✅ Example

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
// ]);
// How It Works
// It creates a router object that manages navigation in the app.
// This router listens for URL changes and renders the correct component.
// 🚀 Benefit:
// Unlike the old <BrowserRouter>, createBrowserRouter() allows built-in data fetching and error handling.

// 3️⃣ createRoutesFromElements() - Converts JSX Routes into an Object
// Instead of defining routes as an array (like in createBrowserRouter([])), we can write routes in JSX using createRoutesFromElements().
// ✅ What It Does

// Converts JSX <Route> elements into a structured route object.
// This route object is then passed to createBrowserRouter().
// 🚀 Why Use It?

// Easier to read & write compared to defining an array manually.
// Supports nested routes naturally.

// 4️⃣ <RouterProvider /> - Enables Routing in the App
// <RouterProvider /> is used to activate routing and provide the router to the entire app.
// How It Works
// Takes the router (created by createBrowserRouter) and enables navigation across the app.
