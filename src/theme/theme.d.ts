import React from 'react';
declare module '@mui/material/styles' {
    interface TypographyVariants {
        title: React.CSSProperties;
        subtitle: React.CSSProperties;
        balance: React.CSSProperties;
        balanceTitle: React.CSSProperties;
        cardDigits: React.CSSProperties;
        selectItem: React.CSSProperties;
        expandBtnText: React.CSSProperties;
        userName: React.CSSProperties;
        greenAmount: React.CSSProperties;
        blackAmount: React.CSSProperties;
        calendarWeek: React.CSSProperties;
        dayName: React.CSSProperties;
        cardCaption: React.CSSProperties;
        expensesTotalBalance: React.CSSProperties;
        expensesTotalBalanceValue: React.CSSProperties;
        expensesSubtitle: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        title?: React.CSSProperties;
        subtitle?: React.CSSProperties;
        balance?: React.CSSProperties;
        balanceTitle?: React.CSSProperties;
        cardDigits?: React.CSSProperties;
        selectItem?: React.CSSProperties;
        expandBtnText?: React.CSSProperties;
        userName?: React.CSSProperties;
        greenAmount?: React.CSSProperties;
        blackAmount?: React.CSSProperties;
        calendarWeek?: React.CSSProperties;
        dayName?: React.CSSProperties;
        cardCaption?: React.CSSProperties;
        expensesTotalBalance?: React.CSSProperties;
        expensesTotalBalanceValue?: React.CSSProperties;
        expensesSubtitle?: React.CSSProperties;
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
        expandBtnText: true;
        userName: true;
        greenAmount: true;
        blackAmount: true;
        calendarWeek: true;
        dayName: true;
        cardCaption: true;
        expensesTotalBalance: true;
        expensesTotalBalanceValue: true;
        expensesSubtitle: true;
    }
}
