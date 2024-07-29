import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import ProjectsPage from './components/ProjectsPage';
import Preloader from './components/Preloader';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Hobbies />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
