import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/register";
import ScrollToTop from "./pages/scrol-top";
import Thanks from "./components/thanks";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Registration />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
};

export default App;
