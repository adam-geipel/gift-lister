import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { hashPassword } from '../../../../lib/auth';
import { streamToString } from '../../../../lib/api/util';
import { connectToDb } from '../../../../lib/db';

export async function POST(req: NextRequest, res: NextResponse) {
    
    const body: any = await streamToString(req.body).then((data: string) => JSON.parse(data));
    
    const client: MongoClient = await connectToDb();
    const db = client.db();
    //Check existing
    const checkExisting = await db
        .collection('users')
        .findOne({ username: body.username });
    //Send error response if duplicate user is found
    if (checkExisting) {
        client.close();
        return new Response(null, {status: 422});
    }
    //Hash password and insert
    const status = await db.collection('users').insertOne({
        username: body.username,
        emailAddress: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        dateOfBirth: body.birthDate,
        password: await hashPassword(body.password),
    });
    
    //Close DB connection
    client.close();

    return new Response(null, {status: 201})
} 
