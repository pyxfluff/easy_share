import { Router } from 'express';
import { db } from '..';

const router = Router();

router.get(`/l/:linkID`, (req, res) => {
    res.send(db.data.links[req.params.linkID]);
});

export default router;
