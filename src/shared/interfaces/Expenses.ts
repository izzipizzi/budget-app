import { Transaction } from './Transaction';

export interface Expenses {
    date: Date,
    transactions: Transaction[],
    totalSpend: number,
    budget: number,
    
}