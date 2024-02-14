import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Articles from "./pages/Articles";
import HeaderPAHS from "./components/HeaderPAHS";
import FooterPAHS from "./components/FooterPAHS";


function App() {
  return (
    <div>
    <HeaderPAHS />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <FooterPAHS />
      </div>
  );

}

export default App;
