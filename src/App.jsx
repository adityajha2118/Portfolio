import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Research from "./Pages/Research";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from 'framer-motion';
import NotFoundPage from "./Pages/404";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Research />
          <Portofolio />
          <ContactPage />

          {/* AI PORTFOLIO FOOTER */}
          <footer className="bg-transparent">
            <center>
              <hr className="my-4 border-white/10 sm:mx-auto lg:my-6" />
              <span className="block text-sm pb-4 text-gray-500">
                © 2026{" "}
                <span className="text-sky-400 font-medium">
                  Aditya Kumar Jha
                </span>{" "}
                — AI Engineer Portfolio
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer className="bg-transparent">
      <center>
        <hr className="my-4 border-white/10 sm:mx-auto lg:my-6" />
        <span className="block text-sm pb-4 text-gray-500">
          © 2026{" "}
          <span className="text-sky-400 font-medium">
            Aditya Kumar Jha
          </span>{" "}
          — AI Engineer Portfolio
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;