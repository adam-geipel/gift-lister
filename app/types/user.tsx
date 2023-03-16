import {connection} from '../types/connection';

export type User = {
    id: string,
    username: string,
    email: string,
    name: string,
    age: number,
    gender: string,
    country: string,
    connections?: connection[],
    wishList?: any[]
}
