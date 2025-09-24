import React from "react";

const projects = [
  {
    title: "AR Alphabet Learning App",
    description:
      "An interactive AR book for children where scanning letters reveals animated 3D models, voices, and tracing activities.",
    tools: ["Unity", "Vuforia", "3ds Max", "CorelDRAW"],
    link: "#",
    image: "/projects/ar-alphabet.png",
  },
  {
    title: "AR Furniture E-Commerce Website",
    description:
      "A furniture store where customers preview products in real-life environments using WebAR before purchase.",
    tools: ["MongoDB Atlas", "Tailwind", "WebAR"],
    link: "#",
    image: "/projects/ar-furniture.png",
  },
  {
    title: "UiPath Offer Letter Automation",
    description:
      "An RPA solution that automates HR offer letter generation, reducing manual work significantly.",
    tools: ["UiPath Studio"],
    link: "#",
    image: "/projects/uipath.png",
  },
  {
    title: "Drone-Based Rail Track Monitoring (Concept)",
    description:
      "AI-powered drones with night vision and sensors to detect obstacles on railway tracks.",
    tools: ["AI", "IoT", "Thermal Imaging"],
    link: "#",
    image: "/projects/drone-rail.png",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-[#0c0f12] text-zinc-200">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-[#111518] shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="text-sm opacity-80">{proj.description}</p>
                <p className="text-xs text-zinc-400">
                  {proj.tools.join(" • ")}
                </p>
                <a
                  href={proj.link}
                  className="inline-block mt-3 text-sm text-cyan-400 hover:underline"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
