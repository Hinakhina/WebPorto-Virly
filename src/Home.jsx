import React, { useState, useEffect, useCallback, useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import ItchIoIcon from "./assets/itch-io.png"

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CVIcon from "@mui/icons-material/Description";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Watchmen from "./assets/Watchmen/Watchmen.jpg"
import MarchFlower from "./assets/MarchFlowerAprilShower/MarchFlowersAprilShower.png"
import TebakGambar from "./assets/TebakGambar/TebakGambar.png"
import NightMaze from "./assets/NightMaze/NightMaze.png"
import TeaHaven from "./assets/TeaHaven/TeaHaven.png"
import LitterFlipper from "./assets/LitterFlipper/LitterFlipper.png"
import Willify from "./assets/Willify/Willify.png"

const projects = [
  {
    title: "NightMaze - 3D Horror Survival Game",
    subtitle: "Game Developer - Unity/3D/C#",
    image: NightMaze,
  },
  {
    title: "Tea Haven - 2D Tea Shop Simulator Game",
    subtitle: "Game Programmer - Unity/2D/C#",
    image: TeaHaven,
  },
  {
    title: "Litter Flipper - 2D Cleanup Game",
    subtitle: "Game Programmer - Unity/2D/C#",
    image: LitterFlipper,
  },
  {
    title: "Willify - Music Platform",
    subtitle: "Front End Developer - HTML/CSS/JS",
    image: Willify,
  },
];

const Home = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  const nextProject = useCallback(
    () => setCurrentProject((p) => (p + 1) % projects.length),
    []
  );
  const prevProject = useCallback(
    () => setCurrentProject((p) => (p - 1 + projects.length) % projects.length),
    []
  );
  const goTo = useCallback((idx) => setCurrentProject(idx), []);

  // Keyboard ← / → navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextProject, prevProject]);

  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(nextProject, 2000);
    return () => clearInterval(autoplayRef.current);
  }, [isPaused, nextProject]);

  const p = projects[currentProject];

  return (
    <div>
      <Header />
      <section className="bg-[#EFF2F9] py-12 pr-3 w-screen min-h-screen overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-5">
          {/* Header card */}
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
                src="/images/profile.jpg"
                alt="Virly Karaniyametta Arista"
                className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover ring-2 ring-white/30 shadow-lg"
                loading="lazy"
              />
            </div>
          </div>

          {/* Know Me More */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Know Me More</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#96B1DE] px-5 py-2 shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out"
              >
                <LinkedInIcon fontSize="small" className="text-white" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>

              <a
                href="https://www.github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7692C4] px-5 py-2 shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out"
              >
                <GitHubIcon fontSize="small" className="text-white" />
                <span className="text-white font-medium">GitHub</span>
              </a>

              <a
                href="https://itch.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#6A739C] px-5 py-2 shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out"
              >
                <img
                  src={ItchIoIcon}
                  alt="Itch.io"
                  className="h-[18px] w-[18px] object-contain"
                  loading="lazy"
                />
                <span className="text-white">Itch.io</span>
              </a>

              <a
                href="/Virly-CV.pdf"
                className="inline-flex items-center gap-2 rounded-lg bg-[#444444] px-5 py-2 shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out"
              >
                <CVIcon fontSize="small" className="text-white" />
                <span className="font-medium text-white">Curriculum Vitae</span>
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Projects</h2>
              <Link to="/project">
                <span className="text-black hover:font-semibold hover:underline">
                  (see details)
                </span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-5 md:px-15 md:py-10 shadow-sm">
              <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* FRAME */}
                <div className="relative rounded-2xl bg-[#6A739C] p-3 md:p-4 mb-6">
                  {/* Inner “photo” area with enforced aspect ratio */}
                  <div className="relative mx-auto w-full md:w-[80%] lg:w-[65%] rounded-xl overflow-hidden bg-white/10 ring-1 ring-white/30 shadow-lg">
                    <div className="relative w-full aspect-[16/8]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                        loading="lazy"
                        key={p.image}
                      />
                    </div>
                  </div>

                  {/* Prev / Next */}
                  <button
                    onClick={prevProject}
                    aria-label="Previous project"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg transition-colors hover:bg-white/10"
                  >
                    <ChevronLeftIcon fontSize="medium" />
                  </button>
                  <button
                    onClick={nextProject}
                    aria-label="Next project"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg transition-colors hover:bg-white/10"
                  >
                    <ChevronRightIcon fontSize="medium" />
                  </button>
                </div>

                {/* Title + indicators */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">{p.title}</h3>
                  <p className="text-gray-500">{p.subtitle}</p>

                  {/* Dots */}
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {projects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2.5 w-2.5 rounded-full transition-all ${
                          i === currentProject
                            ? "bg-[#6A739C] w-6"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              Tip: use ← / → keys to navigate projects. Hover to pause autoplay.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
