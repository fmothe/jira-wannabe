import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
     isConnected: 0
}


export const connect  = async() => {
    if(mongoConnection.isConnected === 1) {
        console.log("MongoDB is already connected");
        return;
    }

    if(mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        if(mongoConnection.isConnected === 1) {
            console.log("Using existing MongoDB connection");
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL_LOCALHOST || '');
    mongoConnection.isConnected = 1;
    console.log("MongoDB connected: ", process.env.MONGO_URL_LOCALHOST);
}


export const disconnect = async() => {
    if(mongoConnection.isConnected === 0) return;
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
    
}