import { useEffect, useState } from "react";
import TopicCard from "../components/TopicCard";
import { loadTopicsData } from "../utils/LoadTopicsData";

function Topics() {
  const [topicsData, setTopicsData] = useState({ topics: [] });
  console.log(topicsData);
  useEffect(() => {
    loadTopicsData().then((data) => setTopicsData(data));
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <header className="bg-stone-300 h-44 leading-10 w-full">
        <div className="mx-auto text-center box-border leading-10 pb-11 pt-12 pl-5 pr-5 relative flex flex-col justify-center h-full max-w-4xl">
          <h2 className="text-blue-900 text-4xl font-cormorant font-semibold">
            Browse by Topic
          </h2>
          <h3 className="text-blue-900 text-2xl font-cormorant font-light">
            categorized by topic
          </h3>
        </div>
      </header>
      <div className="container mx-auto max-w-4xl px-5 py-24 flex justify-center">
        <ul className="flex flex-wrap -m-4 justify-center">
          {topicsData.topics.map((topic) => (
            <TopicCard
              key={topic.topicID}
              topicID={topic.topicID}
              title={topic.title}
              topicSrc={topic.topicSrc}
              imgSrc={topic.imgSrc}
              subTopics={topic.subTopics}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Topics;
