import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#080c0f] text-zinc-400 text-xs 
                       md:fixed md:bottom-0 md:left-0 group">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row 
                      items-center justify-between py-3">
        
        {/* Left side - Copyright */}
        <p className="text-[14px] text-center md:text-left">
          © 2025 Krishan Rajapaksha | krishrajapaksha4@gmail.com
        </p>

        {/* Right side - Social icons */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          {[
            { href: "mailto:krishrajapaksha4@gmail.com", src: "/gmail.svg", alt: "Gmail" },
            { href: "https://www.instagram.com/krish_rajapaksha?igsh=MWU5cGZyNHhxa3duaQ%3D%3D&utm_source=qr", src: "/instagram.svg", alt: "Instagram" },
            { href: "http://linkedin.com/in/krishan-rajapaksha-626393262", src: "/linkedin.svg", alt: "LinkedIn" },
          ].map((icon, i) => (
            <a
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-4 h-4 invert opacity-100 
                           group-hover:opacity-50 hover:opacity-100 
                           transition duration-200"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
