import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";


let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    if (!mongoServer) throw new Error("MongoMemoryServer not initialized");

    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    if (mongoServer) {
        await mongoose.connection.close();
        await mongoServer.stop();
    }
});