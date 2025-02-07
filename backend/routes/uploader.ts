import { db } from '..';
import { Router } from 'express';
import { nanoid } from 'nanoid';

import type { LinkReq } from "../types";

const router = Router();
router.post(`/link`, async (req, res) => {
    try {
        let gotData: LinkReq = req.body;
        let linkID = nanoid(7);

        db.data.links ||= {};

        db.data.links[linkID] = {
            destination: gotData.linkDestination,
            saved: Date.now(),
            expirationDate: gotData.expiryDate,
            creator: ""
        };

        await db.write();

        res.send({
            code: "OK",
            objectID: linkID
        });
    } catch (error) {
        console.error("faield to save:", error);
        res.status(500).send({
            code: "DB_FAULT",
            message: error
        });
    }
});
export default router;
