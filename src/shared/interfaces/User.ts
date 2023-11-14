import { CreditCard } from './CreditCard ';

export interface User {
    creditCards: CreditCard[],
    fullName: string,
    avatar: {
        url: string
    }
    dateJoined: Date
}