import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../database";
import { connect } from "../../database/db";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (process.env.NODE_ENV === "production") {
        return res
            .status(401)
            .json({ message: "Not authorized to this service" });
    }

    await db.connect();

    /**
     * between this u can do what u want with the db
     */
    await db.disconnect();

    res.status(200).json({ message: "procesook" });
}
