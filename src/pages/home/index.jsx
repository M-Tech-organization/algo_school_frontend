import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Faq from "../../components/faq";
import Guarantee from "../../components/guarantee";
import Instruction from "../../components/instruction";
import Data from "../../components/data";
import Gallery from "../../components/gallery";
import Discount from "../../components/discount";
import Course from "../../components/course";
import FloatingMenu from "../../components/floating";
import Slider from "../../components/slider";
import Benefit from "../../components/benefit";
import Accosiate from "../../components/accosiate";
import Projects from "../../components/projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Instruction />
      <Gallery />
      <Projects />
      <Data />
      <Course />
      <Slider />
      <Discount />
      <Guarantee />
      <Benefit />
      <Accosiate />
      <Faq />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Home;
