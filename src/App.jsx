import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './ContactPage/ContactPage';
import MainContent from './MainContent/MainContent'
import Nav from './Nav/Nav'


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
