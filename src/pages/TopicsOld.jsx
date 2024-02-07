// Topics.jsx
import Topic from "../components/topic.jsx";
import topics from "../data/topicsData.json";

const Topics = () => {
  return (
    <section className="bg-gray-100 p-4">
      <div className="text-center flex items-center whitespace-nowrap py-4">
        <p className="text-3xl font-medium">Browse by Topic</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topics.topics.map((topic) => (
            // loop through each topic and pass the relevant props to the Topic component
            <Topic
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

export default Topics;
