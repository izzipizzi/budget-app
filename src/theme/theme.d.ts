import React from 'react';
declare module '@mui/material/styles' {
    interface TypographyVariants {
        title: React.CSSProperties;
        subtitle: React.CSSProperties;
        balance: React.CSSProperties;
        balanceTitle: React.CSSProperties;
        cardDigits: React.CSSProperties;
        selectItem: React.CSSProperties;
        expandBtbText: React.CSSProperties;
        userName: React.CSSProperties;
        greenAmount: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
        balance?: React.CSSProperties;
        balanceTitle?: React.CSSProperties;
        cardDigits?: React.CSSProperties;
        selectItem?: React.CSSProperties;
        expandBtbText?: React.CSSProperties;
        userName?: React.CSSProperties;
        greenAmount?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        title: true;
        subtitle: true;
        balance: true;
        balanceTitle: true;
        cardDigits: true;
        selectItem: true;
        expandBtbText: true;
        userName: true;
        greenAmount: true;
    }
}
