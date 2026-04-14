interface PageHeroProps {
  img: string;
  label?: string;
  title?: string;
  showTitle?: boolean;
  showText?: boolean;
}

const PageHero = ({
  img,
  label,
  title,
  showTitle = true,
  showText = true,
}: PageHeroProps) => (
  <section className="py-6  px-4 flex justify-center">
    <div className="w-full max-w-[87rem] relative rounded-lg overflow-hidden ">
      <img
        src={img}
        alt={label}
        className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-[#24519E] opacity-50"></div>
      {showText && (
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 py-5 md:py-10">
          {label && (
            <div className="flex justify-center mb-2 md:m-5">
              <p className="inline-block text-[13px] md:text-[18px] lg:text-[22px] font-semibold tracking-[0.14em] text-white font-poppins border-b-2 border-white pb-1 mb-4">
                {label}
              </p>
            </div>
          )}

          {showTitle && title && (
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-heading font-medium text-white max-w-5xl leading-tight">
              {title}
            </h1>
          )}
        </div>
      )}
    </div>
  </section>
);

export default PageHero;
