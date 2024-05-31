

export const starWarsTheme = {
  colors: {
    primary: {
      light: '#85FFFF',  // Light Cyan (Lightsaber Glow)
      main: '#00E5FF',   // Cyan (Lightsaber)
      dark: '#002f4b',   // Dark Blue (Force)
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#F8BBD0',  // Light Pink (Lightsaber Glow)
      main: '#F50057',   // Pink (Lightsaber)
      dark: '#ff0000',   // Dark Red (Sith)
      contrastText: '#ffffff',
    },
    error: {
      light: '#e57373',  // Light Red
      main: '#f44336',   // Red
      dark: '#d32f2f',   // Dark Red
      contrastText: '#ffffff',
    },
    warning: {
      light: '#ffb74d',  // Light Orange
      main: '#ff9800',   // Orange
      dark: '#f57c00',   // Dark Orange
      contrastText: '#ffffff',
    },
    info: {
      light: '#64b5f6',  // Light Blue
      main: '#2196f3',   // Blue
      dark: '#1976d2',   // Dark Blue
      contrastText: '#ffffff',
    },
    success: {
      light: '#81c784',  // Light Green
      main: '#4caf50',   // Green
      dark: '#388e3c',   // Dark Green
      contrastText: '#ffffff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    common: {
      black: '#000000',  // Black (Darth Vader)
      white: '#ffffff',  // White (Stormtroopers)
    },
    starWars: {
      yellow: '#FFE81F', // Star Wars Yellow
    }
  },
  fonts: {
    main: 'Arial, sans-serif',
    starWars: "'Orbitron', sans-serif",
  },
  animations: {
    textScroll: {
      duration: '60s',
      timingFunction: 'linear',
      iterationCount: 'infinite'
    },
    fadeIn: {
      duration: '2s',
      timingFunction: 'ease-in'
    }
  },
  starField: {
    numberOfStars: 100,
    starSize: '1px',
    starColor: '#fff'
  },
};

export type ThemeType = typeof starWarsTheme;