// import React from 'react';
// import styled from 'styled-components';

// const ProfileContainer = styled.section`
//   padding: 50px 20px;
//   background: #1a1a1a;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ProfileCard = styled.div`
//   background: #0d0d0d;
//   padding: 30px;
//   border-radius: 10px;
//   max-width: 800px;
//   display: flex;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//   border: 2px solid #f39c12;
// `;

// const LeftSide = styled.div`
//   flex: 1;
//   text-align: center;
//   padding: 20px;
//   border-right: 2px solid #f39c12;
// `;

// const RightSide = styled.div`
//   flex: 2;
//   padding: 20px;
// `;

// const ProfileImage = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   margin-bottom: 20px;
//   border: 3px solid #f39c12;
// `;

// const ProfileName = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 10px;
// `;

// const ProfileRole = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 20px;
//   color: #f39c12;
// `;

// const ProfileDescription = styled.p`
//   font-size: 1rem;
// `;

// const InfoRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 10px;
// `;

// const InfoLabel = styled.span`
//   font-weight: bold;
// `;

// const InfoValue = styled.span`
//   color: #f39c12;
// `;

// const About = () => {
//   return (
//     <ProfileContainer id="about">
//       <ProfileCard>
//         <LeftSide>
//           <ProfileImage src="/path-to-your-profile-image.jpg" alt="Profile" />
//         </LeftSide>
//         <RightSide>
//           <InfoRow>
//             <InfoLabel>My Name:</InfoLabel>
//             <InfoValue>Nandeesh P S</InfoValue>
//           </InfoRow>
//           <InfoRow>
//             <InfoLabel>Date of Birth:</InfoLabel>
//             <InfoValue>26/06/2002</InfoValue>
//           </InfoRow>
//           <InfoRow>
//             <InfoLabel>Location:</InfoLabel>
//             <InfoValue>Unknown</InfoValue>
//           </InfoRow>
//           <InfoRow>
//             <InfoLabel>Phone No:</InfoLabel>
//             <InfoValue>In the footer section</InfoValue>
//           </InfoRow>
//           <ProfileDescription>
//             I am a passionate gamer and developer. I love creating immersive gaming experiences and working on exciting projects. My journey in the gaming world has been thrilling, and I continuously strive to push the boundaries of what's possible in game development.
//           </ProfileDescription>
//         </RightSide>
//       </ProfileCard>
//     </ProfileContainer>
//   );
// };

// export default About;




import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const ProfileContainer = styled.section`
  padding: 50px 20px;
  background: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProfileCard = styled.div`
  background: #0d0d0d;
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 2px solid #f39c12;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LeftSide = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  border-right: 2px solid #f39c12;
`;

const RightSide = styled.div`
  flex: 2;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid #f39c12;
`;

const ProfileName = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProfileRole = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #f39c12;
`;

const ProfileDescription = styled.p`
  font-size: 1rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
`;

const InfoValue = styled.span`
  color: #f39c12;
`;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (profileRef.current) {
      observer.observe(profileRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <ProfileContainer id="about">
      <ProfileCard ref={profileRef} className={isVisible ? 'visible' : ''}>
        <LeftSide>
          <ProfileImage src="/path-to-your-profile-image.jpg" alt="Profile" />
        </LeftSide>
        <RightSide>
          <InfoRow>
            <InfoLabel>My Name:</InfoLabel>
            <InfoValue>Nandeesh P S</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Date of Birth:</InfoLabel>
            <InfoValue>26/06/2002</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Location:</InfoLabel>
            <InfoValue>Unknown</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Phone No:</InfoLabel>
            <InfoValue>In the footer section</InfoValue>
          </InfoRow>
          <ProfileDescription>
            I am a passionate gamer and developer. I love creating immersive gaming experiences and working on exciting projects. My journey in the gaming world has been thrilling, and I continuously strive to push the boundaries of what's possible in game development.
          </ProfileDescription>
        </RightSide>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default About;
