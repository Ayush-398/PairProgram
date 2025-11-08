import express from 'express';
import {ENV} from './lib/env.js';
import Path from 'path';
import { connectDB } from './lib/db.js';

const app = express();
const __dirname = Path.resolve();

app.get('/',(req,res)=>{
    res.status(200).send({message: "hello"})
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(Path.join(__dirname, "../frontend/dist"))); // Changed 'path' to 'Path'
  app.get("/*", (req, res) => { // Changed "/{*any}" to "/*"
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
  }
}

startServer(); 