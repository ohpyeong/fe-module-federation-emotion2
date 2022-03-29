import React from 'react';
import {Button as MuiButton} from '@mui/material';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import type { Theme as MuiTheme } from '@mui/material';
import "@mui/styles";

const theme = createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 992,
      lg: 1280,
      xl: 1920,
    },
  },
});

declare module '@emotion/react' {
  interface Theme extends MuiTheme {}
}

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends MuiTheme {}
}

const Button = React.lazy(() => 
  // @ts-ignore
  import('emotion1/Button')
);

const ButtonWrapper = () => {
  return (
    <>
      <Button> original button </Button>
      <MuiButton> custom button </MuiButton>
    </>
  )
}

export default ButtonWrapper;