import PropTypes from "prop-types";

function TopicCard({ topicID, title, topicSrc, imgSrc, subTopics }) {
  // check if the image source is in production or development mode
  const imageSource =
    import.meta.env.MODE === "production"
      ? `/perry-area-historical-society${imgSrc}`
      : imgSrc;

  console.log("TopicCard", title, topicID);
  return (
    <li
      className="p-4 md:w-1/3 flex flex-col md:flex-row items-center"
      id={topicID}
    >
      <div className="w-64 border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="h-48 w-full object-cover object-center"
          src={imageSource}
          alt={title}
        />
        <div className="p-6">
          <h5 className="title-font text-2xl font-medium text-white mb-3">
            <a href={topicSrc} className="hover:underline">
              {title}
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

TopicCard.propTypes = {
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

export default TopicCard;
