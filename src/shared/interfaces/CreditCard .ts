import { CardProvider } from '../enums/CardProvider';
import { PaymentHistory } from './PaymentHistory';

export interface CreditCard {
    totalBalance: number,
    cardNumber: string,
    provider: CardProvider,
    paymentHistory: PaymentHistory
}