// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaCode, FaDatabase, FaCloud, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';

// const SkillsContainer = styled.section`
//   padding: 50px 20px;
//   background: #1a1a1a;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const SkillsTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 20px;
//   text-align: center;
//   width: 100%;
//   font-family: 'Arial', sans-serif;
//   color: #f39c12;
// `;

// const IconsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-bottom: 20px;
// `;

// const SkillCard = styled.div`
//   background: #0d0d0d;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   cursor: pointer;
//   transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
//   &:hover {
//     transform: scale(1.1);
//     background: #f39c12;
//     box-shadow: 0 0 10px #f39c12;
//   }
// `;

// const SkillIcon = styled.div`
//   font-size: 3rem;
//   color: #f39c12;
// `;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const SkillDetails = styled.div`
//   background: #0d0d0d;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: left;
//   max-width: 600px;
//   width: 100%;
//   animation: ${fadeIn} 0.5s ease-in-out;
//   box-shadow: 0 0 10px #f39c12;
// `;

// const SkillDetailTitle = styled.h3`
//   font-size: 1.8rem;
//   margin-bottom: 10px;
//   color: #f39c12;
//   font-family: 'Arial', sans-serif;
// `;

// const SkillDetailList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const SkillDetailItem = styled.li`
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;
//   font-size: 1.2rem;
//   font-family: 'Arial', sans-serif;
// `;

// const SkillDetailImage = styled.img`
//   width: 40px;
//   height: 40px;
//   margin-right: 10px;
//   border-radius: 5px;
// `;

// const skillsData = {
//   Languages: {
//     icon: <FaCode />,
//     details: [
//       { name: 'C programming', image: '/path-to-c-image.jpg' },
//       { name: 'C++', image: '/path-to-cpp-image.jpg' },
//       { name: 'Java', image: '/path-to-java-image.jpg' },
//       { name: 'Python', image: '/path-to-python-image.jpg' },
//       { name: 'Bash', image: '/path-to-bash-image.jpg' },
//     ],
//   },
//   Database: {
//     icon: <FaDatabase />,
//     details: [
//       { name: 'MySQL', image: '/path-to-mysql-image.jpg' },
//       { name: 'MongoDB', image: '/path-to-mongodb-image.jpg' },
//     ],
//   },
//   'Web Development': {
//     icon: <FaHtml5 />,
//     details: [
//       { name: 'HTML', image: '/path-to-html-image.jpg' },
//       { name: 'CSS', image: '/path-to-css-image.jpg' },
//       { name: 'JavaScript', image: '/path-to-js-image.jpg' },
//       { name: 'PHP', image: '/path-to-php-image.jpg' },
//       { name: 'Angular', image: '/path-to-angular-image.jpg' },
//       { name: 'React', image: '/path-to-react-image.jpg' },
//     ],
//   },
//   'Full Stack Development': {
//     icon: <FaReact />,
//     details: [
//       { name: 'MERN (MongoDB, Express, React, Node.js)', image: '/path-to-mern-image.jpg' },
//     ],
//   },
//   'Operating Systems': {
//     icon: <FaLinux />,
//     details: [
//       { name: 'Linux (Ubuntu, CentOS)', image: '/path-to-linux-image.jpg' },
//     ],
//   },
//   'Cloud Platforms': {
//     icon: <FaAws />,
//     details: [
//       { name: 'Amazon Web Services (AWS)', image: '/path-to-aws-image.jpg' },
//     ],
//   },
//   'Version Control': {
//     icon: <FaGitAlt />,
//     details: [
//       { name: 'Git', image: '/path-to-git-image.jpg' },
//       { name: 'Bitbucket', image: '/path-to-bitbucket-image.jpg' },
//     ],
//   },
// };

// const Skills = () => {
//   const [selectedSkill, setSelectedSkill] = useState(null);

//   return (
//     <SkillsContainer id="skills">
//       <SkillsTitle>Skills</SkillsTitle>
//       <IconsContainer>
//         {Object.keys(skillsData).map((skill) => (
//           <SkillCard key={skill} onClick={() => setSelectedSkill(skill)}>
//             <SkillIcon>{skillsData[skill].icon}</SkillIcon>
//           </SkillCard>
//         ))}
//       </IconsContainer>
//       <b><i>Click on any icon to know more</i></b>
//       {selectedSkill && (
//         <SkillDetails>
//           <SkillDetailTitle>{selectedSkill}</SkillDetailTitle>
//           <SkillDetailList>
//             {skillsData[selectedSkill].details.map((detail, index) => (
//               <SkillDetailItem key={index}>
//                 <SkillDetailImage src={detail.image} alt={detail.name} />
//                 {detail.name}
//               </SkillDetailItem>
//             ))}
//           </SkillDetailList>
//         </SkillDetails>
//       )}
//     </SkillsContainer>
//   );
// };

