import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose';
import { startBot } from './bot.js';
const app = express()

startBot()

mongoose.connect(process.env.MONGODB)
    .then(() => console.log())

app.listen(process.env.PORT, () => console.log("Server running"))  