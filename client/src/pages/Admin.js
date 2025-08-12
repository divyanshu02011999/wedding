
import { Container, Typography } from '@mui/material';

function Admin() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Admin Dashboard
      </Typography>
      {/* Placeholder for image upload form */}
      <Typography variant="body1">Upload wedding photos here.</Typography>
    </Container>
  );
}

export default Admin;
