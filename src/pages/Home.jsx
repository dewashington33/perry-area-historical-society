import Content from "../components/Content";
import TopicsTailblocks from "../pages/TopicsTailblocks";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <TopicsTailblocks />
      <Content />
    </div>
  );
}

export default Home;
