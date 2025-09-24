import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  const figureRef = useRef(null);
  const targetY = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      targetY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    const smoothParallax = () => {
      currentY.current += (targetY.current - currentY.current) * 0.1;

      if (figureRef.current) {
        const translateY = currentY.current * 0.2;
        figureRef.current.style.transform = `translateY(${translateY}px)`;
      }

      requestAnimationFrame(smoothParallax);
    };
    requestAnimationFrame(smoothParallax);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-page bg-[#080c0f] text-zinc-200">
      <Header />

      {/* Hero Section */}
<section className="relative flex flex-col-reverse md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-35 pt-0 md:pt-0 text-center md:text-left">
  {/* Left content */}
  <div className="flex flex-col items-center md:items-start max-w-xl z-20 space-y-5">
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-cyan-400">
      Krishan Rajapaksha
    </h1>

    <p className="text-sm sm:text-base md:text-lg opacity-90 text-justify">
      Aspiring UI/UX Designer, currently completing a Higher National Diploma
      in Information Systems. I have worked on diverse projects, including an
      AR Alphabet Learning App, an AR-enabled Furniture E-Commerce platform,
      and process automation using UiPath.
    </p>
    <p className="text-base md:text-lg opacity-90 text-justify">
      I focus on bridging visual design with usability to deliver seamless
      digital experiences. With a strong interest in UI/UX, I am building
      expertise in interaction design, user-centered research, and modern
      front-end tools, preparing for a career in the design and technology
      industry.
    </p>
    <p className="text-base md:text-lg opacity-90 text-justify">
      Outside my studies, I explore graphic design, experiment with emerging
      technologies, and enjoy creative pursuits that fuel my design thinking.
    </p>

    {/* CV Download Button */}
    <a
      href="/Krishan_Rajapaksha.pdf"
      download
      className="mt-4 px-6 py-3 border-2 border-zinc-200 text-zinc-200 font-semibold hover:border-cyan-400 transition tracking-widest"
    >
      DOWNLOAD CV
    </a>
  </div>



        {/* Right image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            ref={figureRef}
            src="/figure1.png"
            alt="Figure"
            className="w-[70%] sm:w-[60%] md:w-[26rem] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto relative z-10 will-change-transform"
          />
        </div>

      </section>

      {/* Horizontal Line */}
      <hr className="border-t border-zinc-700 my-16 mx-6 md:mx-16" />

      {/* Info Table Section */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left">
          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2 tracking-widest">EDUCATION</h3>
            <div className="h-1 w-12 bg-cyan-400 mb-4"></div>
            <ul className="opacity-80 text-sm space-y-2">
              <li>
                Higher National Diploma in Information Systems <br />
                <span className="text-xs text-zinc-400">NIBM</span>
              </li>
              <li>
                Diploma in Software Engineering <br />
                <span className="text-xs text-zinc-400">NIBM</span>
              </li>
            </ul>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2 tracking-widest">DESIGN SKILLS</h3>
            <div className="h-1 w-12 bg-cyan-400 mb-4"></div>
            <ul className="opacity-80 text-sm space-y-1 text-left">
              <li>Branding & Identity</li>
              <li>Creative Direction</li>
              <li>Generative AI</li>
              <li>Innovation</li>
              <li>UI/UX</li>
              <li>Typography</li>
              <li>Concept Development</li>
              <li>Creative Strategy</li>
              <li>Design Thinking</li>
              <li>Design Research</li>
              <li>Illustration</li>
              <li>Packaging</li>
              <li>Design for Sustainability</li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2 tracking-widest">TECHNICAL SKILLS</h3>
            <div className="h-1 w-12 bg-cyan-400 mb-4"></div>
            <ul className="opacity-80 text-sm space-y-1 text-left">
              <li>Figma (Design + Prototyping)</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Lightroom</li>
              <li>CorelDRAW</li>
              <li>CSS3 + HTML5</li>
              <li>Blender</li>
              <li>3ds Max</li>
              <li>AutoCAD</li>
              <li>Unity</li>
              <li>Vuforia</li>
              <li>Python • Java • C#</li>
              <li>Tailwind • MongoDB • UiPath</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-200 mb-2 tracking-widest">
              CERTIFICATIONS
            </h3>
            <div className="h-1 w-12 bg-cyan-400 mb-4"></div>
            <ul className="opacity-80 text-sm space-y-2 text-left">
              <li>Google UX Design Professional Certificate (In Progress – 2/8 completed)</li>
              <li>
                <a
                  href="https://coursera.org/share/c901991fd946734587563bcbb5eaf74c"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 underline"
                >
                  Foundations of User Experience (UX) Design
                </a>
              </li>
              <li>
                <a
                  href="https://coursera.org/share/b339691d267068f9dbe166915d465abd"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 underline"
                >
                  Start the UX Design Process: Empathize, Define, and Ideate
                </a>
              </li>
              <li>Google IT Support Certificate (In Progress)</li>
              <li>Extended Reality (XR) for Everybody – University of Michigan (In Progress)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Thick Horizontal Line */}
      <hr className="border-t-4 border-zinc-700 my-8 mx-6 md:mx-16" />

      {/* Connect & Contact Section */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 pb-20 text-center md:text-left">
        {/* Left: Connect & Contact */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
          {/* Connect */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-zinc-200 tracking-widest">CONNECT</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="https://www.instagram.com/krish_rajapaksha?igsh=MWU5cGZyNHhxa3duaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                Instagram
              </a>
              <a
                href="http://linkedin.com/in/krishan-rajapaksha-626393262"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-zinc-200 tracking-widest">CONTACT</h3>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="mailto:krishanrajapaksha@email.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                krishanrajapaksha@email.com
              </a>
              <a
                href="https://wa.me/94768538466"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                +94 76 853 8466
              </a>
            </div>
          </div>
        </div>

        {/* Right: Button */}
        <div>
          <a
            href="/contact"
            className="px-6 py-3 bg-zinc-200 text-black font-semibold hover:bg-cyan-400 transition tracking-widest"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
