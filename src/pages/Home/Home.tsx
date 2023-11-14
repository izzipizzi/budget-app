import React from 'react';
import './Home.css';
import { Container } from '@mui/material';
import CardHolder from '@pages/Home/CardHolder/CardHolder';
import Analytics from '@pages/Home/Analytics/Analytics';

const Home = () => {

  return (
    <Container maxWidth="sm" sx={{
      px: '27px',
    }}>
      <CardHolder/>
      <Analytics/>
    </Container>
  );
};

export default Home;
