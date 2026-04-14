import { useEffect } from "react";
import heroImg from "@/assets/hero-news.jpg";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import useNewsStore from "@/stores/useNewsStore";
import DOMPurify from "dompurify";

const News = () => {
  const { news, fetchNews } = useNewsStore();

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <PageHero
        img={heroImg}
        label="RECENT UPDATES"
        title="Insights & Stories"
      />

      <section className="mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 md:py-12">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {news.map((a) => (
            <div
              key={a.id}
              className="border border-border rounded-lg overflow-hidden bg-card group flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <p className="text-xs text-muted-foreground mb-1 uppercase">
                  {a.date}
                </p>

                <h3 className="text-sm font-semibold text-primary mb-2">
                  {a.title}
                </h3>

                <p
                  className="text-xs text-muted-foreground mb-4 line-clamp-4 flex-1"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(a.body?.[0] || ""),
                  }}
                />

                <Link
                  to={`/news/${a.id}`}
                  className="text-sm font-semibold text-primary hover:underline mt-auto"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
