import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    orginalURL: {
        type: String
    },
    shortURL: {
        type: String
    },
    clicks: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export const URLSchema = mongoose.model("URLSchema", urlSchema);