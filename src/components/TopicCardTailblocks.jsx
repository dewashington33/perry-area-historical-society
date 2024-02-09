import PropTypes from "prop-types";

function TopicCardTailblocks({ topicID, title, topicSrc, imgSrc, subTopics }) {
  return (
    <li className="p-4 md:w-1/3" id={topicID}>
      <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={imgSrc}
          alt={title}
        />
        <div className="p-6">
          <h5 className="title-font text-2xl font-medium text-white mb-3">
            <a href={topicSrc} className="hover:underline">
              {title}{topicID}
            </a>
          </h5>
          <ul className="subtopics">
            {subTopics.map(({ subTopicID, subTopicTitle, subTopicSrc }) => (
              // loop through each subtopic and display the title and the link
              <li key={subTopicID} className="subtopic-item">
                <a
                  href={subTopicSrc}
                  className="dark:text-white hover:text-blue-600"
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
}

TopicCardTailblocks.propTypes = {
  topicID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, // specify that title is a required string
  topicSrc: PropTypes.string.isRequired, // specify that topicSrc is a required string
  imgSrc: PropTypes.string.isRequired, // specify that imgSrc is a required string
  subTopics: PropTypes.arrayOf(
    // specify that subTopics is an array of objects
    PropTypes.shape({
      // specify the shape of each object in the array
      subTopicID: PropTypes.number.isRequired, // specify that subTopicID is a required number
      subTopicTitle: PropTypes.string.isRequired, // specify that subTopicTitle is a required string
      subTopicSrc: PropTypes.string.isRequired, // specify that subTopicSrc is a required string
    })
  ).isRequired, // specify that subTopics is a required prop
};

export default TopicCardTailblocks;
