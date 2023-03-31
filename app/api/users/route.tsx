import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function GET(req: NextRequest, res: NextResponse) {
    
    const client: MongoClient = await clientPromise;
    const db = client.db();

    const users = await db
        .collection('users')
        .find({}).toArray();
    
    return NextResponse.json(users, {status: 200});  
}
