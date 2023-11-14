import { Avatar, Stack, Typography } from '@mui/material';
import { formatMonthYear } from '@helpers/utils';
import React from 'react';
import { User } from '@interfaces/User';

export interface ExpencesItemProps {
  user: Pick<User, 'fullName' | 'avatar'>;
  date: Date;
}

const ExpencesItem: React.FC<ExpencesItemProps> = (props) => {
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
          mb: '0px',
        },
      }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ width: '100%' }}>
        <Avatar alt="User avatar" variant="circular"
          sx={{ mr: '16px' }}
          src={props.user.avatar.url}/>
        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{ height: '40px' }}>
          <Typography variant={'userName'}>{props.user.fullName}</Typography>
          <Typography variant={'expandBtnText'}>Bank Account</Typography>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={{ height: '40px' }}>
        <Typography variant={'expandBtnText'}>{formatMonthYear(props.date)}</Typography>
      </Stack>
    </Stack>
  );
};
export default ExpencesItem;