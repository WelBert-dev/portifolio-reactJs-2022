import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';

import HomeScreen from './screens/HomeScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />} >
            <Route path="/" element={<HomeScreen />} exact/>
            {/* <Route path="aboutMe" element={<AboutMeScreen />} />
            <Route path="skills" element={<SkillsScreen />} />
            <Route path="projects" element={<ProjectsScreen />} />
            <Route path="interests" element={<InterestsScreen />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

