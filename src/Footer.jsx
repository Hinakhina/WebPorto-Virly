import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#DADEEA]'>
            <footer className="mt-24 border-t">
                <div className="container mx-auto px-4 py-10 text-sm text-slate-500 flex items-center justify-between gap-4">
                    <p>© {new Date().getFullYear()} Virly Karaniyametta Arista</p>
                    <p className="opacity-80">Built with React & Tailwind CSS</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
