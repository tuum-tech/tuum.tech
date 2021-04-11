import styled from 'styled-components';

import Hero from './Hero';
import Footer, { FooterContainer } from './Footer';
import Navbar from './Navbar';
import Container from './Container';
import Section from './Section';

const ContentContainer = styled.div`
  padding: 0px 2rem;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: block;
  position: relative;
`;

export {
  Container,
  Navbar,
  Footer,
  Hero,
  Section,
  FooterContainer,
  ContentContainer,
};
