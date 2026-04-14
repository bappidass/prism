import { LinkedinIcon } from "lucide-react";

const TeamCard = ({
  name,
  img,
  linkedin,
}: {
  name: string;
  img: string;
  linkedin: string;
}) => (
  <div className="flex flex-col items-center text-center group">
    
    {/* Image */}
    <div className="relative w-full h-full overflow-hidden rounded-tl-[50px] sm:rounded-tl-[60px] rounded-br-[50px] sm:rounded-br-[60px] bg-gray-200">
      
      {img ? (
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
          No Image
        </div>
      )}

      {/* LinkedIn Icon */}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center  transition duration-300 shadow-md"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>
      )}

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300" />
    </div>

    {/* Name */}
    <p className="font-poppins font-bold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-tight mt-4">
      {name || "Unnamed"}
    </p>
  </div>
);

export default TeamCard;