// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaArrowDown } from 'react-icons/fa';
// import Typical from 'react-typical';

// const HeroContainer = styled.section`
//   height: 100vh;
//   background: #1a1a1a;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
// `;

// const slideIn = keyframes`
//   from {
//     transform: translateX(100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// `;

// const slideOut = keyframes`
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const textSlideIn = keyframes`
//   from {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// `;

// const HeroSlide = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: url(${(props) => props.image}) no-repeat center center/cover;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: ${(props) => (props.alignLeft ? 'flex-start' : 'center')};
//   text-align: ${(props) => (props.alignLeft ? 'left' : 'center')};
//   padding-left: ${(props) => (props.alignLeft ? '50px' : '0')};
//   animation: ${(props) => (props.active ? slideIn : slideOut)} 1s forwards;
// `;

// const HeroText = styled.h1`
//   font-size: ${(props) => props.fontSize || '3rem'};
//   margin-bottom: 20px;
//   font-family: ${(props) => props.fontFamily || 'inherit'};
//   color: #f39c12;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
//   animation: ${textSlideIn} 1s forwards;
// `;

// const HeroSubText = styled.p`
//   font-size: ${(props) => props.fontSize || '1.5rem'};
//   margin-bottom: 20px;
//   font-family: ${(props) => props.fontFamily || 'inherit'};
//   color: #f39c12;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
// `;

// const ContactLinks = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin-top: 20px;
// `;

// const ContactLink = styled.a`
//   color: #f39c12;
//   text-decoration: none;
//   font-size: 1.2rem;
//   margin-bottom: 10px;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const bounce = keyframes`
//   0%, 20%, 50%, 80%, 100% {
//     transform: translateY(0);
//   }
//   40% {
//     transform: translateY(-10px);
//   }
//   60% {
//     transform: translateY(-5px);
//   }
// `;

// const ScrollDownButton = styled.button`
//   background: none;
//   border: none;
//   color: #f39c12;
//   font-size: 2rem;
//   cursor: pointer;
//   margin-top: 20px;
//   display: flex;
//   align-items: center;
//   animation: ${bounce} 2s infinite;
//   &:hover {
//     color: #fff;
//   }
// `;

// const images = [
//   {
//     src: '/328413.jpg',
//     text: 'Hi viewer 👋',
//     subText: 'My name is Nandeesh P S',
//     fontSize: '3rem',
//     subFontSize: '1.5rem',
//     fontFamily: 'Press Start 2P, cursive',
//   },
//   {
//     src: '/franklin-in-gta-5-3840x2160-14721.jpg',
//     text: 'What I Do',
//     subText: "I'm Associate System Engineer in Rakuten",
//     fontSize: '3.5rem',
//     subFontSize: '1.8rem',
//     fontFamily: 'Press Start 2P, cursive',
//     alignLeft: true,
//   },
//   {
//     src: 'https://images2.alphacoders.com/112/1125180.png',
//     text: 'Connect with Me',
//     subText: 'Contact me at nandeeshps17@gmail.com',
//     fontSize: '3rem',
//     subFontSize: '1.5rem',
//     fontFamily: 'Press Start 2P, cursive',
//     alignLeft: true,
//     contactInfo: true,
//   },
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showText, setShowText] = useState(false);
//   const [showTyping, setShowTyping] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowText(false);
//       setShowTyping(false);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//         setShowText(true);
//         setTimeout(() => {
//           setShowTyping(true);
//         }, 1000); // Delay before showing typing animation
//       }, 1000); // Delay before showing text animation
//     }, 8000); // Auto-slide every 8 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const handleScrollDown = () => {
//     document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     setShowText(true);
//     setTimeout(() => {
//       setShowTyping(true);
//     }, 1000); // Delay before showing typing animation
//   }, [currentIndex]);

//   return (
//     <HeroContainer>
//       {images.map((image, index) => (
//         <HeroSlide
//           key={index}
//           image={image.src}
//           active={index === currentIndex}
//           alignLeft={image.alignLeft}
//         >
//           {showText && (
//             <HeroText fontSize={image.fontSize} fontFamily={image.fontFamily}>
//               {image.text}
//             </HeroText>
//           )}
//           {showTyping && (
//             <HeroSubText fontSize={image.subFontSize} fontFamily={image.fontFamily}>
//               <Typical
//                 steps={[image.subText, 3000]}
//                 loop={1}
//                 wrapper="span"
//               />
//             </HeroSubText>
//           )}
//           {image.contactInfo && (
//             <ContactLinks>
//               <ContactLink href="mailto:nandeeshps17@gmail.com">Email: nandeeshps17@gmail.com</ContactLink>
//               <ContactLink href="https://www.linkedin.com/in/nandeeshps" target="_blank" rel="noopener noreferrer">
//                 LinkedIn: linkedin.com/in/nandeeshps
//               </ContactLink>
//               <ContactLink href="/path-to-your-resume.pdf" download>
//                 Download Resume
//               </ContactLink>
//             </ContactLinks>
//           )}
//           {index === images.length - 1 && (
//             <ScrollDownButton onClick={handleScrollDown}>
//               Scroll Down <FaArrowDown style={{ marginLeft: '10px' }} />
//             </ScrollDownButton>
//           )}
//         </HeroSlide>
//       ))}
//     </HeroContainer>
//   );
// };

