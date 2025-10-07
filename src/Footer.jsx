import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ItchIoIcon from "./assets/itch-io.png"
import ItchIoBlack from "./assets/itch-io-black.png"

const Footer = () => {
    return (
        <div className='bg-[#DADEEA]'>
            <footer className="mt-24">
                <div className="container mx-auto px-4 py-10 text-sm flex flex-col items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="opacity-80">
                        Made by Virly Karaniyametta Arista
                    </p>

                    {/* Social Links */}
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                        <a href="https://www.linkedin.com/in/virly-karaniyametta-arista-094919277/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                            <LinkedInIcon fontSize="small" />
                            <span className="text-sm">
                                virly-karaniyametta-arista
                            </span>
                        </a>

                        <a href="https://github.com/Hinakhina" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                            <GitHubIcon fontSize="small" />
                            <span className="text-sm">
                                github.com/Hinakhina
                            </span>
                        </a>
                        <a href="https://akhina.itch.io/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 transition-colors">
                            <img src={ItchIoBlack} alt="Itch.io" className="h-5 w-5 object-contain group-hover:opacity-0" loading="lazy"/>
                            <img src={ItchIoIcon} alt="Itch.io" className="h-5 w-5 object-contain absolute opacity-0 group-hover:opacity-100" loading="lazy"/>
                            <span className="text-sm group-hover:text-white">
                                akhina.itch.io
                            </span>
                        </a>
                        <a href="mailto:virly.k.arista@gmail.com" className="group flex items-center gap-2 hover:text-white transition-colors">
                            <EmailIcon fontSize="small" />
                            <span className="text-sm">virly.k.arista@gmail.com</span>
                        </a>
                    </div>

                    {/* Built with */}
                    <p className="opacity-60 text-xs">
                        Built with React & Tailwind CSS
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
