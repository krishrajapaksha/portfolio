import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between 
                 h-screen bg-[radial-gradient(circle,_#181e22,_#080b0e)] 
                 overflow-hidden px-6 md:px-16 pt-24 md:pt-32 -mt-10 md:-mt-20" 
    >
      {/* Left Content (logo + texts + buttons) */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left max-w-md z-20 space-y-3 md:space-y-0 md:space-x-6 md:ml-40 mb-5">
        
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Logo"
          className="hidden md:block w-20 h-20 mt-3"
        />

        {/* Texts */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h1 className="text-md md:text-4xl font-bold">
            Hi, I’m Krishan Rajapaksha
          </h1>

          <p className="text-sm md:text-lg text-justify md:text-left">
            I design and develop digital experiences that combine technology
            and creativity. I bring ideas to life with code and design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <a
              href="/Krishan_Rajapaksha_CV.pdf"
              download
              className="btn btn-secondary"
            >
              <span className="material-symbols-rounded">download</span>
              Download CV
            </a>
            <div className="flex flex-col items-center md:items-start text-sm opacity-80">
              <span>Keep exploring</span>
              <div className="flex items-center gap-1">
                Scroll Down
                <span className="material-symbols-rounded animate-bounce-slow">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Figure */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mb-8 md:mb-0 md:mr-40">
        <img
          src="/figure1.png"
          alt="Figure"
          className="w-55 md:w-[25rem] relative z-10 mt-10 md:mt-5"
        />
      </div>

      {/* Background name marquee */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none space-y-3 opacity-30 mt-40 md:mt-40">
        <div className="flex animate-marquee-left gap-6">
          {[...Array(10)].map((_, i) => (
            <img key={i} src="/name.png" alt="Name" className="h-10 md:h-36" />
          ))}
        </div>
        <div className="flex animate-marquee-right gap-6">
          {[...Array(10)].map((_, i) => (
            <img key={i} src="/name.png" alt="Name" className="h-10 md:h-36" />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left { animation: marquee-left 25s linear infinite; }
          .animate-marquee-right { animation: marquee-right 25s linear infinite; }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
          .animate-bounce-slow { animation: bounce-slow 1.5s infinite; }
        `}
      </style>
    </section>
  );
};

export default Hero;
