// Topic.jsx
const Topic = ({ topicID, title, topicSrc, imgSrc, subTopics }) => {
  return (
    <li className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex">
        <div className="w-1/3">
          {" "}
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />{" "}
        </div>
        <div className="w-2/3 p-4">
          {" "}
          <h2 className="text-lg font-semibold">
            <a href={topicSrc} className="text-blue-600 hover:underline">
              {title}
            </a>
          </h2>
          <ul className="subtopics">
            {subTopics.map(({ subTopicID, subTopicTitle, subTopicSrc }) => (
              // loop through each subtopic and display the title and the link
              <li key={subTopicID} className="subtopic-item">
                <a
                  href={subTopicSrc}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {subTopicTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Topic;
