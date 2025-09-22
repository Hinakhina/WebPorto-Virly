import React, { useState, useEffect, useCallback } from "react";
import { Linkedin, Github, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
// import next from './assets/next.png'
// import prev from './assets/prev.png'

import { NavLink, Link } from "react-router-dom";

const projects = [
  {
    title: "Litter Flipper",
    subtitle: "2D Cleanup Game (Unity)",
    image: "/images/projects/litter-flipper.jpg", // <-- replace with your path
  },
  {
    title: "Tea Haven",
    subtitle: "Tea Shop Sim (Unity)",
    image: "/images/projects/tea-haven.jpg",
  },
  {
    title: "FrontEnd Music Platform",
    subtitle: "HTML/CSS/JS",
    image: "/images/projects/hci-music.jpg",
  },
];

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = useCallback(
    () => setCurrentProject((p) => (p + 1) % projects.length),
    []
  );
  const prevProject = useCallback(
    () => setCurrentProject((p) => (p - 1 + projects.length) % projects.length),
    []
  );

  // Keyboard ← / → navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextProject, prevProject]);

  const p = projects[currentProject];

  return (
    <div>
      <Header />
      <section className="bg-[#EFF2F9] py-12 w-screen min-h-screen overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-5">
          {/* Header */}
          <div className="relative mb-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden rounded-3xl p-6 md:p-10 bg-gradient-to-b from-[#96B1DE] via-[#7692C4] to-[#6A739C]">
            <div className="text-white max-w-2xl">
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                Virly Karaniyametta Arista
              </h1>
              <p className="text-white">
                Undergraduate CS student focusing on clean UI, smooth interactions,
                and game programming. Experienced with React, Tailwind, Unity/C#, and
                data visualization.
              </p>
            </div>

            <div className="mt-6 md:mt-0 md:ml-8 shrink-0">
              <img
                src="/images/profile.jpg" // replace
                alt="Virly Karaniyametta Arista"
                className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover ring-2 ring-white/30 shadow-lg"
                loading="loading"
              />
            </div>
          </div>

          {/* Know Me More */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Know Me More</h2>
            <div className="flex flex-wrap gap-10">
              <div className="shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out rounded-lg">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#96B1DE] px-5 py-2"
                >
                  <Linkedin size={18} className="text-white"/>
                  <span className="text-white font-medium">
                    LinkedIn
                  </span>
                </a>
              </div>  
              <div className="shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out rounded-lg">
                <span
                  href="https://www.github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#7692C4] px-5 py-2"
                >
                  <Github size={18} />
                  <span className="text-white font-medium">
                    GitHub
                  </span>
                </span>
              </div>
              <div className="shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out rounded-lg">
                <a
                  href="https://itch.io/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#6A739C] px-5 py-2"
                >
                  <Github size={18} className="text-white font-medium"/>
                  <span className="text-white">
                    Itch.io
                  </span>
                </a>
              </div>
              <div className="shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out rounded-lg">
                <a
                  href="/Virly-CV.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#444444] px-5 py-2"
                >
                  <FileText size={18} className="text-white"/>
                  <span className="font-medium text-white">
                    Curriculum Vitae
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Projects</h2>
                <Link to="/project" className="">
                  <span className="text-black hover:font-semibold hover:underline">
                    (see details)
                  </span>
                </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="relative">
                {/* FRAME: purple gradient with buttons */}
                <div className="relative rounded-2xl bg-[#6A739C] p-3 md:p-4 mb-6">
                  {/* Inner “photo” area with enforced aspect ratio */}
                  <div className="relative mx-auto w-full md:w-[80%] lg:w-[65%] rounded-xl overflow-hidden bg-white/10 ring-1 ring-white/30 shadow-lg">
                    {/* Keep ratio responsively: change aspect here if you want 4:3 or 1:1 */}
                    <div className="relative w-full aspect-[16/9]">
                      {/* Image fills and crops as needed */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <button
                    onClick={prevProject}
                    aria-label="Previous project"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg transition-colors"
                  >
                    <ChevronLeft size={22} />
                    {/* <img src={prev}/> */}
                  </button>
                  <button
                    onClick={nextProject}
                    aria-label="Next project"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg transition-colors"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>

                {/* Title + indicators outside the frame */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">{p.title}</h3>
                  <p className="text-gray-500">{p.subtitle}</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              Tip: use ← / → keys to navigate projects.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
