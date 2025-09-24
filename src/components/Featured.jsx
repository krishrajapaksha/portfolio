/**
 * @copyright Krishan Rajapaksha
 * @license Apache-2.0
 */

import React from "react";
import { motion } from "framer-motion";

const featuredItems = [
  {
    icon: "💻",
    title: "IT Projects",
    description: "AR Apps, E-Commerce, Automation, POS Systems",
  },
  {
    icon: "🎨",
    title: "Graphic Designs",
    description: "Logos, Posters, UI Mockups, Creative Art",
  },
  {
    icon: "🎓",
    title: "Learning",
    description: "Google UX Design, IT Support, XR by University of Michigan",
  },
];

const projectImages = [
  "/ar_app.png",
  "/ecommerce.png",
  "/pos_system.png",
];

const designImages = [
  "/logo_design.png",
  "/poster_design.png",
  "/ui_mockup.png",
];

const Featured = () => {
  return (
    <section
      id="featured"
      className="relative min-h-screen bg-[#111418] px-6 py-20 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Featured Items */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {featuredItems.map(({ icon, title, description }, idx) => (
          <div key={idx} className="bg-zinc-800/50 rounded-xl p-6 flex flex-col items-center gap-2">
            <span className="text-4xl">{icon}</span>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-zinc-400 text-sm">{description}</p>
          </div>
        ))}
      </motion.div>

      {/* Welcome Message */}
      <motion.p
        className="max-w-3xl text-zinc-300 text-base md:text-lg leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Welcome to my portfolio! Here you’ll find my work across software
        development, automation, and design from building AR apps and
        e-commerce platforms to creating engaging UI/UX designs and graphic
        works. My passion lies in solving problems with technology while
        keeping users at the heart of every solution.
      </motion.p>

      {/* Project / Design Visuals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Projects */}
        {projectImages.map((img, idx) => (
          <motion.img
            key={`proj-${idx}`}
            src={img}
            alt={`Project ${idx + 1}`}
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          />
        ))}

        {/* Designs */}
        {designImages.map((img, idx) => (
          <motion.img
            key={`design-${idx}`}
            src={img}
            alt={`Design ${idx + 1}`}
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
