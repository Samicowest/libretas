import React from "react";
import { SubNavbar } from "@/utils/SubNavbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className=" flex">
      <SubNavbar link="ventures" />

      {/* Main Content */}
      <div className="flex-1 max-w-5xl mx-auto overflow-auto">
        <main className="pt-20 p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
