import PropTypes from "prop-types";

function Article({ title, category, articleImgSrc, articleDescription }) {
  const imageSource =
    import.meta.env.MODE === "production"
      ? `/perry-area-historical-society${articleImgSrc}`
      : articleImgSrc;
  return (
    <div className="p-4 md:w-1/3">
      <div className="bg-gray-900 h-full border-2 border-gray-800 rounded-lg overflow-hidden">
        <img
          className="h-80 w-full object-cover object-top"
          src={imageSource}
          alt={title}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3">{articleDescription}</p>
          <div className="flex items-center flex-wrap ">
            <a
              href="/articles"
              className="text-white-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  articleImgSrc: PropTypes.string.isRequired,
  articleDescription: PropTypes.string.isRequired,
};

export default Article;
