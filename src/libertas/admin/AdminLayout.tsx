import HeadNavbar from "./components/HeadNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <HeadNavbar />
      <div className="p-4 w-full bg-[#f5f7fa]">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
