import React from "react";

const designs = [
  { title: "UI Mockups", image: "/designs/ui-mockup.png" },
  { title: "Poster Design", image: "/designs/poster.png" },
  { title: "Logo Collection", image: "/designs/logos.png" },
  { title: "Illustration", image: "/designs/illustration.png" },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-[#080c0f] text-zinc-200">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Graphic Design</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {designs.map((design, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden bg-[#111518] shadow-md"
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-sm font-medium">{design.title}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-zinc-400">
          More works available on request ✨
        </p>
      </div>
    </section>
  );
};

export default Gallery;
