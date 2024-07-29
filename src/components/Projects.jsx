import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  color: #f39c12;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 90%;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  position: relative;
  background: #0d0d0d;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 70vw;
  height:70vh;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px #f39c12;
  }
`;

const ProjectImage = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
  margin: 10px;
  transition: opacity 0.3s;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: 'Georgia', serif;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-family: 'Verdana', sans-serif;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const ProjectLink = styled.a`
  background: #f39c12;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s;
  &:hover {
    background: #e67e22;
    transform: scale(1.1);
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #f39c12;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    color: #fff;
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

const SeeMoreButton = styled(Link)`
  background: #f39c12;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  transition: background 0.3s;
  &:hover {
    background: #e67e22;
  }
`;

const projects = [
  {
    image: 'https://private-user-images.githubusercontent.com/118623264/259726896-9af6eb83-0740-40c2-b82d-cfa5b2d24ae1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjIwMDQ2MjksIm5iZiI6MTcyMjAwNDMyOSwicGF0aCI6Ii8xMTg2MjMyNjQvMjU5NzI2ODk2LTlhZjZlYjgzLTA3NDAtNDBjMi1iODJkLWNmYTViMmQyNGFlMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyNlQxNDMyMDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kM2UxZDIxOGY3ZjQyNmY2MTcyMjYyZGU0Y2YyYmQ1ZGM4YmVjNTBhM2NiODkxYTcwMDFjOWRlYjBiMGUzMmZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.Sn5QDyc5CoKHpq-X_hRi53Ow9sKCabpAZT70juvUB8o',
    title: 'EuphoriaFM: music recommendation system',
    description: "This system combines mood recognition through facial recognition and song recommendation to develop a mood-adaptive song recommendation system. The system recognizes the user's mood and recommends songs accordingly.Output is in the form of a Search query in youtube",
    livePreview: 'https://live-preview-link1.com',
    seeCode: 'https://github.com/Nandeeshps/EUPHORIA-FM-',
  },
  {
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXy8Hou_OmhpO5ZRtqxH2H5LjRYNvQYrBBAYyzgW4iTs2um-SaWiAN_xVO48N9qgCLKeHV4mVaa3XTcEk440aiHZpYxA1aCjP3R5w3Dc1Dlm3VhZYx8729c1xZDLrXaWBj5X1z3KdMN514/s1600/Untitled.png',
    title: 'Connect 4 Game',
    description: 'This Java-based Connect Four game is a classic two-player board game implemented with a simple console interface. The game features a 7x6 grid where players take turns dropping discs into columns, aiming to connect four of their discs in a row either horizontally, vertically, or diagonally. The game detects win and draw conditions and updates the board after each move. To get started, clone the repository, compile the ConnectFour.java file, and run the game to enjoy a straightforward, interactive gaming experience.',
    livePreview: 'https://github.com/Nandeeshps/Connect4-game-using-java',
    seeCode: 'https://github.com/Nandeeshps/Connect4-game-using-java',
  },
  {
    image: '/Screenshot 2024-07-26 at 8.52.05 PM.png',
    title: 'MAS---Movie-Anime-Series-website',
    description: "This project features a web application for exploring and managing a diverse database of movies, anime, and TV series. The site allows users to browse detailed entries for each category, including information such as titles, genres, release dates, and ratings. Users can search and filter content, view synopses, and access additional details like cast and trailers. The platform also supports adding, updating, and removing entries, providing an interactive and up-to-date resource for entertainment enthusiasts.",
    livePreview: 'https://visionary-lokum-13f7eb.netlify.app/',
    seeCode: 'https://github.com/Nandeeshps/MAS---Movie-Anime-Series-website-',
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
      }, 5000); // Auto-slide every 10 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handlePrevClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <ProjectsContainer id="projects">
      <ProjectsTitle>Projects</ProjectsTitle>
      <CarouselContainer>
        <PrevButton onClick={handlePrevClick}>
          <FaArrowLeft />
        </PrevButton>
        <ProjectCard
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProjectImage src={currentProject.image} alt={currentProject.title} />
          <ProjectOverlay>
            <ProjectTitle>{currentProject.title}</ProjectTitle>
            <ProjectDescription>{currentProject.description}</ProjectDescription>
            <ProjectLinks>
              <ProjectLink href={currentProject.livePreview} target="_blank" rel="noopener noreferrer">
                Live Preview
              </ProjectLink>
              <ProjectLink href={currentProject.seeCode} target="_blank" rel="noopener noreferrer">
                See Code
              </ProjectLink>
            </ProjectLinks>
          </ProjectOverlay>
        </ProjectCard>
        <NextButton onClick={handleNextClick}>
          <FaArrowRight />
        </NextButton>
      </CarouselContainer>
      <SeeMoreButton to="/projects">See More</SeeMoreButton>
    </ProjectsContainer>
  );
};

export default Projects;
