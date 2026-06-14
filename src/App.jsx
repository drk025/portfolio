import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SubjectMaterials from './pages/SubjectMaterials';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjectmaterials" element={<SubjectMaterials />} />
      </Routes>
    </Router>
  );
};

export default App;
