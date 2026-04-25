import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-home.jpg";
import wd1 from "@/assets/what-we-do-1.jpg";
import wd2 from "@/assets/what-we-do-2.jpg";
import wd3 from "@/assets/what-we-do-3.jpg";
import approachImg from "@/assets/approach.jpg";
import problemImg from "@/assets/problem.jpg";
import howWeWork1 from "@/assets/how-we-work-1.jpg";
import howWeWork2 from "@/assets/how-we-work-2.jpg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import PageHero from "@/components/PageHero";
import useNewsStore from "@/stores/useNewsStore";
import DOMPurify from "dompurify";
import impact from "@/assets/impact.png";
import community1 from "@/assets/community1.png";
import servicepoints from "@/assets/servicepoints.png";
import chain from "@/assets/chain.png";
import criticalresouces from "@/assets/criticalresource.png";
import community2 from "@/assets/community2.png";
import community3 from "@/assets/community3.png";
import community4 from "@/assets/community4.png";
import community5 from "@/assets/community5.png";
import community6 from "@/assets/community6.png";
import community7 from "@/assets/community7.png";
import community8 from "@/assets/community8.png";
import useTeamStore from "@/stores/useTeamStore";
import RiskManagementMindmap from "@/components/RiskManagementMindmap";
import RiskConnectedMindmap from "@/components/RiskConnected";

const whatWeDo = [
  { img: wd1, title: "Design better policies and regulations" },
  { img: wd2, title: "Build capacity and implement systems" },
  { img: wd3, title: "Enable data-driven communities" },
];

const sdgGoals = [
  { num: "2", color: "#DDA63A", label: "ZERO\nHUNGER" },
  { num: "3", color: "#4C9F38", label: "GOOD HEALTH\nAND WELL-BEING" },
  { num: "4", color: "#C5192D", label: "QUALITY\nEDUCATION" },
  { num: "5", color: "#FF3A21", label: "GENDER\nEQUALITY" },
  { num: "8", color: "#A21942", label: "DECENT WORK AND\nECONOMIC GROWTH" },
  { num: "11", color: "#FD9D24", label: "SUSTAINABLE CITIES\nAND COMMUNITIES" },
  { num: "13", color: "#3F7E44", label: "CLIMATE\nACTION" },
  { num: "17", color: "#19486A", label: "PARTNERSHIPS\nFOR THE GOALS" },
];

const howWeWorkItems = [
  {
    title: "Smart systems + data",
    body: [
      "We design integrated solutions that combine technology with real-world workflows—making systems more efficient, responsive, and scalable.",
      "We design integrated solutions that combine technology with real-world workflows—making systems more efficient, responsive, and scalable.",
    ],
    img: howWeWork1,
    imgLeft: false,
  },
  {
    title: "Smart systems + data",
    body: [
      "We design integrated solutions that combine technology with real-world workflows—making systems more efficient, responsive, and scalable.",
      "We design integrated solutions that combine technology with real-world workflows—making systems more efficient, responsive, and scalable.",
    ],
    img: howWeWork2,
    imgLeft: true,
  },
];

const stats = [
  {
    icon: (
      <img
        src={servicepoints}
        alt="1000+ service points"
        className="w-40 h-40 mx-auto mb-4 object-contain"
      />
    ),
    bold: "1000+ service points",
    sub: "connected and supported",
  },
  {
    icon: (
      <img
        src={chain}
        alt="Strong networks"
        className="w-40 h-40 mx-auto mb-4 object-contain"
      />
    ),
    bold: "Strong networks",
    sub: "of trained local experts",
  },
  {
    icon: (
      <img
        src={criticalresouces}
        alt="Critical resources"
        className="w-40 h-40 mx-auto mb-4 object-contain"
      />
    ),
    bold: "Critical resources",
    sub: "protected and optimized every year",
  },
];

/* ─── Shared label style ─── */
const sectionLabelClass =
  "inline-block text-xs sm:text-sm md:text-base font-semibold tracking-[0.14em] uppercase text-[#24519E] font-poppins border-b-2 border-[#24519E] pb-1";

