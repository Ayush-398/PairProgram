import mongoose from 'mongoose';
import dns from 'dns';
import {ENV} from './env.js';

const configureMongoDnsResolvers = () => {
   const dnsServers = (ENV.MONGO_DNS_SERVERS || '')
      .split(',')
      .map((server) => server.trim())
      .filter(Boolean);

   if (!dnsServers.length) {
      return;
   }

   dns.setServers(dnsServers);
   console.log('MongoDB DNS resolvers:', dnsServers.join(', '));
};

export const connectDB = async () => {
    try {
      configureMongoDnsResolvers();
       const conn = await mongoose.connect(ENV.DB_URL);
       console.log("Connected to MongoDB:", conn.connection.host);
    } catch(error) {
       console.log("Error connecting to MongoDB:", error);
       process.exit(1);
    }
}