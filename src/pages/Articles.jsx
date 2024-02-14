import { useEffect, useState } from "react";
import Article from "../components/Article";
import { loadArticlesData } from "../utils/LoadArticlesData";

function Articles() {
  const [articlesData, setArticlesData] = useState({ articles: [] });
  useEffect(() => {
    loadArticlesData().then((data) => setArticlesData(data));
  }, []);

  return (
    <section className="text-gray-400 bg-stone-300 body-font">
      <header className="h-44 leading-10 w-full">
        <hr />
        <div className="mx-auto text-center box-border leading-10 pb-11 pt-12 pl-5 pr-5 relative flex flex-col justify-center h-full max-w-4xl">
          <h2 className="text-mirage-900 text-6xl font-cormorant font-semibold">
            All Articles
          </h2>
          <h3 className="text-mirage-900 text-2xl font-cormorant font-light">
            A-Z
          </h3>
        </div>
        <div>
          <hr />
        </div>
      </header>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articlesData.articles.map((article) => (
            <Article
              key={article.articleID}
              title={article.title}
              category={article.category}
              articleImgSrc={article.articleImgSrc}
              articleDescription={article.articleDescription}
              articleText={article.articleText}
              galleryItems={article.galleryItems}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
