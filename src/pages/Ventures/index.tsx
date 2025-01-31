import DashboardLayout from "./DashboardLayout";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
import Section from "./Section";
import Products from "./Products";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { companiesData } from "@/utils/data";

const DashboardPage = () => {
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();

  const data = companiesData.filter((e) => e.companyId === id);

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling
    });
  }, [pathname]);
  return (
    <DashboardLayout data={data}>
      <AboutSection />
      <Section />
      <TeamSection />
      <Products />
    </DashboardLayout>
  );
};

export default DashboardPage;
