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

import Iccsci from "./assets/Certificates/ICCSCI Authors Certificate.png"
import AgateCourse from "./assets/Certificates/AI Game Prog AGATE Academy Batch 7 Certificate.png"
import PortJam from "./assets/Certificates/IGGI Portfolio Jam Certificate.png"
import Readiness from "./assets/Certificates/Binus Professional Readiness Camp Certificate.png"
import IbmClass from "./assets/Certificates/Sertifikat IBM Wave 4 Certificate.png"
import IntroC from "./assets/Certificates/Intro to C Certificate.png"
import Binar from "./assets/Certificates/Business Intelligence Bina 101 Caertificate.png"
import Ilpc from "./assets/Certificates/ILPC Participant Certificate.png"

const ProjectsList = [
  {
    title: "Watchmen - 2D Shooting Game",
    subtitle: "Game Programmer - Ren'Py/Python(.rpy)",
    image: Watchmen,
  },
  {
    title: "March Flower April Shower - Visual Novel Game",
    subtitle: "Game Programmer - Ren'Py/Python(.rpy)",
    image: MarchFlower,
  },
  {
    title: "Tebak Gambar - Educational Game",
    subtitle: "Game Developer - Unity/2D/C#",
    image: TebakGambar,
  },
  {
    title: "Night Maze - 3D Horror Survival Game",
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

const CertificatesList = [
  {
    title: "Vision-Based Hand Gesture Recognition as an Accessible Alternative to Conventional Game Input for Players with Disabilities",
    subtitle: "Research Paper's Author - ICCSCI 2025 - Conference Presentation",
    image: Iccsci,
  },
  {
    title: "Watchmen Development - 2D Shooting Game",
    subtitle: "Portfolio Jam - Indie Games Group Indonesia",
    image: PortJam,
  },
  {
    title: "\"Night Maze\" Development - 3D Horror Survival Game",
    subtitle: "AI Game Programming Course - AGATE Academy Batch 7",
    image: AgateCourse,
  },
  {
    title: "Program - Professional Readiness Camp",
    subtitle: "Binus University",
    image: Readiness,
  },
  {
    title: "Class - Code Generation and Optimization Class",
    subtitle: "IBM class Wave 4 - Student Developer Initiative - Hacktiv8",
    image: IbmClass,
  },
  {
    title: "Competition - ILPC's Participant",
    subtitle: "Informatics Logical Programming Competition 2023",
    image: Ilpc,
  },
  {
    title: "Class - Basic Programming in C",
    subtitle: "Binus University 2022",
    image: IntroC,
  },
  {
    title: "Webinar - Business Intellligence 101: The Power of Insight",
    subtitle: "Binar101 - Binar",
    image: Binar,
  },
];

function useCarousel(list, autoPlay = true, delay = 2000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % list.length);
  }, [list]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + list.length) % list.length);
  }, [list]);

  const goTo = useCallback((idx) => setCurrentIndex(idx), []);

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isPaused) return;
    autoplayRef.current = setInterval(next, delay);
    return () => clearInterval(autoplayRef.current);
  }, [autoPlay, delay, isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return {
    item: list[currentIndex],
    index: currentIndex,
    next,
    prev,
    goTo,
    setIsPaused,
  };
}

