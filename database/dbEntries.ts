import { isValidObjectId } from "mongoose"
import { db } from ".";
import EntryModel from "../models/Entry";
import { IEntry } from '../models/Entry';


export const getEntryById = async (id: string):Promise<IEntry | null > => {
    if(!isValidObjectId(id))return null;
    await db.connect();
    const entry = await EntryModel.findById(id).lean();
    await db.disconnect();

    return JSON.parse(JSON.stringify(entry));

}