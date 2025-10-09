import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/register";
import ScrollToTop from "./pages/scrol-top";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
