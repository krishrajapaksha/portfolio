import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

const WorkDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-[#080c0f] text-zinc-200 min-h-screen flex items-center justify-center">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#080c0f] text-zinc-200">
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-6 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-200 mb-6">
          {project.title}
        </h1>
        <p className="uppercase tracking-widest text-sm text-zinc-500 mb-8">
          {Array.isArray(project.category) ? project.category.join(" / ") : project.category}
        </p>

        {project.imageH && (
          <img
            src={project.imageH}
            alt={project.title}
            className="w-full max-w-4xl mx-auto shadow-lg"
          />
        )}
      </section>

      {/* Overview */}
      <section className="px-6 md:px-6 py-16 max-w-4xl mx-auto pt-0">
        <h2 className="text-2xl font-semibold mb-6 tracking-widest">OVERVIEW</h2>
        <p className="text-lg opacity-80 leading-relaxed mb-8 text-justify">
          {project.overview}
        </p>

        <div className="grid sm:grid-cols-3 gap-6 text-sm">
          {project.role && (
            <div>
              <h3 className="font-bold text-zinc-200 mb-2 tracking-widest">
                ROLE
              </h3>
              <div className="h-1 w-24 md:w-12 bg-cyan-400 mb-4 md:mx-0"></div>
              <p>{project.role}</p>
            </div>
          )}

          {project.timeline && (
            <div>
              <h3 className="font-bold text-zinc-200 mb-2 tracking-widest">
                TIMELINE
              </h3>
              <div className="h-1 w-24 md:w-12 bg-cyan-400 mb-4 md:mx-0"></div>
              <p>{project.timeline}</p>
            </div>
          )}

          {project.tools && (
            <div>
              <h3 className="font-bold text-zinc-200 mb-2 tracking-widest">
                TOOLS
              </h3>
              <div className="h-1 w-24 md:w-12 bg-cyan-400 mb-4 md:mx-0"></div>
              {Array.isArray(project.tools) ? (
                <ul className="list-disc list-inside text-zinc-400 space-y-1">
                  {project.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.tools}</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Process */}
      {project.process && (
        <section className="px-6 md:px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-2xl text-zinc-200 font-semibold mb-6 tracking-widest">
            PROCESS
          </h2>
          {Array.isArray(project.process) ? (
            <ol className="list-decimal list-inside space-y-4 text-justify opacity-80">
              {project.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          ) : (
            <p className="opacity-80 text-justify">{project.process}</p>
          )}
        </section>
      )}

      {/* Gallery */}
      {project.gallery && (
        <section className="px-6 md:px-6 py-16 max-w-6xl mx-auto">
          <h2 className="text-2xl text-zinc-200 font-semibold mb-6 tracking-widest">
            GALLERY
          </h2>
          {Array.isArray(project.gallery) && project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  className="shadow-lg"
                />
              ))}
            </div>
          ) : (
            <p className="opacity-80">No gallery available.</p>
          )}
        </section>
      )}

      {/* Outcome */}
      {project.outcome && (
        <section className="px-6 md:px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-2xl text-zinc-200 font-semibold mb-6 tracking-widest">
            OUTCOME
          </h2>
          {Array.isArray(project.outcome) ? (
            <ul className="list-disc list-inside space-y-4 text-justify opacity-80">
              {project.outcome.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          ) : (
            <p className="opacity-80 text-justify">{project.outcome}</p>
          )}
        </section>
      )}

      {/* Back Button */}
      <section className="text-center py-12 pb-30">
        <Link
          to="/"
          className="mt-4 px-6 py-3 border-2 border-zinc-200 text-zinc-200 font-semibold hover:border-cyan-400 transition tracking-widest inline-flex items-center gap-2"
        >
          <span className="material-symbols-rounded text-zinc-200">
            arrow_back
          </span>
          BACK TO ALL WORKS
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default WorkDetail;
