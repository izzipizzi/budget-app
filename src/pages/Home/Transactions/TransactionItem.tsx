import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { Transaction } from '@interfaces/Transaction';
import { formatDate } from '@helpers/utils';

export interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: '100%',
        height: '60px',
        mb: '16px',
        p: '10px',
        '&:last-child': {
          mb:'0px',
        },
      }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: '100%' }}>
        <Avatar alt="User avatar" variant="circular"
          sx={{ mr: '16px' }}
          src={transaction.user.avatar.url}/>
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{ height: '40px' }}>
          <Typography variant={'userName'}>{transaction.user.fullName}</Typography>
          <Typography variant={'expandBtbText'}>Bank Account</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="flex-end"
        sx={{ height: '40px' }}>
        <Typography variant={'greenAmount'}>${transaction.amount}</Typography>
        <Typography variant={'expandBtbText'}>{formatDate(transaction.date)}</Typography>
      </Stack>
    </Stack>
  );
};
export default TransactionItem;