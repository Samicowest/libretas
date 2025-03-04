import React from "react";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    active?: boolean;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="px-8 py-4 bg-white border-b border-[#e0e6ed] flex items-center">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-[#bdc3c7] mx-2">›</span>}
          <span
            className={`text-sm ${
              item.active ? "text-[#2c3e50] font-medium" : "text-[#7f8c8d]"
            }`}
          >
            {item.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
