import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Entry, IEntry } from "../../../models";

type Data = 
|{message: string;}
| IEntry;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query;

    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ message: "Invalid ID" });

    switch (req.method) {
        case "PUT":
            return updateEntry(req, res);
        case "GET":
            return getById(req, res);
        default:
            return res.status(400).json({ message: "Method does not exist" });
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;
  
    await db.connect();

    const entry = await Entry.findById(id);

    if (!entry) {
        await db.disconnect();
        return res.status(404).json({ message: "Entry not found" });
    }

    const { description = entry.description, status = entry.status } = req.body;
    try{
        const updatedEntry = await Entry.findByIdAndUpdate(id, {description, status}, {runValidators: true, new: true});
        await db.disconnect();
        res.status(200).json(updatedEntry!);
    }catch(error:any){
        await db.disconnect();
        res.status(400).json({message: error.errors.status.message});
    }

};


const getById = async(req: NextApiRequest, res:NextApiResponse<Data>) => {
    const { id } = req.query;
    await db.connect();
    const entry = await Entry.findById(id);
    await db.disconnect();
    if(!entry) return res.status(404).json({message: "Entry not found"});
    res.status(200).json(entry);
}
