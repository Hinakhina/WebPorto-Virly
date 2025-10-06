import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import Watchmen from "./assets/Watchmen/Watchmen.jpg";
import MarchFlower from "./assets/MarchFlowerAprilShower/MarchFlowersAprilShower.png";
import TebakGambar from "./assets/TebakGambar/TebakGambar.png";
import NightMaze from "./assets/NightMaze/NightMaze.png";
import TeaHaven from "./assets/TeaHaven/TeaHaven.png";
import LitterFlipper from "./assets/LitterFlipper/LitterFlipper.png";
import Willify from "./assets/Willify/Willify.png";

const projects = [
    {
        title: "Watchmen - 2D Shooting Game",
        text: "Watchmen is a survival-action shooter built with Godot (GDScript) during a one-month Portfolio Jam in a 5 members team hosted by Indie Games Group Indonesia. As one of two programmers, I implemented the UI/UX flow, HUD, narrative setup, audio integration, and some of the core gameplay systems, including player controller, shooting mechanics, item pickups, currency systems, and scoring systems. Task and timeline management was conducted in Notion, and collaborative coding was managed through GitHub, enabling efficient progress tracking and stable builds under tight deadlines.",
        image: Watchmen,
    },
    {
        title: "March Flower April Shower - Visual Novel Game",
        text: "“March Flowers, April Showers: You Were Gone by the Summer's” is a cozy visual novel developed using Ren’Py as part of my university Software Engineering Course’s final project. This project is a mandatory group project, where i worked as the game programmer and my teammates handled the others. As the game programmer, I implemented the story and asset flows created by my teammates using Ren'Py's scripting features. This was my first experience with Ren'Py, so I had to study and understand its tools while working within deadline. We used Scrum methodology, GitHub, and Notion to manage tasks and ensure everyone stayed on track.",
        image: MarchFlower,
    },
    {
        title: "Tebak Gambar & Hand Gesture Recognition System - Educational Game",
        text: "Tebak Gambar is a quick image-guessing game in bahasa Indonesia where players choose the right picture based on the name shown. This game is developed in one day by using unity, as an experiment for integrating alternative input systems. I handled the game logic programming and UI programming, also added virtual keyboard input support, allowing the game to work with tools like PyAutoGUI and hand gesture recognition systems—not just standard keyboard or mouse input (DOM's event input).",
        image: TebakGambar,
    },
    {
        title: "Tea Haven - 2D Tea Shop Simulator Game",
        text: "Tea Haven is a relaxing tea shop simulator where players serve different teas to earn coins before the day ends. This was developed during club activites as a group project (self initiated to join) I worked as a game programmer alongside my partner. I handled UI/UX programming and also implemented key gameplay features such as score calculation, in-game time system, order randomization, cursor handling, player data saving, and scene transitions. We used GitHub for task management and version control, allowing us to divide responsibilities clearly. The main challenge was ensuring smooth team coordination and researching Unity features to implement our gameplay features efficiently.",
        image: TeaHaven,
    },
    {
        title: "Night Maze - 3D Horror Survival Game",
        text: "Night Maze is a 3D horror game where players explore a haunted house, collecting orbs and potions while avoiding a ghost. This project is made as the final assignment for the AI Game Programming Course by Agate Academy. This individual project is built in Unity using free assets, where i handled the game programming,  programmed the ghost AI using NavMesh and a finite state machine to enable patrol, chase, and retreat states under the mentor teaching. Aside that, i also handled all the programming and blockout, including the scene, UI/UX, game mechanic, and scoring. While doing this project, i learned how to use new systems effectively while have to finish the project within short deadline.",
        image: NightMaze,
    },
    {
        title: "Litter Flipper - 2D Cleanup Game",
        text: "Litter Flipper is a 2D game where players help a penguin clean the ocean by sorting trash, rescuing fish, and avoiding polluters. This group project was created to raise awareness about environmental issues through gameplay during club activities (self initiated to join). I contributed as the game programmer along with my partner. I responsible for UI/UX, score system, sprite animations, and scene transitions, while my partner responsible for the player mechanics. We utilized GitHub for version control to ensure project tracking and collaboration. Throughout the process, I learned how to solve implementation challenges using Unity’s and manage tasks in a team to avoid conflict while aligning the mechanics with the game's concept.",
        image: LitterFlipper,
    },
    {
        title: "Willify - Music Platform",
        text: "Willify is a mandatory individual project for university Human-Computer Interaction course, where I worked as UI/UX designer and Front end. I designed and developed a music streaming front-end similar to Spotify, started by creating a mockup in Figma to visualize the UI, then followed by implementing the design using only vanilla HTML, CSS, and JavaScript. The challenge was to ensure consistent user experience without relying on frameworks, so i can apply core frontend principles and pay close attention to interface usability and responsiveness.",
        image: Willify,
    },
];

const Project = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="bg-[#EFF2F9] min-h-screen overflow-x-hidden">
            <Header />
            <section className="py-12 px-5 md:pl-30 md:pr-33">
                <div className="max-w-6xl mx-auto">
                    <div className="relative mb-12 flex justify-center rounded-3xl p-3 md:p-5 bg-gradient-to-b from-[#96B1DE] via-[#7692C4] to-[#6A739C]">
                        <span className="text-white text-2xl md:text-4xl font-bold">
                            My Projects
                        </span>
                    </div>
                </div>

                {/* Grid of projects */}
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((p, i) => (
                    <div
                        key={i}
                        onClick={() => setSelected(p)}
                        className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
                    >
                        <img
                        src={p.image}
                        alt={p.title}
                        className="rounded-lg object-cover h-40 w-full mb-3"
                        />
                        <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                        {p.text}
                        </p>
                        <span className="text-sm mt-2 text-sky-600 hover:underline">
                        Read more →
                        </span>
                    </div>
                    ))}
                </div>
            </section>

            {/* Modal Popup */}
            {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
                <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>
                <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                <p className="text-gray-700 whitespace-pre-line">{selected.text}</p>
                </div>
            </div>
            )}

            <Footer />
        </div>
    );
};

export default Project;
