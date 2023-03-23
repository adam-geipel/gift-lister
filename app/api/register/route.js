
import { MongoClient } from 'mongodb';
import  bcrypt  from 'bcrypt';
import { streamToString } from '../../lib/api/util';

export async function POST(req, res) {
    
    const body = await streamToString(req.body).then((data) => JSON.parse(data));
    
    //Validate
    if (!body.email || !body.email.includes('@') || !body.password) {
        console.error("Email address invalid.");
        res.status(422);
        return;
    }
    //Connect with database
    const connectionStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGODB_URI}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
        
    const client = await MongoClient.connect(
        connectionStr, 
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const db = client.db();
    //Check existing
    const checkExisting = await db
        .collection('users')
        .findOne({ email: body.email });
    //Send error response if duplicate user is found
    if (checkExisting) {
        res.status(422).json({ message: 'User already exists' });
        client.close();
        return;
    }
    //Hash password
    const status = await db.collection('users').insertOne({
        email: body.email,
        password: await bcrypt.hash(body.password, 12),
    });
    //Send success response
    res.status(201).json({ message: 'User created', ...status });
    //Close DB connection
    client.close();

    return res;
} 
