import HeaderPAHS from "./components/HeaderPAHS";
import FooterPAHSTailblocks from "./components/FooterPAHSTailblocks";

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
          <FooterPAHSTailblocks />
        </div>
      </div>
  );
}

export default App;
