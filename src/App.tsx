import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '@images/svg/home.svg';
import { ReactComponent as HomeIconFilled } from '@images/svg/home-filled.svg';
import { ReactComponent as ExpensesIcon } from '@images/svg/expenses.svg';
import { ReactComponent as ExpensesIconFilled } from '@images/svg/expenses-filled.svg';
import { ReactComponent as AddIcon } from '@images/svg/add.svg';
import { ReactComponent as CalendarIcon } from '@images/svg/calendar.svg';
import { ReactComponent as CalendarIconFilled } from '@images/svg/calendar-filled.svg';
import { ReactComponent as SettingsIcon } from '@images/svg/settings.svg';
import { ReactComponent as SettingsIconFilled } from '@images/svg/settings-filled.svg';
import Header from './components/Header/Header';

const App = () => {
  const [ icon, setIcon ] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: React.SetStateAction<number>) => {
    console.warn(newValue);
    setIcon(newValue);
  };

  const getHomeIcon = () => icon === 0 ? <HomeIconFilled/> : <HomeIcon/>;
  const getExpensesIcon = () => icon === 1 ? <ExpensesIconFilled/> : <ExpensesIcon/>;
  const getCalendarIcon = () => icon === 3 ? <CalendarIconFilled/> : <CalendarIcon/>;
  const getSettingsIcon = () => icon === 4 ? <SettingsIconFilled/> : <SettingsIcon/>;

  return (
    <Box sx={{
      mt: '39px',
      mx: '27px',
    }}>
      <Header/>
      <Outlet/>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, mt: '20px', mb: '21px', mx: '27px' }}>
        <BottomNavigation value={icon} onChange={handleChange}>
          <BottomNavigationAction icon={getHomeIcon()} component={RouterLink} to="home"/>
          <BottomNavigationAction icon={getExpensesIcon()} component={RouterLink} to="expenses"/>
          <BottomNavigationAction icon={<AddIcon/>} component={RouterLink} to="/"/>
          <BottomNavigationAction icon={getCalendarIcon()} component={RouterLink} to="/"/>
          <BottomNavigationAction icon={getSettingsIcon()} component={RouterLink} to="/"/>
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default App;