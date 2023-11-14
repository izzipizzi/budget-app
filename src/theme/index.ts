import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    title: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      color: '#000000',
    },
    subtitle: {
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      color: '#000000',
    },
    balance: {
      fontSize:  '30px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
      color:'#FFFFFF',
    },
    balanceTitle: {
      fontSize:  '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      color:'#FAFAFA',
    },
    cardDigits: {
      fontSize:  '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      color:'#A3A3A3',
      marginRight: '16px',
    },
    selectItem: {
      fontSize:  '13px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      color:'#FFFFFF',
    },
  },
});
