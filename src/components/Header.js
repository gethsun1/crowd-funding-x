import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Drawer, IconButton, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
import { useTheme } from '@mui/styles'; // To use Material-UI's theme breakpoints

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#263238', // Secondary color
    boxShadow: 'none',
  },
  logo: {
    marginRight: theme.spacing(3),
    height: '40px', // Adjust height as needed
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
    backgroundColor: '#3D9970', // Slightly darker, more distinct shade
    color: '#FFFFFF', // White text for visibility
    fontWeight: 'bold',
    borderRadius: '20px',
    padding: '6px 16px',
    '&:hover': {
      backgroundColor: '#2F7B5F', // Darker shade on hover
    },
  },
  rightSection: {
    marginLeft: 'auto', // Pushes everything after it to the right
    display: 'flex',
    alignItems: 'center', // Align items vertically
  },
  drawer: {
    width: 250,
    padding: '20px',
  },
  drawerLink: {
    display: 'block',
    marginBottom: '10px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    '&:hover': {
      color: '#28CB8B', // Primary color on hover
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Checks for mobile
  const [open, setOpen] = useState(false); // State to handle Drawer (Mobile menu)

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {/* Logo */}
        <img
          src={require('../downloads/crowdfundlogo.png')}
          alt="CrowdfundPro Logo"
          className={classes.logo}
        />

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <Box className={classes.rightSection}>
            <IconButton
              color="inherit"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box className={classes.rightSection}>
            <a href="#home" className={classes.navLink}>Home</a>
            <a href="#explore" className={classes.navLink}>Explore Projects</a>
            <a href="#dashboard" className={classes.navLink}>Dashboard</a>
            <a href="#governance" className={classes.navLink}>Governance</a>
            <Button className={classes.connectButton} variant="contained" disableElevation>
              Connect Wallet
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer (Menu) */}
      <Drawer open={open} onClose={toggleDrawer}>
        <Box
          className={classes.drawer}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <a href="#home" className={classes.drawerLink}>Home</a>
          <a href="#explore" className={classes.drawerLink}>Explore Projects</a>
          <a href="#dashboard" className={classes.drawerLink}>Dashboard</a>
          <a href="#governance" className={classes.drawerLink}>Governance</a>
          <Button className={classes.connectButton} variant="contained" disableElevation>
            Connect Wallet
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
