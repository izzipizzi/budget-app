import React from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material';
import { PaymentHistory } from '@interfaces/PaymentHistory';
import { Month } from '@enums/Month';
import Sales from './Chart';

export interface AnalyticsChartData {
  amount: number;
  month: Month
}
const Analytics = () => {
  const [ year, setYear ] = React.useState(new Date().getFullYear());

  const handleChange = (event: SelectChangeEvent) => {
    setYear(parseInt(event.target.value));
  };

  const tempPaymentHistory: PaymentHistory[] = [
    {
      month: Month.JANUARY,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 0, 22),
          amount: 1200,
        },
      ],
    },
    {
      month: Month.FEBRUARY,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 1, 22),
          amount: 1200,
        },
      ],
    },
    {
      month: Month.MARCH,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 2, 22),
          amount: 1200,
        },
      ],
    },
    {
      month: Month.APRIL,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 3, 22),
          amount: 1200,
        },
      ],
    },
    {
      month: Month.MAY,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 4, 22),
          amount: 1200,
        },
      ],
    },
    {
      month: Month.JUNE,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 5, 22),
          amount: 1200,
        },
      ],
    },
    {
      month: Month.JULY,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 6, 22),
          amount: 800,
        },
      ],
    },
    {
      month: Month.AUGUST,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 7, 22),
          amount: 200,
        },
      ],
    },
    {
      month: Month.SEPTEMBER,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 8, 22),
          amount: 600,
        },
      ],
    },
    {
      month: Month.OCTOBER,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 9, 22),
          amount: 2100,
        },
      ],
    },
    {
      month: Month.NOVEMBER,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 10, 22),
          amount: 1400,
        },
      ],
    },
    {
      month: Month.DECEMBER,
      transactions: [
        {
          user: {
            fullName: 'Andrii',
            avatar: {
              url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
            },
          },
          date: new Date(2022, 11, 22),
          amount: 12000,
        },
      ],
    },
  ];

  const dateJoined = new Date(2015, 2, 12);

  const getAllYearsFromDate = (dateJoined: Date): number[] => {
    const currentDate = new Date();
    const startYear = dateJoined.getFullYear();
    const currentYear = currentDate.getFullYear();
    const years = [];

    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }

    return years;
  };
  const yearsToDisplay = getAllYearsFromDate(dateJoined);
  const getChartData = (data: PaymentHistory[]): AnalyticsChartData[] => {
    return data.map(({ month, transactions }) => ({
      month,
      amount: transactions.reduce((total, { amount }) => total + amount, 0),
    }));
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{ mt: '32px', width: '100%' }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%', height: '36px' }}
      >
        <Typography variant={'title'}>Analytics</Typography>
        <FormControl sx={{
          m: 1,
        }}>
          <Select
            value={year.toString()}
            onChange={handleChange}
            sx={{
              width: '96px',
              height: '36px',
              backgroundColor: '#FF653A',
              borderRadius: '12px',
              '& .MuiSelect-select': {
                p: '0px',
                pl: '10px',
                pr: '4px!important',
              },
              '& .MuiSvgIcon-root': {
                color: '#FFFFFF',
                right: '2px',
              },
            }}
          >
            {yearsToDisplay.map((year, index) => {
              return <MenuItem key={index} value={year} sx={{
                backgroundColor: '#FF653A',
              }}>
                <Typography variant={'selectItem'}>Year - {year}</Typography>
              </MenuItem>;
            })}
          </Select>
        </FormControl>
      </Stack>
      <Sales data={getChartData(tempPaymentHistory)}/>
    </Stack>
  );
};

export default Analytics;