import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme';
import { Link as RouterLink } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '@images/svg/home.svg';
import { ReactComponent as ExpensesIcon } from '@images/svg/expenses.svg';
import { ReactComponent as AddIcon } from '@images/svg/add.svg';
import { ReactComponent as CalendarIcon } from '@images/svg/calendar.svg';
import { ReactComponent as SettingsIcon } from '@images/svg/settings.svg';
import Header from './components/Header/Header';

const App = () => {
  const [ value, setValue ] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: React.SetStateAction<number>) => {
    console.warn(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{
      mt: '39px',
      mx: '27px',
    }}>
      <Header/>

      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, mt:'20px', mb:'21px', mx:'27px' }} >
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction icon={<HomeIcon/>} component={RouterLink} to="home"/>
          <BottomNavigationAction icon={<ExpensesIcon/>} component={RouterLink} to="expenses" />
          <BottomNavigationAction icon={<AddIcon/>} component={RouterLink} to="/"/>{/*cut icon, fix later*/}
          <BottomNavigationAction icon={<CalendarIcon/>}/>
          <BottomNavigationAction icon={<SettingsIcon/>}/>
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default App;