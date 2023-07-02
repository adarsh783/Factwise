import {
  INPUT_HEIGHT,
  INPUT_BRADIUS,
  BUTTON_HEIGHT,
  NORMAL_BUTTON_RADIUS,
  ROUNDED_BUTTON_RADIUS,
  OUTLINED_BUTTON_RADIUS,
  CONTAINED_BUTTON_RADIUS,
} from './dims';

export const formControlStyles = {
  MuiOutlinedInput: {
    defaultProps: {
      notched: false,
    },
    styleOverrides: {
      root: {
        height: INPUT_HEIGHT,
        borderRadius: INPUT_BRADIUS,
        border: 'solid 1px #E8E9EE',
        '&.Mui-focused': {
          borderColor: 'none',
        },
        backgroundColor: '#fff',
        fontFamily: 'font-regular',
        fontSize: '16px',
        fontWeight: 400,
        padding: '20px 10px',
      },
      sizeMedium: {
        minHeight: '60px',
      },
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        borderRadius: INPUT_BRADIUS,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        marginRight: 0,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        height: BUTTON_HEIGHT,
        textTransform: 'none',
        borderRadius: NORMAL_BUTTON_RADIUS,
        color: '#110F14',
        '&:hover': {
          backgroundColor: '#51925A !important',
        },
        '&.Mui-disabled': {
          opacity: 0.4,
          backgroundColor: '#EDEDED',
          pointerEvents: 'inherit !important',
          cursor: 'not-allowed !important',
        },
      },
      rounded: {
        color: '#FFFFFF',
        backgroundColor: '#51925A',
        borderRadius: ROUNDED_BUTTON_RADIUS,
      },
      text: {
        backgroundImage: 'none',
        textDecoration: 'underline',
        color: '#51925A !important',

        '&:hover': {
          backgroundColor: 'inherit !important',
        },
      },
      contained: {
        color: '#FFFFFF',
        backgroundColor: '#51925A',
        borderRadius: CONTAINED_BUTTON_RADIUS,
      },
      outlined: {
        color: '#51925A !important',
        backgroundColor: 'inherit',
        borderRadius: OUTLINED_BUTTON_RADIUS,
        borderColor: '#51925A !important',

        '&:hover': {
          backgroundColor: '#fff !important',
          borderColor: '#51925A',
        },
      },
    },
  },
};
