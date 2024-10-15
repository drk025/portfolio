import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Home from './pages/Home';
import SubjectMaterials from './pages/SubjectMaterials';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home/>
            </>
          }
        />
        {/* Subject Materials Page */}
        <Route path="/subjectmaterials" element={<SubjectMaterials />} />
      </Routes>
    </Router>
  );
};

export default App;
