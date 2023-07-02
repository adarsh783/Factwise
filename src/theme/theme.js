/* eslint-disable max-len */
import { createTheme } from '@mui/material';
import { formControlStyles } from './_form-controls.styles';
import './fonts.scss';
import {
  CARD_BRADIUS,
} from './dims';

export const Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320, // mobile start
      md: 600, // mobile end
      lg: 1280, // Tab portrait, 13 inches and above
      xl: 1500, // 14 inch and above
    },
  },
  typography: {
    p4_bold: {
      display: 'block',
      fontFamily: ['font-medium'],
      fontSize: 28,
      fontWeight: 'bold',
    },
    p4_medium: {
      display: 'block',
      fontFamily: ['font-medium'],
      fontSize: 14,
      fontWeight: 'bold',
    },
  },
  components: {
    ...formControlStyles,
    MuiCard: {
      defaultProps: {
        variant: 'elevation',
      },
      styleOverrides: {
        root: {
          borderRadius: CARD_BRADIUS,
          background: '#FFFFFF',
          '&.MuiPaper-standard': {
            boxShadow: 0,
          },
          '&.MuiPaper-outline': {
            boxShadow: 0,
            borderWidth: '1.5px 0 1.5px 0',
            borderColor: '#E9E9E9',
            borderStyle: 'solid',
            borderRadius: 0,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          height: '110px',

          '&.Mui-expanded': {
            height: 'max-content'
          },

          '::before': { height: 0 },
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: '45px !important',
          textTransform: 'none',
          border: 'none',
          borderRadius: '12px',
          '&.Mui-disabled': {
            opacity: 0.2,
            pointerEvents: 'inherit !important',
            cursor: 'not-allowed !important',
          },
          '&.MuiButton-text': {
            backgroundImage: 'none',
            textDecoration: 'underline',
          },
        },
        outlined: {
          backgroundColor: 'inherit',
          borderRadius: '12px',
          border: '1px solid gray !important',

          '&:hover': {
            backgroundColor: 'inherit',
            borderColor: '#808080',
          },
        },
        contained: {
          '&:hover': {
            backgroundColor: 'inherit',
          },
        },
      },
    },
  },
  fontFamily: 'Poppins',
});
