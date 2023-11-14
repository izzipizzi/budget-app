import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { ReactComponent as BellIcon } from '@images/svg/bell.svg';

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
    >
      <Avatar alt="User avatar" variant="rounded"
        src="https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=200&d=robohash&r=g"/>
      <Typography variant="title">
                Home
      </Typography>
      <BellIcon/>
    </Stack>
  );
};

export default Header;