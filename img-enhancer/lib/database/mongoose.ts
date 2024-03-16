import mongoose ,{Mongoose} from 'mongoose';


const MONDODB_URL= process.env.MONGODB_URL ;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose>| null;
}

let cached: MongooseConnection = (global as any).mongoose ;

if(!cached){
    cached = (global as any).mongoose = {
        conn: null, promise: null};
}

export const connectToDatabase = async () => {
    if(cached.conn){
        return cached.conn;
    }
    if(!MONDODB_URL){
        throw new Error(' Missing MONGODB_URL ')
    }
    cached.promise=cached.promise 
    || mongoose.connect(MONDODB_URL,
        {dbName:'img-enhancer',bufferCommands:false})
      
    cached.conn= await cached.promise;
    return cached.conn;
}