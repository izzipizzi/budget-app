import React from 'react';
import { Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { ReactComponent as DotsIcon } from '@images/svg/dots.svg';
import { ReactComponent as MasterCardIcon } from '@images/svg/mastercard.svg';
import { CardProvider } from '../../shared/enums/CardProvider';

const CardHolder = () => {
  const formattedCard = (card: string) => {
    const cardNumberArr = card.match(/.{1,4}/g) || [];
    return cardNumberArr.map((digits, index) => <Typography key={index} variant="cardDigits">{digits}</Typography>);
  };

  const getCardIcon = (cardProvider: CardProvider) => {
    switch (cardProvider) {
      case CardProvider.VISA:
        return <MasterCardIcon/>;
      case CardProvider.MASTERCARD:
        return <MasterCardIcon/>;
      default:
        return <MasterCardIcon/>;
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: '32px' }}
    >
      <Card sx={{ width: '285px', bgcolor: '#9A63FB', borderRadius: '24px', height: '149px', mb: '-106px' }}>
      </Card>
      <Card sx={{ width: '360px', maxWidth: '360px', bgcolor: '#2F3046', borderRadius: '24px', height: '187px' }}>
        <CardContent sx={{ pt: '23px', pl: '29px', pr: '27px', pb: '27px', height: '100%', position: 'relative' }}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            sx={{
              height: '100%',
              width: '100%',
            }}
          >
            <Typography variant="balanceTitle">Total Balance</Typography>
            <Typography variant="balance">{'$19287124'}</Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: 'auto',
                width: '100%',
                height: '100%',
              }}>
              {formattedCard('1234567891234567')}
              <Box sx={{
                ml:'auto',
              }}>
                {getCardIcon(CardProvider.MASTERCARD)}
              </Box>
            </Stack>
          </Stack>
          <IconButton sx={{
            position: 'absolute',
            top: '9px',
            right: '27px',
          }}>
            <DotsIcon/>
          </IconButton>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CardHolder;