// export default Skills;




import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode, FaDatabase, FaHtml5, FaReact, FaLinux, FaAws, FaGitAlt } from 'react-icons/fa';

// Import images
import cImage from '../assets/c.png';
import cppImage from '../assets/cpp.png';
import javaImage from '../assets/java.png';
import pythonImage from '../assets/python.png';
import bashImage from '../assets/bash.png';
import mysqlImage from '../assets/mysql.png';
import mongodbImage from '../assets/mongodb.png';
import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import javascriptImage from '../assets/js.png';
import phpImage from '../assets/php.png';
import angularImage from '../assets/angular.png';
import reactImage from '../assets/react.png';
import mernImage from '../assets/express.png';
import linuxImage from '../assets/centos.png';
import awsImage from '../assets/aws.png';
import gitImage from '../assets/git.png';


const SkillsContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  font-family: 'Arial', sans-serif;
  color: #f39c12;
`;

const Disclaimer = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #f39c12;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SkillCard = styled.div`
  background: #0d0d0d;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.1);
    background: #f39c12;
    box-shadow: 0 0 10px #f39c12;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #f39c12;
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

const SkillDetails = styled.div`
  background: #0d0d0d;
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  max-width: 600px;
  width: 100%;
  animation: ${fadeIn} 0.5s ease-in-out;
  box-shadow: 0 0 10px #f39c12;
`;

const SkillDetailTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #f39c12;
  font-family: 'Arial', sans-serif;
`;

const SkillDetailList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillDetailItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: 'Arial', sans-serif;
`;

const SkillDetailImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
`;

const skillsData = {
  Languages: {
    icon: <FaCode />,
    details: [
      { name: 'C programming', image: cImage },
      { name: 'C++', image: cppImage },
      { name: 'Java', image: javaImage },
      { name: 'Python', image: pythonImage },
      { name: 'Bash', image: bashImage },
    ],
  },
  Database: {
    icon: <FaDatabase />,
    details: [
      { name: 'MySQL', image: mysqlImage },
      { name: 'MongoDB', image: mongodbImage },
    ],
  },
  'Web Development': {
    icon: <FaHtml5 />,
    details: [
      { name: 'HTML', image: htmlImage },
      { name: 'CSS', image: cssImage },
      { name: 'JavaScript', image: javascriptImage },
      { name: 'PHP', image: phpImage },
      { name: 'Angular', image: angularImage },
      { name: 'React', image: reactImage },
    ],
  },
  'Full Stack Development': {
    icon: <FaReact />,
    details: [
      { name: 'MERN (MongoDB, Express, React, Node.js)', image: mernImage },
    ],
  },
  'Operating Systems': {
    icon: <FaLinux />,
    details: [
      { name: 'Linux (Ubuntu, CentOS)', image: linuxImage },
    ],
  },
  'Cloud Platforms': {
    icon: <FaAws />,
    details: [
      { name: 'Amazon Web Services (AWS)', image: awsImage },
    ],
  },
  'Version Control': {
    icon: <FaGitAlt />,
    details: [
      { name: 'Git', image: gitImage },
    ],
  },
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <SkillsContainer id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <Disclaimer>Click on any icon to know more</Disclaimer>
      <IconsContainer>
        {Object.keys(skillsData).map((skill) => (
          <SkillCard key={skill} onClick={() => setSelectedSkill(skill)}>
            <SkillIcon>{skillsData[skill].icon}</SkillIcon>
          </SkillCard>
        ))}
      </IconsContainer>
      {selectedSkill && (
        <SkillDetails>
          <SkillDetailTitle>{selectedSkill}</SkillDetailTitle>
          <SkillDetailList>
            {skillsData[selectedSkill].details.map((detail, index) => (
              <SkillDetailItem key={index}>
                <SkillDetailImage src={detail.image} alt={detail.name} />
                {detail.name}
              </SkillDetailItem>
            ))}
          </SkillDetailList>
        </SkillDetails>
      )}
    </SkillsContainer>
  );
};

export default Skills;
