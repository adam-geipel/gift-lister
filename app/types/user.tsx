import {Connection} from '../types/connection';

export type User = {
    id?: string,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    password: string,
    confirmPassword?: string,
    age?: number,
    gender?: string,
    country?: string,
    connections?: Connection[],
    wishList?: any[]
}
