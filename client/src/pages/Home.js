import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => (
  <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '4rem' }}>
    <Typography variant="h2" gutterBottom>
      Welcome to the MERN Gallery Website
    </Typography>
    <Typography variant="h5" gutterBottom>
      Explore the gallery, manage content, or get in touch!
    </Typography>
    <div style={{ marginTop: '2rem' }}>
      <Button component={Link} to="/gallery" variant="contained" color="primary" style={{ margin: '0 1rem' }}>
        Gallery
      </Button>
      <Button component={Link} to="/admin" variant="contained" color="secondary" style={{ margin: '0 1rem' }}>
        Admin
      </Button>
      <Button component={Link} to="/contact" variant="outlined" color="primary" style={{ margin: '0 1rem' }}>
        Contact
      </Button>
      <Button component={Link} to="/login" variant="outlined" color="secondary" style={{ margin: '0 1rem' }}>
        Login
      </Button>
    </div>
  </Container>
);

export default Home;
