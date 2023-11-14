import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import ExpencesItem from '@pages/Expenses/ExpensesOverall/ExpencesItem';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { calculatePercentage } from '@helpers/utils';

export interface ExpensesOverallProps {
}

const ExpensesOverall: React.FC<ExpensesOverallProps> = (props) => {
  const [ user, setUser ] = useState({
    fullName: 'Andrii',
    avatar: {
      url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
    },
  });
  const [ date, setDate ] = useState(new Date(2022, 0, 26));
  const [ budget, setBudget ] = useState({
    spend: 2486,
    total: 3000,
    percent: 0,
  });

  useEffect(() => {
    setBudget((prevBudget) => ({ ...prevBudget, percent: calculatePercentage(prevBudget.spend,prevBudget.total) }));
  }, [ budget.spend, budget.total ]);

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ mt: '34px', width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%', height: '28px' }}>
        <Typography variant={'title'}>Expences</Typography>
        <Typography variant={'expandBtnText'}>View All</Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          mt: '24px', width: '100%', minHeight: '184px',
        }}>
        <ExpencesItem user={user} date={date}/>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
          sx={{ width: '100%' }}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}>
            <Typography variant="expensesSubtitle">Total Spend</Typography>
            <Typography variant="greenAmount">${budget.spend}</Typography>
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}>
            <Typography variant="expensesSubtitle">Total Budget</Typography>
            <Typography variant="blackAmount">${budget.total}</Typography>
          </Stack>
          <Typography variant="greenAmount"
            sx={{
              alignSelf: 'flex-end',
              ml: 'auto!important',
            }}>
            {budget.percent}
          </Typography>
        </Stack>
        <Box sx={{ width: '100%', mt: '16px' }}>
          <LinearProgress
            variant="determinate"
            value={budget.percent}
            sx={{
              height: 13,
              borderRadius: 13,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: '#FFFFFF',
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: '#8635F7',
              },
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ExpensesOverall;