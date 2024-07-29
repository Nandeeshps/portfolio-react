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

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: url('/path-to-your-map-background.jpg') no-repeat center center/cover;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

const Location = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
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
  margin-top: 20px;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  background: #333;
  padding: 10px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

const locations = [
  {
    type: 'High School',
    name: 'PSSEMR SCHOOL',
    details: 'Davanagere\nCBSE\n2015-2018\nHigh School',
    top: 20,
    left: 30,
  },
  {
    type: 'PUC',
    name: 'The Vision PU College',
    details: 'Bengaluru\nKSEEB\n2018-2020\nPUC',
    top: 40,
    left: 50,
  },
  {
    type: 'UG Degree',
    name: 'Reva University',
    details: 'Bengaluru\nB.Tech\n2020-2024\nCSE',
    top: 60,
    left: 70,
  },
];

const Education = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <EducationContainer id="education">
      <EducationTitle>Education Journey</EducationTitle>
      <MapContainer>
        {locations.map((location, index) => (
          <Location
            key={index}
            top={location.top}
            left={location.left}
            onMouseEnter={() => setHoveredLocation(location)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <LocationIcon />
            <LocationName>{location.type}</LocationName>
          </Location>
        ))}
      </MapContainer>
      {hoveredLocation && (
        <LocationDetails>
          <strong>{hoveredLocation.name}</strong>
          <br />
          {hoveredLocation.details.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span>
          ))}
        </LocationDetails>
      )}
    </EducationContainer>
  );
};

export default Education;
