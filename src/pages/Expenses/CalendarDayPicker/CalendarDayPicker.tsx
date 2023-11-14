import React, { useState } from 'react';
import {
  addDays,
  addMonths,
  addWeeks,
  format,
  getWeek, isSameDay,
  lastDayOfWeek,
  startOfWeek,
  subMonths,
  subWeeks,
} from 'date-fns';
import { Box, IconButton, Stack, Typography } from '@mui/material';

import { ReactComponent as LeftArrowIcon } from '@images/svg/arrow-left.svg';
import { ReactComponent as RightArrowIcon } from '@images/svg/arrow-right.svg';

const CalendarDayPicker = () => {

  const [ currentMonth, setCurrentMonth ] = useState(new Date());
  const [ currentWeek, setCurrentWeek ] = useState(getWeek(currentMonth));
  const [ selectedDate, setSelectedDate ] = useState(new Date());

  const changeMonthHandle = (btnType: string) => {
    if (btnType === 'prev') {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === 'next') {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType: string) => {
    if (btnType === 'prev') {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === 'next') {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day: Date, dayStr: string) => {
    setSelectedDate(day);
    // showDetailsHandle(dayStr);
  };

  const renderDays = () => {
    const dateFormat = 'EEEEE';
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <Typography variant="dayName" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </Typography>,
      );
    }
    return (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%', px: '14px', mt: '16px' }}>
        {days}
      </Stack>
    );
  };

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <Box
            className={`dayCell ${
              isSameDay(day, new Date())
                ? 'today'
                : isSameDay(day, selectedDate)
                  ? 'selected'
                  : ''
            }`}
            key={day.toString()}
            onClick={() => {
              const dayStr = format(cloneDay, 'ccc dd MMM yy');
              onDateClickHandle(cloneDay, dayStr);
            }}
          >
            <Typography variant="dayName">{formattedDate}</Typography>
          </Box>,
        );
        day = addDays(day, 1);
      }

      rows.push(
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '100%',
            mt: '16px',
            '& .dayCell': {
              display: 'flex',
              height: '57px',
              padding: '12px 10px 9px 10px',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              borderRadius: '8px',
              position: 'relative',
            },
            '& .selected,.today': {
              backgroundColor: '#FF643B',
              '& ::before': {
                transform: 'translateX(-50 %)',
                borderRadius: '100%',
                position: 'absolute',
                background: '#FFFFFF',
                bottom: '9px',
                height: '6px',
                content: '""',
                width: '6px',
                right: '15.5px',
              },
              '& .MuiTypography-dayName': {
                color: '#FFFFFF',
              },
            },
          }}>
          {days}
        </Stack>,
      );
      days = [];
    }
    return (
      <>{rows}</>
    );
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: '32px' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: '100%', px: '6px' }}>
        <IconButton onClick={() => changeWeekHandle('prev')}>
          <LeftArrowIcon/>
        </IconButton>
        <Typography variant={'calendarWeek'}>{format(currentMonth, 'MMMM yyyy')}</Typography>
        <IconButton onClick={() => changeWeekHandle('next')}>
          <RightArrowIcon/>
        </IconButton>
      </Stack>
      {renderDays()}
      {renderCells()}
    </Stack>
  );
};
export default CalendarDayPicker;