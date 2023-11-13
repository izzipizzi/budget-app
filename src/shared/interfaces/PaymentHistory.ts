import { Month } from '../enums/Month';
import { Transaction } from './Transaction';

export interface PaymentHistory {
    month: Month,
    transactions: Transaction[],
}