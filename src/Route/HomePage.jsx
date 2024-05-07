import Footer from "@/myComponents/Footer";
import Header from "@/myComponents/header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      
      <Outlet />
      <Footer />

    </div>
  );
};

export default HomePage;
