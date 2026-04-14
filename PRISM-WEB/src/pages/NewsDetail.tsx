import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import useNewsStore from "@/stores/useNewsStore";
import DOMPurify from "dompurify";

const ArticleDetail = () => {
  const { id } = useParams();
  const { news, fetchNews } = useNewsStore();

  useEffect(() => {
    fetchNews();
  }, []);

  const article = news.find((item) => item.id === id);

  if (!article) {
    return <p className="text-center py-10">Article not found</p>;
  }
  const relatedNews = news.filter((item) => item.id !== id).slice(0, 4); // ✅ take 4
  return (
    <div className="bg-white">
      <section className="py-6 px-4 flex justify-center">
        <div className="w-full max-w-[83rem] relative rounded-lg overflow-hidden">
          <img
            src={article.img}
            alt={article.title}
            className="w-full md:h-[400px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <p className="text-white text-sm mb-2">{article.date}</p>
            <h1 className="text-2xl md:text-4xl text-white font-semibold">
              {article.title}
            </h1>
          </div>
        </div>
      </section>
      <article className="px-4 md:px-16 py-10 mx-auto">
        <p className="text-sm text-gray-500 mb-6 border-b pb-4">
          Written By: <b className="text-black">{article.author}</b> | Published:{" "}
          <b className="text-black">{article.date}</b>
        </p>

        <div
          className="space-y-5 text-sm sm:text-base text-gray-800 font-poppins break-words overflow-hidden leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.body?.[0] || ""),
          }}
        />

        {/* Gallery */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {article.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-full h-40 object-cover rounded"
            />
          ))}
        </div>
      </article>
      {relatedNews.length > 0 && (
        <section className="px-4 md:px-16 py-12 sm:py-16 md:py-20    border-t border-gray-100">
          <div className="mx-auto">
            <div className="flex justify-center mb-10 sm:mb-14">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-[#24519E] border-b-2 border-[#24519E] pb-1">
                NEWS AND PUBLICATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {relatedNews.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white group flex flex-col"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <p className="text-[11px] uppercase text-gray-400 mb-1">
                      {item.date}
                    </p>

                    <h3 className="text-sm font-bold text-[#24519E] mb-2">
                      {item.title}
                    </h3>

                    <p
                      className="text-xs text-muted-foreground mb-4 line-clamp-4 flex-1"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.body?.[0] || ""),
                      }}
                    />

                    <Link
                      to={`/news/${item.id}`}
                      className="text-sm font-semibold text-[#24519E] hover:underline mt-auto"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {relatedNews.length > 4 && (
              <div className="flex justify-center mt-10 sm:mt-14">
                <Link
                  to="/news"
                  className="px-8 py-3 bg-[#24519E] hover:bg-[#1d4080] text-white text-sm font-semibold uppercase rounded"
                >
                  View More
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleDetail;
