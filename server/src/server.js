import express from 'express';
import {ENV} from './lib/env.js';
import Path from 'path';
import { connectDB } from './lib/db.js';
import { clerkClient, requireAuth, getAuth, clerkMiddleware } from '@clerk/express'
import ChatRoutes from "./routes/ChatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import { serve } from "inngest/express";  
import { inngest, functions } from "./lib/inngest.js"; 



const app = express();
const __dirname = Path.resolve();
app.use(clerkMiddleware())

app.use(express.json());
//app.use(cors({origin:ENV.CLIENT_URL,redentials:true}));
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", ChatRoutes)
app.use("/api/sessions", sessionRoutes)
app.get('/', requireAuth(), async (req, res) => {
     const { userId } = getAuth(req)
    const user = await clerkClient.users.getUser(userId)
  
    res.status(200).json({
      message: "hello",
      user: {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        name: `${user.firstName} ${user.lastName}`
      }
    });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(Path.join(__dirname, "../frontend/dist"))); 
  app.get("/*", (req, res) => { 
    res.sendFile(Path.join(__dirname, "../frontend", "dist", "index.html")); 
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => 
      console.log(`server is running on port ${ENV.PORT}`) 
    );
  } catch(error) {
    console.error("Error starting the server!!", error);
    process.exit(1); 
  }
}

startServer();