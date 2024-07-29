// import React from 'react';
// import styled from 'styled-components';
// import { FaBriefcase } from 'react-icons/fa';

// const ExperienceContainer = styled.section`
//   padding: 50px 20px;
//   background: #1a1a1a;
//   color: #fff;
//   text-align: center;
// `;

// const ExperienceTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// `;

// const ExperienceGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;

// const ExperienceCard = styled.div`
//   background: #0d0d0d;
//   padding: 20px;
//   border-radius: 10px;
//   width: 300px;
//   text-align: left;
//   transition: transform 0.3s, background 0.3s;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.05);
//     background: #f39c12;
//   }
// `;

// const ExperienceIcon = styled(FaBriefcase)`
//   font-size: 2rem;
//   color: #f39c12;
//   margin-bottom: 10px;
// `;

// const ExperienceCompany = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const ExperienceRole = styled.h4`
//   font-size: 1.2rem;
//   margin-bottom: 10px;
//   color: #f39c12;
// `;

// const ExperienceDuration = styled.p`
//   font-size: 1rem;
//   margin-bottom: 10px;
// `;

// const ExperienceDescription = styled.p`
//   font-size: 1rem;
// `;

// const experiences = [
//   {
//     company: 'Rakuten India Enterprise Private Limited',
//     role: 'Associate System Engineer',
//     duration: '01 August 2024 - Present',
//     description: 'Working on developing and maintaining web applications using React and Node.js.',
//   },
//   {
//     company: 'Rakuten India Enterprise Private Limited',
//     role: 'Technical Intern',
//     duration: '15 Febrary 2024 - 31 July 2024',
//     description: 'Assisted in the development of internal tools and gained experience in full-stack development.',
//   },
// ];

// const Experience = () => {
//   return (
//     <ExperienceContainer id="experience">
//       <ExperienceTitle>Work Experience</ExperienceTitle>
//       <ExperienceGrid>
//         {experiences.map((experience, index) => (
//           <ExperienceCard key={index}>
//             <ExperienceIcon />
//             <ExperienceCompany>{experience.company}</ExperienceCompany>
//             <ExperienceRole>{experience.role}</ExperienceRole>
//             <ExperienceDuration>{experience.duration}</ExperienceDuration>
//             <ExperienceDescription>{experience.description}</ExperienceDescription>
//           </ExperienceCard>
//         ))}
//       </ExperienceGrid>
//     </ExperienceContainer>
//   );
// };

// export default Experience;






import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
`;

const ExperienceTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif;
  color: #f39c12;
`;

const ExperienceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceCard = styled.div`
  background: #0d0d0d;
  padding: 30px;
  border-radius: 15px;
  width: 350px;
  text-align: left;
  transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
    background: #f39c12;
    box-shadow: 0 0 15px #f39c12;
  }
`;

const ExperienceIcon = styled(FaBriefcase)`
  font-size: 2.5rem;
  color: #f39c12;
  margin-bottom: 20px;
`;

const ExperienceCompany = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-family: 'Georgia', serif;
`;

const ExperienceRole = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
  font-family: 'Verdana', sans-serif;
`;

const ExperienceDuration = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-family: 'Verdana', sans-serif;
`;

const ExperienceDescription = styled.p`
  font-size: 1.2rem;
  font-family: 'Verdana', sans-serif;
`;

const experiences = [
  {
    company: 'Rakuten India Enterprise Private Limited',
    role: 'Associate System Engineer',
    duration: '01 August 2024 - Present',
    description: 'Working on developing and maintaining web applications using React and Node.js.',
  },
  {
    company: 'Rakuten India Enterprise Private Limited',
    role: 'Technical Intern',
    duration: '15 February 2024 - 31 July 2024',
    description: 'Assisted in the development of internal tools and gained experience in full-stack development.',
  },
];

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceTitle>Work Experience</ExperienceTitle>
      <ExperienceGrid>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index}>
            <ExperienceIcon />
            <ExperienceCompany>{experience.company}</ExperienceCompany>
            <ExperienceRole>{experience.role}</ExperienceRole>
            <ExperienceDuration>{experience.duration}</ExperienceDuration>
            <ExperienceDescription>{experience.description}</ExperienceDescription>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceContainer>
  );
};

export default Experience;
