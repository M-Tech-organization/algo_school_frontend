import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Faq from "../../components/faq";
import Guarantee from "../../components/guarantee";
import Result from "../../components/result";
import Instruction from "../../components/instruction";
import Information from "../../components/information";
import Data from "../../components/data";
import Gallery from "../../components/gallery";
import Discount from "../../components/discount";
import Course from "../../components/course";
import Explain from "../../components/explain";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Result />
      <Instruction/>
      <Information/>
      <Data/>
      <Gallery/>
      <Explain/>
      <Course/>
      <Discount/>
      <Guarantee />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
