const topicsData = await import("../data/topicsData.json");
import TopicCard from "../components/TopicCard";

const TopicsFlowbite = () => {
  return (
    <section className="bg-gray-100">
      <header className="bg-stone-200 h-44 leading-10">
        <div className="mx-auto text-center box-border block leading-10 pb-11 pt-12 pl-5 pr-5 relative">
          <h2 className="text-4xl font-cormorant font-semibold">
            Browse by Topic
          </h2>
          <h3 className="text-2xl font-cormorant font-light">
            categorized by topic
          </h3>
        </div>
      </header>
      <div className="min-w-10 mx-auto">
        <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
          {topicsData.topics.map((topic) => (
            <TopicCard
              key={topic.topicID}
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
};
export default TopicsFlowbite;
