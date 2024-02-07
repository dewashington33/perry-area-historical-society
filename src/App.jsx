import { Flowbite } from "flowbite-react";
import FooterPAHS from "./components/FooterPAHS";
import HeaderPAHS from "./components/HeaderPAHS";
import TopicsFlowbite from "./pages/Topics";

function App() {
  return (
    <Flowbite>
      <div>
        <div>
          <HeaderPAHS />
        </div>
        <div>
          <TopicsFlowbite />
        </div>
        <div>
          <FooterPAHS />
        </div>
      </div>
    </Flowbite>
  );
}

export default App;
