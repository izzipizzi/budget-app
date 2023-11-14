import { Container } from '@mui/material';
import React from 'react';
import CalendarDayPicker from '@pages/Expenses/CalendarDayPicker/CalendarDayPicker';

const Expenses = () => {
  return (
    <Container maxWidth="sm" sx={{
      px: '27px',
    }}>
      <CalendarDayPicker/>
    </Container>
  );
};

export default Expenses;
