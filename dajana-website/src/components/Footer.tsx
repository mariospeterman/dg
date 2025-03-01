// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 0.9em;
  color: #666;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2025 Dajana Gräfe - Heilpraktikerin für Hypnose, Klangtherapie und Tiefenentspannung</p>
      <p>
        <a href="/rss">RSS Feed</a> | <a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutz</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
