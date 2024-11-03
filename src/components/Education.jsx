// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// const EducationContainer = styled.section`
//   padding: 50px 20px;
//   background: #1a1a1a;
//   color: #fff;
//   text-align: center;
// `;

// const EducationTitle = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// `;

// const Disclaimer = styled.p`
//   font-size: 1rem;
//   margin-bottom: 20px;
//   color: #f39c12;
// `;

// const MapContainer = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 800px;
//   margin: 0 auto;
//   background: url('/path-to-your-map-background.jpg') no-repeat center center/cover;
//   height: 500px;
//   border-radius: 10px;
//   overflow: hidden;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `;

// const Location = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   cursor: pointer;
// `;

// const LocationIcon = styled(FaMapMarkerAlt)`
//   font-size: 2rem;
//   color: #f39c12;
// `;

// const LocationName = styled.span`
//   margin-top: 5px;
//   font-size: 1rem;
//   color: #fff;
// `;

// const slideInFromRight = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(0);
//   }
// `;

// const LocationDetails = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: #333;
//   padding: 20px;
//   border-radius: 10px;
//   max-width: 400px;
//   text-align: center;
//   animation: ${slideInFromRight} 0.5s ease-out;
//   z-index: 10;
// `;

// const CloseButton = styled.button`
//   background: #f39c12;
//   border: none;
//   border-radius: 5px;
//   color: #fff;
//   padding: 5px 10px;
//   cursor: pointer;
//   margin-top: 10px;
//   &:hover {
//     background: #e67e22;
//   }
// `;

// const locations = [
//   {
//     type: 'High School',
//     name: 'PSSEMR SCHOOL',
//     details: 'Davanagere\nCBSE\n2015-2018\nHigh School',
//   },
//   {
//     type: 'PUC',
//     name: 'The Vision PU College',
//     details: 'Bengaluru\nKSEEB\n2018-2020\nPUC',
//   },
//   {
//     type: 'UG Degree',
//     name: 'Reva University',
//     details: 'Bengaluru\nB.Tech\n2020-2024\nCSE',
//   },
// ];

// const Education = () => {
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   return (
//     <EducationContainer id="education">
//       <EducationTitle>Education Journey</EducationTitle>
//       <Disclaimer>Click on any icon to know more</Disclaimer>
//       <MapContainer>
//         {locations.map((location, index) => (
//           <Location
//             key={index}
//             onClick={() => setSelectedLocation(location)}
//           >
//             <LocationIcon />
//             <LocationName>{location.type}</LocationName>
//           </Location>
//         ))}
//         {selectedLocation && (
//           <LocationDetails>
//             <strong>{selectedLocation.name}</strong>
//             <br />
//             {selectedLocation.details.split('\n').map((line, index) => (
//               <span key={index}>{line}<br /></span>
//             ))}
//             <CloseButton onClick={() => setSelectedLocation(null)}>Close</CloseButton>
//           </LocationDetails>
//         )}
//       </MapContainer>
//     </EducationContainer>
//   );
// };

// export default Education;








import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';

const EducationContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: #fff;
  text-align: center;
`;

const EducationTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Disclaimer = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  color: #f39c12;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TriangleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Location = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  font-size: 2rem;
  color: #f39c12;
`;

const LocationName = styled.span`
  margin-top: 5px;
  font-size: 1rem;
  color: #fff;
`;

const LocationDetails = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
  z-index: 10;
`;

const CloseButton = styled.button`
  background: #f39c12;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: #e67e22;
  }
`;

const locations = [
  {
    type: 'High School',
    name: 'PSSEMR SCHOOL',
    details: 'Davanagere\nCBSE\n2015-2018\nHigh School',
    top: 20,
    left: 50,
  },
  {
    type: 'PUC',
    name: 'The Vision PU College',
    details: 'Bengaluru\nKSEEB\n2018-2020\nPUC',
    top: 50,
    left: 20,
  },
  {
    type: 'UG Degree',
    name: 'Reva University',
    details: 'Bengaluru\nB.Tech\n2020-2024\nCSE',
    top: 50,
    left: 80,
  },
];

const Education = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <EducationContainer id="education">
      <EducationTitle>Education Journey</EducationTitle>
      <Disclaimer>Click on any icon to know more</Disclaimer>
      <MapContainer>
        <TriangleContainer>
          {locations.map((location, index) => (
            <Location
              key={index}
              style={{ top: `${location.top}%`, left: `${location.left}%` }}
              onClick={() => setSelectedLocation(location)}
            >
              <LocationIcon />
              <LocationName>{location.type}</LocationName>
            </Location>
          ))}
          {selectedLocation && (
            <LocationDetails>
              <strong>{selectedLocation.name}</strong>
              <br />
              {selectedLocation.details.split('\n').map((line, index) => (
                <span key={index}>{line}<br /></span>
              ))}
              <CloseButton onClick={() => setSelectedLocation(null)}>Close</CloseButton>
            </LocationDetails>
          )}
        </TriangleContainer>
      </MapContainer>
    </EducationContainer>
  );
};

export default Education;
