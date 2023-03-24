import { MongoClient } from 'mongodb';

//Connect with database
export async function connectToDb() {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGODB_URI}/giftLister?retryWrites=true&w=majority`;  
    const client = MongoClient.connect(
        uri, 
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    return client;
}