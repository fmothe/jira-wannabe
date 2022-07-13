import mongoose, { Model, Schema } from "mongoose";
import { Entry } from '../interfaces';


export interface IEntry extends Entry{}

const EntrySchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
    },
    status: {
        type: String,
        enum: {
            values: ["pending", "finished", "in-progress"],
            message: "{VALUE} is not a valid status",
        },
        default: "pending",
    },
});

const EntryModel: Model<IEntry> =
    mongoose.models.Entry || mongoose.model("Entry", EntrySchema);


export default EntryModel;