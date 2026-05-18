import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Celebration from "./pages/Celebration.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/celebration" element={<Celebration />} />
    </Routes>
  );
};

export default App;
