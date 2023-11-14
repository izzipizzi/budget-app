import React from 'react';
import { Stack, Typography } from '@mui/material';
import { tempPaymentHistory } from '../../../shared/dummydata/transactions';
import TransactionItem from '@pages/Home/Transactions/TransactionItem';

const Transactions = () => {

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ mt: '32px', width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%', height: '28px' }}>
        <Typography variant={'title'}>Transactions</Typography>
        <Typography variant={'expandBtbText'}>View All</Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mt: '24px', width: '100%', overflow: 'hidden', overflowY:'scroll', maxHeight: '134px' }}>
        {tempPaymentHistory[0].transactions.map((transaction, index) => {
          return <TransactionItem key={index} transaction={transaction}/>;
        })}
      </Stack>
    </Stack>
  );
};
export default Transactions;