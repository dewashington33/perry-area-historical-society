import { Route, Routes } from "react-router-dom";
import FooterPAHS from "./components/FooterPAHS";
import HeaderPAHS from "./components/HeaderPAHS";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Topics from "./pages/Topics";

const homeRoute =
  import.meta.env.MODE === "production"
    ? "/perry-area-historical-society"
    : "/";

function App() {
  return (
    <div>
      <HeaderPAHS />
      <Routes>
        <Route path={homeRoute} element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <FooterPAHS />
    </div>
  );
}

export default App;
