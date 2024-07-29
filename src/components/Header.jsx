// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { FaGamepad } from 'react-icons/fa';

// const HeaderContainer = styled.header`
//   background: ${(props) => (props.scrolled ? '#0d0d0d' : 'transparent')};
//   padding: 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: #fff;
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   transition: background 0.3s;
// `;

// const Logo = styled.div`
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
// `;

// const Nav = styled.nav`
//   a {
//     color: #fff;
//     margin: 0 15px;
//     text-decoration: none;
//     &:hover {
//       color: #f39c12;
//     }
//   }
// `;

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <HeaderContainer scrolled={scrolled}>
//       <Logo>
//         <FaGamepad style={{ marginRight: '10px' }} />
//         Gamer Portfolio
//       </Logo>
//       <Nav>
//         <a href="#about">Profile</a>
//         <a href="#projects">Missions</a>
//         <a href="#skills">Skills</a>
//         <a href="#contact">Headquarters</a>
//       </Nav>
//     </HeaderContainer>
//   );
// };

// export default Header;





import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGamepad } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: ${(props) => (props.scrolled ? '#0d0d0d' : 'transparent')};
  padding: 20px;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s, display 0.3s;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    &:hover {
      color: #f39c12;
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setHidden(false);
      } else {
        setScrolled(false);
        setHidden(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled} hidden={hidden}>
      <Logo>
        <FaGamepad style={{ marginRight: '10px' }} />
        Gamer Portfolio
      </Logo>
      <Nav>
        <a href="#about">Profile</a>
        <a href="#projects">Missions</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Headquarters</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
