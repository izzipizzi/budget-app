import { User } from './User';

export interface Transaction {
    user: Pick<User,'fullName' | 'avatar'>,
    date: Date,
    amount: number

}