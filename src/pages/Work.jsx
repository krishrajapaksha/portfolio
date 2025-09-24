import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";




const projects = [
  {
    id: 1,
    slug: "magic-abc",
    title: "Magic ABC - AR Alphabet App",
    category: ["AR", "UI/UX"],
    image: "/works/ar-alphabet.jpg",
  },
  {
    id: 2,
    slug: "sl-mart-e-commerce-website",
    title: "SL-Mart - E-Commerce Website",
    category: "WEB",
    image: "/works/sl-mart.jpg",
  },
  {
    id: 3,
    slug: "glazed-ceylon",
    title: "The Glazed Ceylon - Products Branding",
    category: "GRAPHICS",
    image: "/works/glazed-ceylon.jpg",
  },
  {
    id: 4,
    slug: "powerzone",
    title: "PowerZone Gym - Logo & Workout Book Cover Design",
    category: "GRAPHICS",
    image: "/works/powerzone.jpg",
  },
  {
    id: 5,
    slug: "2016-Group",
    title: "Old Boys Association - 2016 Group Logo Design",
    category: "GRAPHICS",
    image: "/works/2016-Group.jpg",
  },
  {
    id: 6,
    slug: "cricketteams",
    title: "Crickets Club - Cricket Teams Logos Re-Design",
    category: "GRAPHICS",
    image: "/works/redesign-2.jpg",
  },
  {
    id: 7,
    slug: "fixpro",
    title: "FixPro - Mobile & Computer Repairing Shop Logo Design",
    category: "GRAPHICS",
    image: "/works/fixpro.jpg",
  },
  {
    id: 8,
    slug: "gazmo",
    title: "Gazmo - Clothing Brand Logo Design",
    category: "GRAPHICS",
    image: "/works/gazmo.jpg",
  },
  {
    id: 9,
    slug: "drawingscraft",
    title: "Hand Drawings & Craft Works",
    category: "GRAPHICS",
    image: "/works/dr-cr.jpg",
  },
];

const categories = ["ALL", "UI/UX", "WEB", "AR", "GRAPHICS"];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const marqueeRef = useRef(null);
  const targetY = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      targetY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    const smoothParallax = () => {
      currentY.current += (targetY.current - currentY.current) * 0.08;
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateY(${currentY.current * 0.1}px)`;
      }
      requestAnimationFrame(smoothParallax);
    };
    requestAnimationFrame(smoothParallax);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter projects for multiple categories
  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeCategory)
            : project.category === activeCategory
        );

  return (
    <div className="work-page bg-[#080c0f] text-zinc-200">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[30vh] md:h-[35vh] text-center px-6 md:px-0">
        <p className="max-w-3xl text-base md:text-2xl">
          Krishan Rajapaksha is an aspiring UX/UI designer and IT professional,
          exploring innovative digital experiences with AR, web, and automation.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="top-0 md:top-0 z-40 py-5 flex justify-center flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 font-semibold transition cursor-pointer tracking-widest ${
              activeCategory === cat
                ? "text-white"
                : "text-zinc-600 hover:text-cyan-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Work Grid */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {filteredProjects.map((project, i) => (
            <Link
              to={`/work/${project.slug}`}
              key={i}
              className="relative group overflow-hidden aspect-square bg-[#111518]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-lg font-bold text-cyan-400">{project.title}</h3>
                <p className="text-sm opacity-80">
                  {Array.isArray(project.category) ? project.category.join(" / ") : project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;