const Index = () => {
  const { news, fetchNews } = useNewsStore();
  const { fetchTeam, clients, partnerships } = useTeamStore();

  useEffect(() => {
    fetchNews();
    fetchTeam();
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
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>WHAT WE DO</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 w-full">
            {whatWeDo.map((item, i) => (
              <div key={i} className="group flex flex-col items-center w-full">
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
                <p className="mt-4 text-xl sm:text-2xl lg:text-[28px] font-normal leading-snug tracking-normal text-center font-poppins text-foreground w-full">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Repeatable Approach ── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-10 sm:mb-14">
            <span className={sectionLabelClass}>
              A REPEATABLE APPROACH TO SCALE
            </span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading text-black max-w-3xl mx-auto leading-snug text-left mb-10 sm:mb-12">
            We scale data-driven solutions across regions by combining
            technology, local expertise, and system-level thinking.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Image with play button */}
            <div className="relative overflow-hidden h-[350px]">
              <img
                src={approachImg}
                alt="Sustainable approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <a
                href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-white/50 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Text */}
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

      {/* ── The Problem ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden grid p-3 md:p-8 grid-cols-1 md:grid-cols-2 min-h-[380px]"
            style={{ backgroundColor: "#24519E" }}
          >
            {/* Left: text */}
            <div className="p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white font-poppins border-b-2 border-white pb-1 mb-6">
                  THE PROBLEM
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-normal text-white leading-snug mb-6">
                  Billions are invested in infrastructure and equipment, but
                  systems to sustain them are often overlooked.
                </h2>
                <p className="text-sm sm:text-base text-white/80 font-poppins leading-relaxed">
                  In many regions, critical services fail due to gaps in
                  maintenance, coordination, and real-time visibility. Without
                  reliable systems, even well-funded initiatives struggle to
                  deliver consistent impact.
                </p>
              </div>
              <p className="mt-10 text-2xl sm:text-3xl font-poppins font-normal text-white leading-snug">
                Stronger systems need better tools, data, and support.
              </p>
            </div>

            {/* Right: image */}
            <div className="relative min-h-[260px] md:min-h-0">
              <img
                src={problemImg}
                alt="Deforested land"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: "0 1rem 1rem 0" }}
              />
            </div>
          </div>
        </div>
      </section>

      <RiskConnectedMindmap />

      <section className="pt-7 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className={sectionLabelClass}>OUR SOLUTIONS</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:mb-2">
            <h2 className="text-lg max-w-4xl sm:text-2xl lg:text-3xl font-poppins font-normal text-black leading-snug text-center sm:text-left">
              We support systems end-to-end, so they work when it matters most.
            </h2>
          </div>
        </div>
      </section>

      <RiskManagementMindmap />

      {/* ── Our Impact ── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-3 sm:mb-6">
            <span className={sectionLabelClass}>OUR IMPACT</span>
          </div>

          {/* Add the impact image here */}
          <div className="flex justify-center mb-3 sm:mb-6">
            <img src={impact} alt="Our Impact" className="max-w-full h-auto" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12 sm:mb-16"></div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            speed={600}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 3 },
              480: { slidesPerView: 4 },
              640: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
            }}
            className="max-w-6xl mx-auto"
          >
            {[
              community1,
              community2,
              community3,
              community4,
              community5,
              community6,
              community7,
              community8,
            ].map((g, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center gap-1 py-2">
                  <img src={g} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-border">
        <div className="max-w-5xl mx-auto">
          <div
            className="grid grid-cols-1 sm:grid-cols-3 text-center"
            style={{ gap: "120px" }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                {s.icon}
                <p className="text-lg sm:text-xl font-bold font-poppins text-black leading-snug">
                  {s.bold}
                </p>
                <p className="text-sm text-black font-poppins mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-10 sm:mb-14">
            <span className={sectionLabelClass}>HOW WE WORK</span>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {howWeWorkItems.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-4 sm:gap-6">
                {/* TEXT CARD */}
                <div
                  className={`w-full md:w-1/2 h-auto md:h-[396px] p-6 md:p-8 lg:p-12 flex flex-col justify-center ${
                    item.imgLeft ? "order-2 md:order-2" : "order-1 md:order-1"
                  }`}
                  style={{
                    backgroundColor: "rgba(177, 206, 255, 1)",
                    borderRadius: "60px 0px 60px 0px",
                  }}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-[#1a3a6e] mb-5">
                    {item.title}
                  </h3>
                  {item.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm sm:text-base font-poppins text-[#1a3a6e] leading-relaxed mb-3 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* IMAGE CARD */}
                <div
                  className={`w-full md:w-1/2 h-[220px] md:h-[396px] overflow-hidden ${
                    item.imgLeft ? "order-1 md:order-1" : "order-2 md:order-2"
                  }`}
                  style={{ borderRadius: "0px" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnerships ── */}
      <section className="py-6 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>PARTNERSHIPS</span>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={2500}
            loop
            grabCursor
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
          >
            {partnerships.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="text-sm sm:text-base font-heading font-semibold text-muted-foreground whitespace-nowrap hover:text-black transition">
                  <img src={p.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Collaborations and Clients ── */}
      <section className="py-6 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>
              COLLABORATIONS AND CLIENTS
            </span>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={12}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={3000}
            loop
            grabCursor
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
          >
            {clients.map((c, i) => (
              <SwiperSlide key={i}>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground border border-border rounded-lg px-4 py-2 sm:py-3 font-poppins whitespace-nowrap hover:bg-gray-100 transition">
                  <img src={c.img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── News and Publications ── */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-10 sm:mb-14">
            <span
              className={`${sectionLabelClass} decoration-[#24519E] underline-offset-8`}
            >
              NEWS AND PUBLICATIONS
            </span>
          </div>

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
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 sm:h-48 object-cover"
                    loading="lazy"
                    width={640}
                    height={512}
                  />
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <p className="text-[11px] sm:text-xs font-medium tracking-wide text-muted-foreground mb-1 font-poppins">
                      {item.date}
                    </p>
                    <h3 className="text-sm sm:text-[15px] font-semibold text-primary mb-2 font-poppins leading-snug">
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
