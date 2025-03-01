// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #e30082;
`;

const NavLinks = styled.div`
  a {
    margin-left: 20px;
    font-weight: bold;
  }
`;

const Header: React.FC = () => {
  return (
    <NavBar>
      <Logo>Dajana Gräfe</Logo>
      <NavLinks>
        <Link to="/">Leistungen</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/booking">Termin buchen</Link>
        <Link to="/blog">Blog</Link>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
