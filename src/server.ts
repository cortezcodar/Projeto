import * as dotenv from 'dotenv';
dotenv.config()
import express, { json } from "express";
import { db } from './database/db';
import { router } from './router';

const app = express();

app.use(json());
app.use(router);


app.listen(3000, async () => {
  await db.sync()
 
  console.log('api running localhost:3000!')
  
  
 
});
