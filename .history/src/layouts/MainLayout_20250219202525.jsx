import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <
    </>
  );
};

export default MainLayout;

// What is <Outlet /> in React Router?
// 🔹 <Outlet /> is a placeholder for rendering child routes inside a parent route.
// 🔹 It is used when you have nested routes, and you want the parent layout to remain constant while dynamically rendering different pages inside it.

// 1️⃣ Breaking Down the Code

// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const MainLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet /> {/* Child route will be rendered here */}
//     </>
//   );
// };

// export default MainLayout;
// ✅ Explanation:

// Navbar remains constant across all pages.
// <Outlet /> is a placeholder that React Router replaces with the current child route's component.
// 2️⃣ How Does <Outlet /> Work in Your App?
// 📌 Your routes are defined like this in App.jsx:

// <Route path="/" element={<MainLayout />}>
//   <Route index element={<HomePage />} />
// </Route>
// 🔹 What happens here?

// The user visits / (homepage).
// MainLayout is loaded.
// Inside MainLayout, <Outlet /> is replaced with <HomePage />.
// 3️⃣ Example With Multiple Pages
// 📌 Define multiple routes inside MainLayout:

// <Route path="/" element={<MainLayout />}>
//   <Route index element={<HomePage />} />
//   <Route path="about" element={<AboutPage />} />
//   <Route path="contact" element={<ContactPage />} />
// </Route>
// 📌 How it works:

// URL	Rendered Components
// /	MainLayout → Navbar + HomePage
// /about	MainLayout → Navbar + AboutPage
// /contact	MainLayout → Navbar + ContactPage
// 🔹 Each page is inserted inside <Outlet />, but Navbar stays the same.

// 4️⃣ What If We Remove <Outlet />?

// const MainLayout = () => {
//   return (
//     <>
//       <Navbar />
//       {/* <Outlet /> is missing here! */}
//     </>
//   );
// };
// 🚨 Problem:

// Navbar will render, but no child pages will be displayed.
// When you visit /about or /contact, the page will be empty.
