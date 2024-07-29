// import React from 'react';
// import styled from 'styled-components';

// const FooterContainer = styled.footer`
//   background: #0d0d0d;
//   padding: 20px;
//   text-align: center;
//   color: #fff;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       &copy; {new Date().getFullYear()} Nandeesh P S's Portfolio. All rights reserved.
//     </FooterContainer>
//   );
// };

// export default Footer;





import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaGamepad, FaPhoneSquare, FaPhoneSlash, FaPhoneAlt, FaPhoneSquareAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0d0d0d;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 1rem;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialMediaIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #f39c12;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo>
        <FaGamepad style={{ marginRight: '10px' }} />
        Gamer Portfolio
      </Logo>
      <Copyright>
        &copy; {new Date().getFullYear()} Nandeesh P S's Portfolio. All rights reserved.
      </Copyright>
      <SocialMediaContainer>
      <SocialMediaIcon href="6360683196"  rel="noopener noreferrer">
          <FaPhoneSquareAlt />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.linkedin.com/in/nandeeshps" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialMediaIcon>
      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;