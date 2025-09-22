import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Footer from './Footer'
import Header from './Header'

import Home from './Home'
import Project from './Project'
import Contact from './Contact'

function App() {

  return (
    <div className='bg-[#EFF2F9] w-full min-h-screen overflow-x-hidden'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
