import { MapPin, Mail } from "lucide-react";
import logo from "@/assets/prism-logo.png";

const Footer = () => (
  <div className="bg-secondary py-12">
    <div className="max-w-7xl mx-auto px-4 md:px-6">

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-start">

        {/* LEFT: Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="PRISM Institute" className="h-10 md:h-12 mb-6" />

          <p className="mb-3 font-bold text-[18px] md:text-[20px] leading-[117%] tracking-[0.14em] font-poppins">
            FOLLOW US
          </p>

          {/* ✅ FIXED LINKEDIN BUTTON */}
          <a
            href="https://www.linkedin.com/company/prism-institute"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* CENTER: About */}
        <div className="flex flex-col items-center">
          <p className="mb-3 font-semibold text-[18px] md:text-[20px] leading-[117%] tracking-[0.14em] font-poppins text-center">
            ABOUT
          </p>
          <p className="text-sm text-black leading-relaxed max-w-sm text-center md:text-left">
            Established in 2016, the Public Risk Management Institute (PRISM Institute) is a centre
            of excellence and innovation for developing and deploying evidence-based risk management
            solutions in the public interest for regulators, policymakers, communities and industry.
          </p>
        </div>

        {/* RIGHT: Contact */}
        <div className="flex flex-col items-center md:items-end md:text-right">
          <p className="mb-3 font-semibold text-[18px] md:text-[20px] leading-[117%] tracking-[0.14em] font-poppins">
            CONTACT
          </p>

          <div className="space-y-2 text-sm text-foreground">
            <div className="flex items-center justify-center md:justify-end gap-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Mississauga, Canada</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2">
              <Mail className="h-4 w-4 text-primary flex-shrink-0" />
              <a href="mailto:info@prism.institute" className="hover:text-primary">
                info@prism.institute
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-foreground/20 mt-10 pt-6 text-center text-[13px] md:text-[15px] leading-relaxed tracking-[0em] font-poppins text-black">
        Copyright Public Risk Management Institute 2016–2026. All Rights Reserved.
        Public Risk Management Institute is registered under the Canada Not-for-Profit Corporations Act.
      </div>

    </div>
  </div>
);

export default Footer;