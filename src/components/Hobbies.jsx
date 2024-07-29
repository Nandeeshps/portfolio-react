// import React from 'react';
// import styled from 'styled-components';
// import { FaMusic, FaRunning, FaBook, FaGamepad, FaPlane, FaHiking, FaTv, FaLaptopCode, FaBasketballBall } from 'react-icons/fa';

// const HobbiesContainer = styled.section`
//   padding: 50px 20px;
//   background: #1a1a1a;
//   color: #fff;
//   text-align: center;
// `;

// const HobbiesTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// `;

// const HobbiesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3,1fr);
//   gap: 20px;
// `;

// const HobbyCard = styled.div`
//   background: #0d0d0d;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   transition: transform 0.3s, background 0.3s;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.05);
//     background: #f39c12;
//   }
// `;

// const HobbyIcon = styled.div`
//   font-size: 3rem;
//   color: #f39c12;
//   margin-bottom: 10px;
// `;

// const HobbyName = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const HobbyDescription = styled.p`
//   font-size: 1rem;
// `;

// const hobbies = [
//   {
//     name: 'Outdoor and Indoor Games',
//     icon: <FaGamepad />,
//     description: 'Playing various outdoor and indoor games.',
//   },
//   {
//     name: 'Traveling',
//     icon: <FaPlane />,
//     description: 'Traveling to new places.',
//   },
//   {
//     name: 'Reading Manga',
//     icon: <FaBook />,
//     description: 'Reading manga and comics.',
//   },
//   {
//     name: 'Listening to Music',
//     icon: <FaMusic />,
//     description: 'Listening to various genres of music.',
//   },
//   {
//     name: 'Watching Series and Movies',
//     icon: <FaTv />,
//     description: 'Watching new series and movies.',
//   },
//   {
//     name: 'Learning Tech',
//     icon: <FaLaptopCode />,
//     description: 'Learning new things about technology.',
//   },
// ];

// const Hobbies = () => {
//   return (
//     <HobbiesContainer id="hobbies">
//       <HobbiesTitle>Hobbies</HobbiesTitle>
//       <HobbiesGrid>
//         {hobbies.map((hobby, index) => (
//           <HobbyCard key={index}>
//             <HobbyIcon>{hobby.icon}</HobbyIcon>
//             <HobbyName>{hobby.name}</HobbyName>
//             <HobbyDescription>{hobby.description}</HobbyDescription>
//           </HobbyCard>
//         ))}
//       </HobbiesGrid>
//     </HobbiesContainer>
//   );
// };

// export default Hobbies;








import React from 'react';
import styled from 'styled-components';
import { FaMusic, FaRunning, FaBook, FaGamepad, FaPlane, FaHiking, FaTv, FaLaptopCode, FaBasketballBall } from 'react-icons/fa';

const HobbiesContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
`;

const HobbiesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const HobbyCard = styled.div`
  background: #0d0d0d;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s, background 0.3s;
  cursor: pointer;
  clip-path: polygon(
    20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%
  );
  &:hover {
    transform: scale(1.05);
    background: #f39c12;
  }
`;

const HobbyIcon = styled.div`
  font-size: 3rem;
  color: #f39c12;
  margin-bottom: 10px;
`;

const HobbyName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const HobbyDescription = styled.p`
  font-size: 1rem;
`;

const hobbies = [
  {
    name: 'Outdoor and Indoor Games',
    icon: <FaGamepad />,
    description: 'Playing various outdoor and indoor games.',
  },
  {
    name: 'Traveling',
    icon: <FaPlane />,
    description: 'Traveling to new places.',
  },
  {
    name: 'Reading Manga',
    icon: <FaBook />,
    description: 'Reading manga and comics.',
  },
  {
    name: 'Listening to Music',
    icon: <FaMusic />,
    description: 'Listening to various genres of music.',
  },
  {
    name: 'Watching Series and Movies',
    icon: <FaTv />,
    description: 'Watching new series and movies.',
  },
  {
    name: 'Learning Tech',
    icon: <FaLaptopCode />,
    description: 'Learning new things about technology.',
  },
];

const Hobbies = () => {
  return (
    <HobbiesContainer id="hobbies">
      <HobbiesTitle>Hobbies</HobbiesTitle>
      <HobbiesGrid>
        {hobbies.map((hobby, index) => (
          <HobbyCard key={index}>
            <HobbyIcon>{hobby.icon}</HobbyIcon>
            <HobbyName>{hobby.name}</HobbyName>
            <HobbyDescription>{hobby.description}</HobbyDescription>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </HobbiesContainer>
  );
};

export default Hobbies;
