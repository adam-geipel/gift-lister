import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import { streamToString } from '@/lib/api/util';

export async function GET(req: NextRequest, { params } : any) {
    
    const user = await findById(params.id);
    
    return NextResponse.json(user, {status: 200});  
}

export async function PATCH(req: NextRequest, {params} : any) {
    const body: any = await streamToString(req.body).then((data: string) => JSON.parse(data));
    const user = findById(params.id);

    if (!user) {
        return new Response(null, {status: 422});
    }

    const client: MongoClient = await clientPromise;
    const updateRes = client.db()
        .collection('users')
        .findOneAndUpdate(
            {"_id": new ObjectId(params.id)}, 
            {
                $set: {
                    birthday: body.birthday,
                    gender: body.gender,
                    country: body.country,
                },
            },
        );

    return NextResponse.json(updateRes.value, {status: 200})    
    
}

async function findById(id: string) {
    
    const client: MongoClient = await clientPromise;
    const db = client.db();

    const user = await db 
        .collection('users')
        .findOne( { "_id": new ObjectId(id)});

    return user;

}