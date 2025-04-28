import mongoose from "mongoose";
const WordSchema = new mongoose.Schema({
    text: { type: String, required: true },
})
export const WordModel = mongoose.model("Word", WordSchema)  