import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ImageCard from '../Components/ImageCard';

const Home = () => (
  <Container>
    <Header as="h1">HomePage</Header>
    <ImageCard />
  </Container>
);

export default Home;
