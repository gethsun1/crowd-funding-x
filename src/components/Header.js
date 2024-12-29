import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#263238', // Secondary color
    boxShadow: 'none',
  },
  logo: {
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#28CB8B', // Primary color
    cursor: 'pointer',
  },
  navLink: {
    marginLeft: theme.spacing(3),
    color: '#FFFFFF', // White text for contrast
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: '14px',
    textDecoration: 'none',
    '&:hover': {
      color: '#28CB8B', // Primary color on hover
    },
  },
  connectButton: {
    marginLeft: theme.spacing(3),
    backgroundColor: '#28CB8B', // Primary color
    color: '#FFFFFF', // White text
    fontWeight: 'bold',
    borderRadius: '20px',
    padding: '6px 16px',
    '&:hover': {
      backgroundColor: '#1fa975', // Slightly darker primary color on hover
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" className={classes.logo}>
          CrowdfundX
        </Typography>

        {/* Navigation Links */}
        <Box>
          <a href="#home" className={classes.navLink}>
            Home
          </a>
          <a href="#explore" className={classes.navLink}>
            Explore Projects
          </a>
          <a href="#dashboard" className={classes.navLink}>
            Dashboard
          </a>
          <a href="#governance" className={classes.navLink}>
            Governance
          </a>
        </Box>

        {/* Connect Wallet Button */}
        <Button className={classes.connectButton}>Connect Wallet</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
