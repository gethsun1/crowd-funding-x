import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import background from '../downloads/backgroundI.webp'; // Import the image

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(
            rgba(40, 203, 139, 0.8),
            rgba(40, 203, 139, 0.8)
          ), url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', zIndex: 2, position: 'relative' }}>
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: 2,
          }}
        >
          Empowering Ideas, Decentralized Funding.
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            color: '#E0F2F1',
            marginBottom: 4,
          }}
        >
          Connect with backers and bring your vision to life.
        </Typography>

        {/* Call-to-Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#26b57a' },
            }}
          >
            Explore Projects
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#FFFFFF',
              borderColor: '#FFFFFF',
              '&:hover': { borderColor: '#26b57a', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
            }}
          >
            Create a Project
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
