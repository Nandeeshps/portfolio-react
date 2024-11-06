// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// const EducationContainer = styled.section`
//   padding: 60px 20px;
//   background-color: #1e1e2f;
//   color: #ffffff;
//   text-align: center;
// `;

// const EducationTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 30px;
//   color: #f4a261;
// `;

// const TimelineContainer = styled.div`
//   position: relative;
//   margin: 40px auto;
//   width: 90%;
//   max-width: 700px;
// `;

// const TimelineLine = styled.div`
//   position: absolute;
//   top: 0;
//   left: 50%;
//   width: 2px;
//   height: 100%;
//   background-color: #f4a261;
//   transform: translateX(-50%);
// `;

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const TimelineItem = styled.div`
//   position: relative;
//   width: 50%;
//   padding: 20px;
//   box-sizing: border-box;
//   text-align: left;
//   margin-bottom: 40px;
//   animation: ${fadeIn} 0.5s ease-in-out;

//   &:nth-child(odd) {
//     left: 0;
//     text-align: right;
//     padding-right: 30px;
//   }

//   &:nth-child(even) {
//     left: 50%;
//     padding-left: 30px;
//   }
// `;

// const ItemContent = styled.div`
//   background-color: #2d2d44;
//   padding: 20px;
//   border-radius: 8px;
//   color: #e9c46a;
//   position: relative;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

//   &:before {
//     content: '';
//     position: absolute;
//     top: 50%;
//     width: 10px;
//     height: 10px;
//     background-color: #f4a261;
//     border-radius: 50%;
//     transform: translateY(-50%);
//   }

//   &:nth-child(odd):before {
//     right: -20px;
//   }

//   &:nth-child(even):before {
//     left: -20px;
//   }
// `;

// const ItemTitle = styled.h3`
//   font-size: 1.2rem;
//   color: #ffffff;
// `;

// const ItemDetails = styled.p`
//   margin-top: 10px;
//   font-size: 0.9rem;
//   color: #c7c7c7;
// `;

// const ItemButton = styled.button`
//   background-color: #e76f51;
//   color: #ffffff;
//   padding: 8px 12px;
//   margin-top: 10px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #f4a261;
//   }
// `;

// const locations = [
//   {
//     title: 'High School',
//     institution: 'PSSEMR SCHOOL',
//     details: 'Davanagere, CBSE, 2015-2018',
//     description: 'Completed my high school education with a focus on science and math subjects.',
//   },
//   {
//     title: 'PUC',
//     institution: 'The Vision PU College',
//     details: 'Bengaluru, KSEEB, 2018-2020',
//     description: 'Studied Physics, Chemistry, and Math in PUC, building a strong foundation for engineering studies.',
//   },
//   {
//     title: 'Undergraduate Degree',
//     institution: 'Reva University',
//     details: 'Bengaluru, B.Tech in CSE, 2020-2024',
//     description: 'Pursuing a degree in Computer Science Engineering with a focus on software development and AI.',
//   },
// ];

// const Education = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleItemClick = (index) => {
//     setSelectedItem(selectedItem === index ? null : index);
//   };

//   return (
//     <EducationContainer id="education">
//       <EducationTitle>Education Timeline</EducationTitle>
//       <TimelineContainer>
//         <TimelineLine />
//         {locations.map((location, index) => (
//           <TimelineItem key={index}>
//             <ItemContent>
//               <ItemTitle>{location.title}</ItemTitle>
//               <p><strong>{location.institution}</strong></p>
//               <ItemDetails>{location.details}</ItemDetails>
//               {selectedItem === index ? (
//                 <ItemDetails>{location.description}</ItemDetails>
//               ) : (
//                 <ItemButton onClick={() => handleItemClick(index)}>
//                   {selectedItem === index ? 'Hide Details' : 'View Details'}
//                 </ItemButton>
//               )}
//             </ItemContent>
//           </TimelineItem>
//         ))}
//       </TimelineContainer>
//     </EducationContainer>
//   );
// };

// export default Education;










import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const EducationContainer = styled.section`
  padding: 60px 20px;
  background-color: #1a1a1a;
  color: #ffffff;
  text-align: center;
`;

const EducationTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #f39c12;
`;

const TimelineContainer = styled.div`
  position: relative;
  margin: 40px auto;
  width: 90%;
  max-width: 700px;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: #f39c12;
  transform: translateX(-50%);
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:nth-child(odd) {
    left: 0;
    text-align: right;
    padding-right: 30px;
  }

  &:nth-child(even) {
    left: 50%;
    padding-left: 30px;
  }
`;

const ItemContent = styled.div`
  background-color: #000000;
  padding: 20px;
  border-radius: 8px;
  color: #f39c12;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    background-color: #f39c12;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(odd):before {
    right: -20px;
  }

  &:nth-child(even):before {
    left: -20px;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  color: #f39c12;
`;

const ItemDetails = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #ffffff;
`;

const ItemButton = styled.button`
  background-color: #e76f51;
  color: #ffffff;
  padding: 8px 12px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f39c12;
  }
`;

const locations = [
  {
    title: 'High School',
    institution: 'PSSEMR SCHOOL',
    details: 'Davanagere, CBSE, 2015-2018',
    description: 'Completed my high school education with a focus on science and math subjects.',
  },
  {
    title: 'PUC',
    institution: 'The Vision PU College',
    details: 'Bengaluru, KSEEB, 2018-2020',
    description: 'Studied Physics, Chemistry, and Math in PUC, building a strong foundation for engineering studies.',
  },
  {
    title: 'Undergraduate Degree',
    institution: 'Reva University',
    details: 'Bengaluru, B.Tech in CSE, 2020-2024',
    description: 'Pursuing a degree in Computer Science Engineering with a focus on software development and AI.',
  },
];

const Education = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <EducationContainer id="education">
      <EducationTitle>Education Timeline</EducationTitle>
      <TimelineContainer>
        <TimelineLine />
        {locations.map((location, index) => (
          <TimelineItem key={index}>
            <ItemContent>
              <ItemTitle>{location.title}</ItemTitle>
              <p><strong>{location.institution}</strong></p>
              <ItemDetails>{location.details}</ItemDetails>
              {selectedItem === index ? (
                <ItemDetails>{location.description}</ItemDetails>
              ) : (
                <ItemButton onClick={() => handleItemClick(index)}>
                  {selectedItem === index ? 'Hide Details' : 'View Details'}
                </ItemButton>
              )}
            </ItemContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </EducationContainer>
  );
};

export default Education;
