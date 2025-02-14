import { Outlet } from "react-router-dom";
import Navbar from '../components/N'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
