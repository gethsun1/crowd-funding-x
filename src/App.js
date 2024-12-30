import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#28CB8B',
    },
    secondary: {
      main: '#263238',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