const Home = () => {
  const projectCarousel = useCarousel(ProjectsList);
  const certCarousel = useCarousel(CertificatesList); // no autoplay

  const projects = projectCarousel.item;
  const certificates = certCarousel.item;

  return (
    <div className="bg-[#EFF2F9] min-h-screen overflow-x-hidden">
      <Header />
      <section className="py-12 px-5 md:pl-30 md:pr-33">
        <div className="max-w-6xl mx-auto">
          {/* Header card */}
          <div className="relative mb-12 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden rounded-3xl p-6 md:p-10 bg-gradient-to-b from-[#96B1DE] via-[#7692C4] to-[#6A739C]">
            <div className="text-white max-w-2xl">
              <p className="text-4xl md:text-5xl font-bold mb-4">
                Virly Karaniyametta Arista
              </p>
              <p className="text-white">
                I am a Computer Science undergraduate student at Bina Nusantara University with 
                a strong passion in programming, particularly in game development, AI-driven software, and front-end develoopment. 
                I've actively explored various areas of software development to sharpen my technical skills and 
                problem-solving mindset. I've developed several games and interactive projects using Unity, Ren'Py, Godot, React.js, and other web technologies. 
                Beyond technical skills, I actively engage in organizational work and collaborative environments, developing a balance of leadership, 
                communication, and project coordination. I strive to create meaningful digital experiences 
                while continuously growing through hands-on practice and teamwork.
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
                href="https://www.linkedin.com/in/virly-karaniyametta-arista-094919277/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#96B1DE] px-5 py-2 shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out"
              >
                <LinkedInIcon fontSize="small" className="text-white" />
                <span className="text-white font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Hinakhina"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7692C4] px-5 py-2 shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out"
              >
                <GitHubIcon fontSize="small" className="text-white" />
                <span className="text-white font-medium">GitHub</span>
              </a>

              <a
                href="https://akhina.itch.io/"
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
                href='/VirlyKaraniyamettaArista_CV_ATS.pdf' target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#444444] px-5 py-2 shadow-md hover:shadow-xl transition-shadow duration-100 ease-in-out"
              >
                <CVIcon fontSize="small" className="text-white" />
                <span className="font-medium text-white">Curriculum Vitae</span>
              </a>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Projects</h2>
              <Link to="/project">
                <span className="text-black hover:font-semibold hover:underline">
                  (see details)
                </span>
              </Link>
            </div>

            <div
              className="bg-white rounded-2xl p-5 md:px-15 md:py-10 shadow-sm relative"
              onMouseEnter={() => projectCarousel.setIsPaused(true)}
              onMouseLeave={() => projectCarousel.setIsPaused(false)}
            >
              {/* Image */}
              <div className="rounded-2xl bg-[#6A739C] p-3 md:p-4 mb-6 relative">
                <div className="relative mx-auto w-full md:w-[80%] lg:w-[65%] rounded-xl overflow-hidden bg-white/10 ring-1 ring-white/30 shadow-lg">
                  <div className="relative w-full aspect-[16/8]">
                    {ProjectsList.map((project, index) => (
                      <img
                        key={project.image}
                        src={project.image}
                        alt={project.title}
                        className={`
                          absolute inset-0 h-full w-full object-cover
                          transition-opacity duration-700 ease-in-out
                          ${index === projectCarousel.index ? "opacity-100" : "opacity-0"}
                        `}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
                {/* Buttons */}
                <button
                  onClick={projectCarousel.prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg hover:bg-white/10"
                >
                  <ChevronLeftIcon fontSize="medium" />
                </button>
                <button
                  onClick={projectCarousel.next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg hover:bg-white/10"
                >
                  <ChevronRightIcon fontSize="medium" />
                </button>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold transition text-gray-800">{projects.title}</h3>
                <p className="text-gray-500">{projects.subtitle}</p>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {ProjectsList.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => projectCarousel.goTo(i)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        i === projectCarousel.index
                          ? "bg-[#6A739C] w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="mb-15">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Certificates
            </h2>

            <div className="bg-white rounded-2xl p-5 md:px-15 md:py-10 shadow-sm relative">
              <div className="rounded-2xl bg-[#6A739C] p-3 md:p-4 mb-6 relative">
                <div className="relative mx-auto w-full md:w-[80%] lg:w-[65%] rounded-xl overflow-hidden bg-white/10 ring-1 ring-white/30 shadow-lg">
                  <div className="relative w-full flex justify-center">
                    <img
                      src={certificates.image}
                      alt={certificates.title}
                      className="rounded-xl h-auto max-w-full object-cover transition-opacity duration-500"
                    />
                  </div>
                </div>
                <button
                  onClick={certCarousel.prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg hover:bg-white/10"
                >
                  <ChevronLeftIcon fontSize="medium" />
                </button>
                <button
                  onClick={certCarousel.next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-lg hover:bg-white/10"
                >
                  <ChevronRightIcon fontSize="medium" />
                </button>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">{certificates.title}</h3>
                <p className="text-gray-500">{certificates.subtitle}</p>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {CertificatesList.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => certCarousel.goTo(i)}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        i === certCarousel.index
                          ? "bg-[#6A739C] w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
