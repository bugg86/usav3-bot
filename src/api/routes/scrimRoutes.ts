import { Router, Request, Response } from 'express';
import { prisma } from '../db'
import { create } from '../controllers/scrimController';
import { Scrim } from '../../../generated/prisma';

    const router = Router();

    router.post('/create', (req: Request, res: Response) => {
        // Example: Fetch users from a database or service
        res.json(create(req.body as Scrim, res));
    });

    export default router;