import React from 'react';
import { Box, Stack } from '@mui/material';
import BalanceCard from '@pages/Expenses/BalanceGroup/BalanceCard';

const BalanceGroup = () => {
  return (
    <Box
      sx={{ mt: '32px' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{}}>
        <BalanceCard
          card={{
            cardNumber: '1234567890123456',
            totalBalance: 2456,
          }}
          color={'#8234F8'}/>
        <BalanceCard
          card={{
            cardNumber: '1234567890123456',
            totalBalance: 8902.03,
          }}
          color={'#FF643B'}/>
      </Stack>
    </Box>

  );
};

export default BalanceGroup;