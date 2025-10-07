import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import ItchIoBlack from "./assets/itch-io-black.png";

import Watchmen from "./assets/Watchmen/Watchmen.jpg";
import MarchFlower from "./assets/MarchFlowerAprilShower/MarchFlowersAprilShower.png";
import WebtoonRecommendationSystem from "./assets/WebtoonRecommendationSystem/WebtoonRecommendationSystem1.png";
import TebakGambar from "./assets/TebakGambar/TebakGambar.png";
import NightMaze from "./assets/NightMaze/NightMaze.png";
import TeaHaven from "./assets/TeaHaven/TeaHaven.png";
import LitterFlipper from "./assets/LitterFlipper/LitterFlipper.png";
import Willify from "./assets/Willify/Willify.png";

// Auto-import all images from a folder (alphabetically)
const watchmenFolder = import.meta.glob(
  "./assets/Watchmen/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const watchmenGallery = Object.keys(watchmenFolder).sort().map((k) => watchmenFolder[k]);

const litterFlipperFolder = import.meta.glob(
  "./assets/LitterFlipper/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const litterFlipperGallery = Object.keys(litterFlipperFolder).sort().map((k) => litterFlipperFolder[k]);

const marchFlowersFolder = import.meta.glob(
  "./assets/MarchFlowerAprilShower/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const marchFlowersGallery = Object.keys(marchFlowersFolder).sort().map((k) => marchFlowersFolder[k]);

const teaHavenFolder = import.meta.glob(
  "./assets/TeaHaven/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const teaHavenGallery = Object.keys(teaHavenFolder).sort().map((k) => teaHavenFolder[k]);

const nightMazeFolder = import.meta.glob(
  "./assets/NightMaze/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const nightMazeGallery = Object.keys(nightMazeFolder).sort().map((k) => nightMazeFolder[k]);

const tebakGambarFolder = import.meta.glob(
  "./assets/TebakGambar/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const tebakGambarGallery = Object.keys(tebakGambarFolder).sort().map((k) => tebakGambarFolder[k]);

const willifyFolder = import.meta.glob(
  "./assets/Willify/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const willifyGallery = Object.keys(willifyFolder).sort().map((k) => willifyFolder[k]);

const webtoonFolder = import.meta.glob(
  "./assets/WebtoonRecommendationSystem/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, as: "url" }
);
const webtoonGallery = Object.keys(webtoonFolder).sort().map((k) => webtoonFolder[k]);

const projects = [
    {
        title: "Watchmen - 2D Shooting Game",
        text: "Watchmen is a survival-action shooter built with Godot (GDScript) during a one-month Portfolio Jam in a 5 members team hosted by Indie Games Group Indonesia. As one of two programmers, I implemented the UI/UX flow, HUD, narrative setup, audio integration, and some of the core gameplay systems, including player controller, shooting mechanics, item pickups, currency systems, and scoring systems. Task and timeline management was conducted in Notion, and collaborative coding was managed through GitHub, enabling efficient progress tracking and stable builds under tight deadlines.",
        image: Watchmen,
        gallery: watchmenGallery,
        github: "https://github.com/deutandev/survival-shooter",
        itch: "https://deutandev.itch.io/watchmen"
    },
    {
        title: "March Flower April Shower - Visual Novel Game",
        text: "“March Flowers, April Showers: You Were Gone by the Summer's” is a cozy visual novel developed using Ren’Py as part of my university Software Engineering Course’s final project. This project is a mandatory group project, where i worked as the game programmer and my teammates handled the others. As the game programmer, I implemented the story and asset flows created by my teammates using Ren'Py's scripting features. This was my first experience with Ren'Py, so I had to study and understand its tools while working within deadline. We used Scrum methodology, GitHub, and Notion to manage tasks and ensure everyone stayed on track.",
        image: MarchFlower,
        gallery: marchFlowersGallery,
        github: "https://akhina.itch.io/march-flowers-april-showers",
        itch: "https://github.com/Hinakhina/AOL_SE_Sems4"
    },
    {
        title: "Tebak Gambar & Hand Gesture Recognition System - Educational Game",
        text: "Tebak Gambar is a quick image-guessing game in bahasa Indonesia where players choose the right picture based on the name shown. This game is developed in one day by using unity, as an experiment for integrating alternative input systems. I handled the game logic programming and UI programming, also added virtual keyboard input support, allowing the game to work with tools like PyAutoGUI and hand gesture recognition systems—not just standard keyboard or mouse input (DOM's event input).",
        image: TebakGambar,
        gallery: tebakGambarGallery,
        github: "https://github.com/Hinakhina/Tebak-Gambar-Game",
        itch: "https://akhina.itch.io/tebak-gambar"
    },
    {
        title: "Webtoon Recommendation System - Machine Learning Project",
        text: "Webtoon Recommendation Website is a machine learning-based web application created as part of the Machine Learning course project. The system delivers personalized recommendations through an adaptive hybrid model that merges collaborative filtering (LightFM) and semantic similarity (Sentence-BERT). The frontend was developed using Next.js, while the backend utilized Python for model processing and MySQL for managing user login and registration. Collaboration and version control were maintained within a 3-person team, focusing on efficient workflow and system reliability.",
        image: WebtoonRecommendationSystem,
        gallery: webtoonGallery,
        github: "https://github.com/Hinakhina/Webtoon-Recommendation-Website-ML-Project",
    },
    {
        title: "Tea Haven - 2D Tea Shop Simulator Game",
        text: "Tea Haven is a relaxing tea shop simulator where players serve different teas to earn coins before the day ends. This was developed during club activites as a group project (self initiated to join) I worked as a game programmer alongside my partner. I handled UI/UX programming and also implemented key gameplay features such as score calculation, in-game time system, order randomization, cursor handling, player data saving, and scene transitions. We used GitHub for task management and version control, allowing us to divide responsibilities clearly. The main challenge was ensuring smooth team coordination and researching Unity features to implement our gameplay features efficiently.",
        image: TeaHaven,
        gallery: teaHavenGallery,
        github: "https://github.com/Hinakhina/Tea-Haven",
        itch: "https://bgdc.itch.io/tea-haven"
    },
    {
        title: "Night Maze - 3D Horror Survival Game",
        text: "Night Maze is a 3D horror game where players explore a haunted house, collecting orbs and potions while avoiding a ghost. This project is made as the final assignment for the AI Game Programming Course by Agate Academy. This individual project is built in Unity using free assets, where i handled the game programming,  programmed the ghost AI using NavMesh and a finite state machine to enable patrol, chase, and retreat states under the mentor teaching. Aside that, i also handled all the programming and blockout, including the scene, UI/UX, game mechanic, and scoring. While doing this project, i learned how to use new systems effectively while have to finish the project within short deadline.",
        image: NightMaze,
        gallery: nightMazeGallery,
        github: "https://github.com/Hinakhina/Night-Maze-Game",
        itch: "https://akhina.itch.io/night-maze"
    },
    {
        title: "Litter Flipper - 2D Cleanup Game",
        text: "Litter Flipper is a 2D game where players help a penguin clean the ocean by sorting trash, rescuing fish, and avoiding polluters. This group project was created to raise awareness about environmental issues through gameplay during club activities (self initiated to join). I contributed as the game programmer along with my partner. I responsible for UI/UX, score system, sprite animations, and scene transitions, while my partner responsible for the player mechanics. We utilized GitHub for version control to ensure project tracking and collaboration. Throughout the process, I learned how to solve implementation challenges using Unity’s and manage tasks in a team to avoid conflict while aligning the mechanics with the game's concept.",
        image: LitterFlipper,
        gallery: litterFlipperGallery,
        github: "https://github.com/IWantMyLemons/litter-flipper",
        itch: "https://bgdc.itch.io/litter-flipper"
    },
    {
        title: "Willify - Music Platform",
        text: "Willify is a mandatory individual project for university Human-Computer Interaction course, where I worked as UI/UX designer and Front end. I designed and developed a music streaming front-end similar to Spotify, started by creating a mockup in Figma to visualize the UI, then followed by implementing the design using only vanilla HTML, CSS, and JavaScript. The challenge was to ensure consistent user experience without relying on frameworks, so i can apply core frontend principles and pay close attention to interface usability and responsiveness.",
        image: Willify,
        gallery: willifyGallery,
        github: "https://github.com/Hinakhina/FrontEnd-Website-HCI-Project",
    },
];

const Project = () => {
    const [slideIdx, setSlideIdx] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);

    const gallery = selectedProject?.gallery?.length? selectedProject.gallery: selectedProject? [selectedProject.image]: [];

    useEffect(() => {setSlideIdx(0);}, [selectedProject])
    
    useEffect(() => {
        if (!selectedProject) return;
        if (gallery.length < 2) return;
        const id = setInterval(() => {
            setSlideIdx((i) => (i + 1) % gallery.length);
        }, 2500);
        return () => clearInterval(id);
    }, [selectedProject, gallery.length]);

    return (
        <div className="bg-[#EFF2F9] min-h-screen overflow-x-hidden">
            <Header />
            <section className="mt-12 py-12 px-5 md:pl-30 md:pr-33">
                <div className="max-w-6xl mx-auto">
                    <div className="relative mb-12 flex justify-center rounded-3xl p-3 md:p-5 bg-gradient-to-b from-[#96B1DE] via-[#7692C4] to-[#6A739C]">
                        <span className="text-white text-2xl md:text-4xl font-bold">
                            My Projects
                        </span>
                    </div>
                </div>

                {/* Grid of projects */}
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedProject(project)}
                        className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
                    >
                        <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg object-cover h-40 w-full mb-3"
                        />
                        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                        {project.text}
                        </p>
                        <span className="text-sm mt-2 text-sky-600 hover:underline">
                        Read more →
                        </span>
                    </div>
                    ))}
                </div>
            </section>

            {selectedProject && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
                    <div className="bg-white p-4 shadow-xl w-full max-w-xl md:max-w-2xl mx-4 relative max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 z-20 flex justify-end">
                            <button className="text-white hover:bg-[#96B1DE] bg-[#7692C4] rounded-md" onClick={() => setSelectedProject(null)} aria-label="Close">
                                <CloseIcon fontSize="medium" />
                            </button>
                        </div>    

                        <div className="px-5 pb-5 md:px-7 mb:pb-7">
                                <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden bg-gray-50 ring-1 ring-black/5 mb-5">
                                    {gallery.map((src, i) => (
                                        <img key={i} src={src} alt={selectedProject.title} className={`rounded-2xl absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${ i === slideIdx ? "opacity-100" : "opacity-0"}`} loading="eager" fetchPriority="high"/>
                                    ))}
                                </div>
                            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                            <p className="text-gray-700 leading-relaxed">{selectedProject.text}</p>

                            {(selectedProject.github || selectedProject.itch) && (
                                <div className="mt-5 flex flex-wrap items-center gap-4">
                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                                            <GitHubIcon fontSize="small" />
                                            <span className="text-sm font-medium">GitHub</span>
                                        </a>
                                    )}
                                    {selectedProject.itch && (
                                        <a href={selectedProject.itch} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                                            <img src={ItchIoBlack} alt="itch.io" className="h-4 w-4 object-contain" loading="lazy"/>
                                            <span className="text-sm font-medium">itch.io</span>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Project;
