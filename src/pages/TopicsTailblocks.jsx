const topicsData = await import("../data/topicsData.json");
import TopicCardTailblocks from "../components/TopicCardTailblocks";


function TopicsTailblocks() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <header className="bg-stone-300 h-44 leading-10">
        <div className="mx-auto text-center box-border block leading-10 pb-11 pt-12 pl-5 pr-5 relative">
          <h2 className="text-blue-900 text-4xl font-cormorant font-semibold">
            Browse by Topic
          </h2>
          <h3 className="text-blue-900 text-2xl font-cormorant font-light">
            categorized by topic
          </h3>
        </div>
      </header>
      <div className="container px-5 py-24 mx-auto">
        <ul className="flex flex-wrap -m-4">
          {topicsData.topics.map((topic) => (
            <TopicCardTailblocks
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

export default TopicsTailblocks;
