import React from 'react';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { ReactComponent as PurpleCardIcon } from '@images/svg/card-purple.svg';
import { ReactComponent as OrangeCardIcon } from '@images/svg/card-orange.svg';
import { CreditCard } from '@interfaces/CreditCard ';
import { formatCardBalance } from '@helpers/utils';

export interface BalanceCardProps {
  color: string;
  card: Pick<CreditCard, 'cardNumber' | 'totalBalance'>;
}

const BalanceCard: React.FC<BalanceCardProps> = (props) => {
  const getCardNumber = () => {
    return '**** **** ' + props.card.totalBalance.toString().replace(/\D/g, '').slice(-4);
  };
  const getCardIcon = () => {
    switch (props.color) {
      case '#FF643B':
        return <OrangeCardIcon/>;
      case '#8234F8':
        return <PurpleCardIcon/>;
      default:
        return <PurpleCardIcon/>;
    }
  };
  return (
    <Box>
      <Card sx={{
        width: '170px',
        backgroundColor: props.color,
        borderRadius: '6px',
        height: '170px',
      }}>
        <CardContent sx={{
          pb: '83px',
          pt: '23px',
          px: '22px',
          height: '100%',
          '&:last-child': {
            pb: '83px',
          },
        }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ height: '100%' }}>
            <Typography variant="expensesTotalBalance">Total Balance</Typography>
            <Typography variant="expensesTotalBalanceValue">${formatCardBalance(props.card.totalBalance)}</Typography>
          </Stack>
        </CardContent>
      </Card>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: '172px',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px 10px 0px 0px',
          px: '21px',
          height: '55px',
          mt: '-52px',
        }}>
        <Box sx={{ mr: '8px', display: 'flex' }}>
          {getCardIcon()}
        </Box>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start">
          <Typography variant="cardCaption">Bank Account</Typography>
          <Typography variant="expandBtnText">{getCardNumber()}</Typography>
        </Stack>
      </Stack>
    </Box>

  );
};

export default BalanceCard;