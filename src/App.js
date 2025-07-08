import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './components/header';
import Profile from './components/profile';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';
import Achievements from './components/achievements';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
