import HeaderPAHS from "./components/HeaderPAHS";
import FooterPAHS from "./components/FooterPAHS";

import Home from "./pages/Home"


function App() {
  return (
      <div>
        <div>
          <HeaderPAHS />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <FooterPAHS />
        </div>
      </div>
  );
}

export default App;
