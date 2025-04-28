import mongoose from "mongoose";
const WordSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    username: { type: String, required: true },
    text: { type: String, required: true },
    created_af: { type: Date, required: true },
})
export const WordSchema()