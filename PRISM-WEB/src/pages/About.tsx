import { Award, Network, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/aboutBanner.webp";
import approachImg from "@/assets/renewedMission.webp";
import wd1 from "@/assets/what-we-do-1.jpg";
import wd2 from "@/assets/what-we-do-2.jpg";
import wd3 from "@/assets/what-we-do-3.jpg";
import PageHero from "@/components/PageHero";
import quoteup from "@/assets/quotedown.png";
import quotedown from "@/assets/quoteup.png";
import conferencemap from "@/assets/conference_map.png";
import conferencePerson from "@/assets/conference_person.png";
import TeamCard from "@/components/TeamCard";
import { useEffect } from "react";
import useVideoStore from "@/stores/useVideoStore";
import useImpactCountryStore from "@/stores/useImpactCountryStore";
import useTeamStore from "@/stores/useTeamStore";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import community1 from "@/assets/community1.png";
import community2 from "@/assets/community2.png";
import community3 from "@/assets/community3.png";
import community4 from "@/assets/community4.png";
import community5 from "@/assets/community5.png";
import community6 from "@/assets/community6.png";
import community7 from "@/assets/community7.png";
import community8 from "@/assets/community8.png";

const sectionLabelClass =
  "inline-block text-xs sm:text-sm md:text-base font-semibold tracking-[0.14em] uppercase text-[#24519E] font-poppins border-b-2 border-[#24519E] pb-1";

const pillars = [
  {
    label: "Risk Technology",
    style: "bg-[linear-gradient(106.95deg,#24519E_18.23%,#239B82_92.56%)]",
  },
  {
    label: "Public policy/Regulation",
    style: "bg-[linear-gradient(276.31deg,#24519E_22.16%,#239B82_90.13%)]",
  },
  {
    label: "Sustainable Development",
    style: "bg-[linear-gradient(117.97deg,#24519E_-13.17%,#239B82_103.94%)]",
  },
];

const impactAreas = [
  {
    img: wd1,
    title: "Governmental and regulatory institutions",
    desc: "Structured to understand and manage risks from interconnected systems affecting sustainable well-being",
  },
  {
    img: wd2,
    title: "Communities",
    desc: "Empowered with knowledge and tools to influence policies and investments affecting their sustainable well-being",
  },
  {
    img: wd3,
    title: "Private sector",
    desc: "Equipped with necessary intelligence to invest responsibly in well-being initiatives across global communities",
  },
];

const values = [
  { bold: "integrity", text: "Demonstrating integrity in our approach" },
  {
    bold: "trust",
    text: "Earning and maintaining trust of our clients, partners, and stakeholders",
  },
  {
    bold: "objectivity",
    text: "Ensuring objectivity in our process and methods",
  },
];

const MemberCard = ({ member }) => (
  <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm mx-auto group">
    {/* Image Card */}
    <div className="w-full aspect-[427/374] rounded-tl-[50px] sm:rounded-tl-[60px] rounded-br-[50px] sm:rounded-br-[60px] overflow-hidden bg-gray-200 shadow-md group-hover:shadow-xl transition duration-300">
      {member.img ? (
        <TeamCard {...member} />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
          No Image
        </div>
      )}
    </div>

    {/* Name */}
    <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl leading-snug text-center mt-4">
      {member.name || "Unnamed"}
    </p>
  </div>
);

/* ─── About page ─── */
const About = () => {
  const { videos, fetchVideos } = useVideoStore();
  const { countries, fetchCountries } = useImpactCountryStore();
  const { fetchTeam, directors, advisors, clients, partnerships } =
    useTeamStore();

  useEffect(() => {
    fetchTeam();
    fetchVideos();
    fetchCountries();
  }, []);

  console.log(directors, advisors, clients, partnerships);

  return (
    <div className="font-popins">
      <PageHero
        img={heroImg}
        label="ABOUT US"
        title="Building Better Systems with Data"
      />

      {/* Vision */}
      <section className="py-6 sm:py-12 sm:py-16 px-4 text-center">
        <div className="flex justify-center mb-8 sm:mb-10">
          <span className={sectionLabelClass}>OUR VISION</span>
        </div>
        <div className="max-w-4xl mx-auto relative text-center px-8 md:px-12 py-8">
          <img
            src={quoteup}
            alt=""
            className="absolute left-0 bottom-0 w-8 sm:w-10 md:w-14 opacity-70"
          />
          <img
            src={quotedown}
            alt=""
            className="absolute right-0 top-0  w-8 sm:w-10 md:w-14 opacity-70"
          />
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-black leading-snug">
            A sustainable, safe, and healthy world built on a foundation of
            evidence, innovation and partnerships.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className=" mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 md:py-12">
        <div className=" mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>OUR RENEWED MISSION</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-8 items-center max-w-4xl mx-auto">
            <div className="text-xl sm:text-2xl md:text-3xl font-heading text-foreground leading-snug text-left">
              Helping{" "}
              <span className="bg-gradient-to-r from-[#24519E] to-[#239B82] bg-clip-text text-transparent font-bold">
                reduce risks
              </span>{" "}
              <span className="font-normal">
                and to sustainable well-being across communities globally
              </span>
            </div>
            <img
              src={approachImg}
              alt="Mission"
              className="w-full aspect-video object-cover hover:shadow-lg transition"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-6 sm:py-12 px-4 text-center">
        <div className="flex justify-center mb-8 sm:mb-10">
          <span className={sectionLabelClass}>OUR JOURNEY</span>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-foreground font-poppins mt-6 mb-6">
          PRISM Institute has been working in the intersecting areas of
        </p>
        <div className="flex flex-col items-center gap-3 max-w-sm sm:max-w-md mx-auto">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`${p.style} text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium w-full text-center shadow-md hover:shadow-lg hover:scale-105 transition duration-300 font-poppins`}
            >
              {p.label}
            </div>
          ))}
        </div>
        <p className="text-sm sm:text-base md:text-lg text-foreground font-poppins mt-6">
          globally since 2016.
        </p>
      </section>

      <section className="font-poppins bg-white text-gray-800 px-4 sm:px-6 lg:px-16 py-6 sm:py-12 max-w-7xl mx-auto">
        {/* Text + Portrait */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="flex-1 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-black">
            <p>
              Undertaking extensive research in partnership with leading
              academic institutions and acting as a trusted advisor, PRISM
              Institute has assisted public and private sectors in OECD
              countries and developing economies to adopt and implement
              contemporary approaches and practices to regulatory delivery and
              sustainable development.
            </p>
            <p>
              During this journey, PRISM Institute has recognized the growing
              challenges in governance of risks associated with increasingly
              complex, interdependent systems and behaviours.
            </p>
            <p>
              Limitations in regulations and siloed governing structures for
              delivery further exacerbate the ability of regulators to
              effectively address emerging social and economic challenges.
            </p>
          </div>
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex-shrink-0 overflow-hidden bg-slate-200 rounded-[0_90px_0_119px] mx-auto">
            <img
              src={conferencePerson}
              alt="Conference speaker"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Two YouTube cards */}

        <div className="mb-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 1500,
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
              1024: { slidesPerView: 2 },
            }}
            className="max-w-7xl mx-auto"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div
                  onClick={() => window.open(video.youtubeLink, "_blank")}
                  className="relative w-full max-w-[720px] aspect-video bg-black rounded-lg overflow-hidden cursor-pointer group flex justify-center items-center"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity duration-300"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <div
                        className="w-0 h-0 ml-1"
                        style={{
                          borderTop: "11px solid transparent",
                          borderBottom: "11px solid transparent",
                          borderLeft: "18px solid white",
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-4 py-3">
                    <p className="text-white text-xs sm:text-sm leading-snug font-medium font-poppins">
                      {video.title || "Untitled Video"}
                    </p>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
                      Watch on YouTube
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Map + Text */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full md:w-80 lg:w-[480px] flex-shrink-0 overflow-hidden bg-slate-200 rounded-[0_59px_0_61px]">
            <img
              src={conferencemap}
              alt="Map of Africa showing regional coverage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-black">
            <p>
              Furthermore, extreme events such as the Covid pandemic,
              progressively worsening ones such as climate change along with
              systemic inequities including gender discrimination has led to
              failures with negative consequences on interconnected societal
              well-being.
            </p>
            <p>
              The lack of disaggregated, localized data has created gaps in
              understanding such interconnected risks and their impacts
              especially among vulnerable communities.
            </p>
          </div>
        </div>
      </section>

      <section className=" mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 md:py-12">
        <div className="flex justify-center mb-8 sm:mb-10">
          <span className={sectionLabelClass}>
            {" "}
            SUSTAINABLE COMMUNITY WELLBEING
          </span>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
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
          className="max-w-5xl mx-auto mb-7"
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
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center items-center">
                <img
                  src={item}
                  alt={`community-${i}`}
                  className="w-24 h-24 md:w-28 md:h-28 lg:w-48 lg:h-48 object-contain hover:scale-110 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-sm sm:text-base md:text-lg text-gray-800 font-poppins max-w-2xl text-center mx-auto">
          in an equitable, inclusive, and climate resilient way.
        </p>
      </section>

      <section className="py-6 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>OUR DESIRED IMPACT</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {impactAreas.map((area, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full max-w-sm aspect-[427/261] object-cover rounded-tl-[60px] rounded-br-[60px] mb-5"
                  loading="lazy"
                />
                <h3 className="font-poppins font-semibold text-lg sm:text-xl md:text-2xl leading-snug mb-3 min-h-[60px] flex items-start justify-center">
                  {area.title}
                </h3>
                <p className="font-poppins text-sm sm:text-base md:text-lg leading-relaxed text-black">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#24519E]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-block text-xs sm:text-sm md:text-base font-semibold tracking-[0.14em] uppercase text-white font-poppins border-b-2 border-white pb-1">
              OUR VALUES
            </span>
          </div>
          <p className="text-lg sm:text-2xl md:text-3xl text-white font-poppins mb-8 sm:mb-10">
            We strive to meet and exceed our clients' expectations by:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[rgba(93,140,221,1)] text-white text-left w-full rounded-[22px] p-6 sm:p-8 text-base sm:text-lg md:text-xl leading-relaxed font-poppins"
              >
                {v.text.split(v.bold).map((part, j, arr) =>
                  j < arr.length - 1 ? (
                    <span key={j}>
                      {part}
                      <strong className="font-bold text-lg  md:text-2xl italic">
                        {v.bold}
                      </strong>
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>OUR GLOBAL REACH</span>
          </div>
          <p className="font-poppins text-lg sm:text-xl md:text-2xl leading-snug text-black mb-8 max-w-2xl mx-auto">
            Prism Institute's work and advice has influenced the following
            governments and institutions around the world:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c, i) => (
              <span
                key={i}
                className="font-poppins font-semibold text-white text-xs sm:text-sm md:text-base rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-[linear-gradient(106.95deg,#24519E_18.23%,#239B82_92.56%)]"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-6 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>OUR BOARD OF DIRECTORS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6">
            {directors.map((d) => (
              <MemberCard key={d.id} member={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Team of Advisors */}
      <section className="py-6 sm:py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>OUR TEAM OF ADVISORS</span>
          </div>

          <p className="text-sm sm:text-base text-gray-700 font-poppins max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            We are leading scientists, engineers, analysts and strategists in
            risk and regulations. We are experts in risk management,
            communications, public policy and evidence-based decision-making. We
            work collaboratively with civil society, academia, industry,
            regulators and government to design complete regulatory solutions.
            Our focus is on reducing regulatory burden, enhancing safety
            outcomes and advancing community well-being.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {advisors.map((a) => (
              <MemberCard key={a.id} member={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-6 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8 sm:mb-10">
            <span className={sectionLabelClass}>PARTNERSHIPS</span>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={2500}
            loop={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
          >
            {partnerships.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="h-24 sm:h-32 flex items-center justify-center border border-border rounded-lg px-4 py-3 bg-white">
                  <img
                    src={p.img}
                    alt={p.name || `Partner ${i + 1}`}
                    className="max-h-12 sm:max-h-14 md:max-h-28 max-w-full w-auto object-contain mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Collaborations and Clients */}
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
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            loop={true}
            grabCursor={true}
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
                <div className="h-24 sm:h-28 flex items-center justify-center border border-border rounded-lg px-4 py-3 bg-white hover:bg-gray-50 transition">
                  <img
                    src={c.img}
                    alt={c.name || `Client ${i + 1}`}
                    className="max-h-12 sm:max-h-14 max-w-full w-auto object-contain mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default About;
