import Footer from "@/myComponents/Footer";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
import { ThreeDCardDemo } from "@/myComponents/ThreeDCardDemo";
import { LampDemo } from "@/myComponents/LampDemo";

const Home = () => {
  return (
    <div>
      <LampDemo />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </div>
  );
};

export default Home;
