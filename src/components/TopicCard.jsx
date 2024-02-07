import { Card } from "flowbite-react";
import PropTypes from "prop-types";

const TopicCard = ({ topicID, title, topicSrc, imgSrc, subTopics }) => {
  console.log(subTopics);
  return (
    <Card className="max-w-sm" id={topicID}>
      <img className="w-full h-full object-cover" src={imgSrc} alt={title} />
      <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
        <a href={topicSrc} className="text-blue-600 hover:underline">
          {title}
        </a>
      </h5>
      <ul className="subtopics">
        {subTopics.map(({ subTopicID, subTopicTitle, subTopicSrc }) => (
          // loop through each subtopic and display the title and the link
          <li key={subTopicID} className="subtopic-item">
            <a href={subTopicSrc} className="text-gray-700 hover:text-blue-600">
              {subTopicTitle}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
};

// define the propTypes property for the component
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
