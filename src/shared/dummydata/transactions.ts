import { PaymentHistory } from '@interfaces/PaymentHistory';
import { Month } from '@enums/Month';

export const tempPaymentHistory: PaymentHistory[] = [
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
        date: new Date(2022, 0, 26),
        amount: 234,
      },
      {
        user: {
          fullName: 'Pedro',
          avatar: {
            url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
          },
        },
        date: new Date(2022, 0, 25),
        amount: 123,
      },
      {
        user: {
          fullName: 'Marco',
          avatar: {
            url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
          },
        },
        date: new Date(2022, 0, 24),
        amount: 1410.22,
      },
      {
        user: {
          fullName: 'Pablo Escobar',
          avatar: {
            url: 'https://gravatar.com/avatar/0b60671029d8510949c94f756ae0ccf7?s=400&d=retro&r=x',
          },
        },
        date: new Date(2022, 0, 21),
        amount: 7666,
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
        amount: 6722.22,
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