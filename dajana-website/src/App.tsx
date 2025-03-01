// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Booking from './components/Booking';
import Blog from './components/Blog';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(45deg, #128f30, #0091e2, #ffd11c, #e30082);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    color: #333;
  }

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: bold;
  }

  a {
    color: #e30082;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: #0091e2;
  }

  button {
    background-color: #e30082;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0091e2;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </MainContent>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
