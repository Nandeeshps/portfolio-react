import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Preloader from './Preloader';

const ProjectsPageContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
`;

const ProjectsPageTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  position: relative;
  background: #0d0d0d;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
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
  transition: background 0.3s;
  &:hover {
    background: #e67e22;
  }
`;

const moreProjects = [
  // Add more project objects here
];

const ProjectsPage = () => {
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
    <ProjectsPageContainer>
      <ProjectsPageTitle>More Projects</ProjectsPageTitle>
      <ProjectsGrid>
        {moreProjects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectOverlay>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink href={project.livePreview} target="_blank" rel="noopener noreferrer">
                  Live Preview
                </ProjectLink>
                <ProjectLink href={project.seeCode} target="_blank" rel="noopener noreferrer">
                  See Code
                </ProjectLink>
              </ProjectLinks>
            </ProjectOverlay>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsPageContainer>
  );
};

export default ProjectsPage;
