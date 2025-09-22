import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Footer from './Footer'
import Header from './Header'

import Home from './Home'
import Project from './Project'
import Contact from './Contact'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
