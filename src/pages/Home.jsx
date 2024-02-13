import Content from "../components/Content";
import Hero from "../components/Hero";
import Articles from "../pages/Articles";
import Topics from "../pages/Topics";

function Home() {
  return (
    <div>
      <Hero />
      <Topics />
      <Content />
      <Articles />
    </div>
  );
}

export default Home;
