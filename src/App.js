import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import Header from "./components/header";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Achievements from "./components/achievements";
import HexagonParticles from "./components/background";
import Background from "./components/background";


function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Profile />
      <Projects />
      <Achievements />
      <Skills />
      <Footer />
    </div>
  )
}

export default App;
