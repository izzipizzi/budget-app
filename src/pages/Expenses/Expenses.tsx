import { Container } from '@mui/material';
import React from 'react';
import CalendarDayPicker from '@pages/Expenses/CalendarDayPicker/CalendarDayPicker';
import BalanceGroup from '@pages/Expenses/BalanceGroup/BalanceGroup';
import ExpensesOverall from '@pages/Expenses/ExpensesOverall/ExpensesOverall';

const Expenses = () => {
  return (
    <Container maxWidth="sm" sx={{
      px: '27px',
    }}>
      <CalendarDayPicker/>
      <BalanceGroup/>
      <ExpensesOverall/>
    </Container>
  );
};

export default Expenses;