// export default HeroSection;











import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowDown } from 'react-icons/fa';
import Typical from 'react-typical';

const HeroContainer = styled.section`
  height: 100vh;
  background: #1a1a1a;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const textSlideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const HeroSlide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.alignLeft ? 'flex-start' : 'center')};
  text-align: ${(props) => (props.alignLeft ? 'left' : 'center')};
  padding-left: ${(props) => (props.alignLeft ? '50px' : '0')};
  animation: ${(props) => (props.active ? slideIn : slideOut)} 1s forwards;
`;

const HeroText = styled.h1`
  font-size: ${(props) => props.fontSize || '3rem'};
  margin-bottom: 20px;
  font-family: ${(props) => props.fontFamily || 'inherit'};
  color: #f39c12;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: ${textSlideIn} 1s forwards;
`;

const HeroSubText = styled.p`
  font-size: ${(props) => props.fontSize || '1.5rem'};
  margin-bottom: 20px;
  font-family: ${(props) => props.fontFamily || 'inherit'};
  color: #f39c12;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const ContactLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  font-size: 1.2rem;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ScrollDownButton = styled.button`
  background: none;
  border: none;
  color: #f39c12;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  animation: ${bounce} 2s infinite;
  &:hover {
    color: #fff;
  }
`;

const images = [
  {
    src: '/328413.jpg',
    text: 'Hi viewer 👋',
    subText: 'My name is Nandeesh P S',
    fontSize: '3rem',
    subFontSize: '1.5rem',
    fontFamily: 'Press Start 2P, cursive',
  },
  {
    src: '/franklin-in-gta-5-3840x2160-14721.jpg',
    text: 'What I Do',
    subText: "I'm Associate System Engineer in Rakuten",
    fontSize: '3.5rem',
    subFontSize: '1.8rem',
    fontFamily: 'Press Start 2P, cursive',
    alignLeft: true,
  },
  {
    src: 'https://images2.alphacoders.com/112/1125180.png',
    text: 'Connect with Me',
    subText: '',
    fontSize: '3rem',
    subFontSize: '1.5rem',
    fontFamily: 'Press Start 2P, cursive',
    alignLeft: true,
    contactInfo: true,
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false);
      setShowTyping(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setShowText(true);
        setTimeout(() => {
          setShowTyping(true);
        }, 1000); // Delay before showing typing animation
      }, 1000); // Delay before showing text animation
    }, 8000); // Auto-slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setShowText(true);
    setTimeout(() => {
      setShowTyping(true);
    }, 1000); // Delay before showing typing animation
  }, [currentIndex]);

  return (
    <HeroContainer>
      {images.map((image, index) => (
        <HeroSlide
          key={index}
          image={image.src}
          active={index === currentIndex}
          alignLeft={image.alignLeft}
        >
          {showText && (
            <HeroText fontSize={image.fontSize} fontFamily={image.fontFamily}>
              {image.text}
            </HeroText>
          )}
          {showTyping && image.subText && (
            <HeroSubText fontSize={image.subFontSize} fontFamily={image.fontFamily}>
              <Typical
                steps={[image.subText, 3000]}
                loop={1}
                wrapper="span"
              />
            </HeroSubText>
          )}
          {showTyping && image.contactInfo && (
            <ContactLinks>
              <ContactLink href="mailto:nandeeshps17@gmail.com">
                <Typical
                  steps={['Email: nandeeshps17@gmail.com', 3000]}
                  loop={1}
                  wrapper="span"
                />
              </ContactLink>
              <ContactLink href="https://www.linkedin.com/in/nandeeshps" target="_blank" rel="noopener noreferrer">
                <Typical
                  steps={['LinkedIn: linkedin.com/in/nandeeshps', 3000]}
                  loop={1}
                  wrapper="span"
                />
              </ContactLink>
              <ContactLink href="/path-to-your-resume.pdf" download>
                <Typical
                  steps={['Download Resume', 3000]}
                  loop={1}
                  wrapper="span"
                />
              </ContactLink>
            </ContactLinks>
          )}
          {index === images.length - 1 && (
            <ScrollDownButton onClick={handleScrollDown}>
              Scroll Down <FaArrowDown style={{ marginLeft: '10px' }} />
            </ScrollDownButton>
          )}
        </HeroSlide>
      ))}
    </HeroContainer>
  );
};

export default HeroSection;
