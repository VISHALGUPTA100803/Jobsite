import { Outlet } from "react-router-dom";
import Navbar from ''

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
