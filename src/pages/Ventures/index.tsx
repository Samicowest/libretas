import DashboardLayout from "./DashboardLayout";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";
// import Section from "./Section";
// import Products from "./Products";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DashboardPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling
    });
  }, [pathname]);
  return (
    <DashboardLayout>
      <AboutSection />
      {/* <Section /> */}
      <TeamSection />
      {/* <Products /> */}
    </DashboardLayout>
  );
};

export default DashboardPage;
