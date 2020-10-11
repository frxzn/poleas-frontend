import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border-top: 1px solid rgb(222, 226, 230);
  color: rgb(77, 81, 86);
  text-align: center;
  padding: 1rem 0;
  background-color: #fafafa;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="mailto: tin.maldonado@gmail.com"
        style={{ color: 'rgb(77, 81, 86)' }}
      >
        MGM - {new Date().getFullYear()}
      </a>
    </StyledFooter>
  );
};

export default Footer;
