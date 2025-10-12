import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/register";
import ScrollToTop from "./pages/scrol-top";
import Thanks from "./components/thanks";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Registration />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
};

export default App;
