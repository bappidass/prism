import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-home.jpg";
import wd1 from "@/assets/what-we-do-1.jpg";
import wd2 from "@/assets/what-we-do-2.jpg";
import wd3 from "@/assets/what-we-do-3.jpg";
import approachImg from "@/assets/approach.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PageHero from "@/components/PageHero";
import useNewsStore from "@/stores/useNewsStore";
import useVideoStore from "@/stores/useVideoStore";
import DOMPurify from "dompurify";

const whatWeDo = [
  { img: wd1, title: "Design better policies and regulations" },
  { img: wd2, title: "Build capacity and implement systems" },
  { img: wd3, title: "Enable data-driven communities" },
];

/* ─── Shared label style used in every section heading ─── */
const sectionLabelClass =
  "inline-block text-xs sm:text-sm md:text-base font-semibold tracking-[0.14em] uppercase text-[#24519E] font-poppins border-b-2 border-[#24519E] pb-1";

const Index = () => {
  const { news, fetchNews } = useNewsStore();
  const { videos, fetchVideos } = useVideoStore();
  console.log(videos)

  useEffect(() => {
    fetchNews();
    fetchVideos();
  }, []);

  return (
    <div>
      {/* ── Hero ── */}
      <PageHero
        img={heroImg}
        label="PRISM INSTITUTE"
        title="Helping institutions and communities manage risks with data"
      />

      {/* ── What We Do ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section label */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>WHAT WE DO</span>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 w-full">
            {whatWeDo.map((item, i) => (
              <div key={i} className="group flex flex-col items-center w-full">
                {/* Image container — fluid width, fixed aspect ratio */}
                <div
                  className="relative overflow-hidden w-full max-w-[384px] aspect-[384/261]"
                  style={{ borderRadius: "60px 0px 60px 0px" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card title — fluid clamp instead of fixed px */}
                <p className="mt-4 text-xl sm:text-2xl lg:text-[28px] font-normal leading-snug tracking-normal text-center font-poppins text-foreground w-full">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Repeatable Approach ── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Section label — centred */}
          <div className="flex justify-center mb-10 sm:mb-14">
            <span className={sectionLabelClass}>
              A REPEATABLE APPROACH TO SCALE
            </span>
          </div>

          {/* Intro headline */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading text-black max-w-3xl mx-auto leading-snug text-left mb-10 sm:mb-12">
            We scale data-driven solutions across regions by combining
            technology, local expertise, and system-level thinking.
          </h2>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start max-w-4xl mx-auto">
            {/* Image */}
            <div className="overflow-hidden rounded-sm">
              <img
                src={approachImg}
                alt="Sustainable approach"
                className="w-full h-52 sm:h-60 md:h-64 object-cover"
              />
            </div>

            {/* Body copy */}
            <div className="flex flex-col justify-start space-y-4 text-sm sm:text-base text-black leading-relaxed text-left font-poppins">
              <p>
                We scale data-driven solutions across regions by combining
                technology, local expertise, and system-level thinking.
              </p>
              <p>
                Our approach ensures solutions are not just implemented—but
                sustained, adapted, and expanded over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── News & Publications ── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section label */}
          <div className="flex justify-center mb-10 sm:mb-14">
            <span
              className={`${sectionLabelClass}  decoration-[#24519E] underline-offset-8`}
            >
              NEWS AND PUBLICATIONS
            </span>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            speed={800}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1.15 },
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-7xl mx-auto"
          >
            {news?.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="border border-border rounded-lg overflow-hidden text-left bg-card h-full flex flex-col">
                  {/* Thumbnail */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 sm:h-48 object-cover"
                    loading="lazy"
                    width={640}
                    height={512}
                  />

                  {/* Card body */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    {/* Date */}
                    <p className="text-[11px] sm:text-xs font-medium tracking-wide text-muted-foreground mb-1 font-poppins">
                      {item.date}
                    </p>

                    {/* Title */}
                    <h3 className="text-sm sm:text-[15px] font-semibold text-primary mb-2 font-poppins leading-snug">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="text-xs text-muted-foreground mb-4 line-clamp-4 flex-1"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.body?.[0] || ""),
                      }}
                    />

                    <Link
                      to={`/news/${item.id}`}
                      className="text-sm font-semibold text-primary hover:underline mt-auto"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Index;
