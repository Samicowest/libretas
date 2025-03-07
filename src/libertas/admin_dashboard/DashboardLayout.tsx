import React from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Company } from "@/types/types";

interface DashboardLayoutProps {
  children: React.ReactNode;
  data: Company[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  data,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const dataSend: Company = data[0];

  return (
    <div className="h-screen flex">
      <HeadNavbar />
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-primary2 hidden md:flex text-white w-64 flex-shrink-0 transition-all duration-300",
          !isSidebarOpen && "w-0"
        )}
      >
        <div className="pt-24 p-4">
          <h2 className="text-white font-bold text-3xl py-8">
            {dataSend.name}
          </h2>
          <nav className="space-y-2">
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              About
            </a>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Team
            </a>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Projects
            </a>
            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
              Contact
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Menu />
          </button>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
