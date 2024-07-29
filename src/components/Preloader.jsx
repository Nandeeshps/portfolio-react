// import React from 'react';
// import styled from 'styled-components';

// const PreloaderContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: #1a1a1a;
// `;

// const PreloaderImage = styled.img`
//   width: 100px;
//   height: 100px;
// `;

// const Preloader = () => {
//   return (
//     <PreloaderContainer>
//       <PreloaderImage src="/com-crop-unscreen-ezgif.com-crop.gif" alt="Loading..." />
//     </PreloaderContainer>
//   );
// };

// export default Preloader;




import React from 'react';
import styled from 'styled-components';

const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: black; /* Black background */
`;

const PreloaderImage = styled.img`
  width: 50vw; 
  height: 50vh;
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      <PreloaderImage src="/com-crop-unscreen-ezgif.com-crop.gif" alt="Loading..." />
    </PreloaderContainer>
  );
};

export default Preloader;
