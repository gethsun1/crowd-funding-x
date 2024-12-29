import React from 'react';
import './App.css';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme
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
        {/* Include Header */}
        <Header />
        {/* Main Content */}
        <main style={{ padding: '20px', textAlign: 'center', color: '#263238' }}>
          <h1>Welcome to CrowdfundX</h1>
          <p>
            A decentralized crowdfunding platform for creators, startups, and social causes.
          </p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
