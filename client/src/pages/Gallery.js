import { Container, Typography } from '@mui/material';

function Gallery() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Gallery Page
      </Typography>
      {/* Gallery content goes here */}
    </Container>
  );
}

export default Gallery;
