import { Router, Request, Response } from 'express';
import { getUsers } from '../controllers/scrimController';

    const router = Router();

    router.get('/users', (req: Request, res: Response) => {
        // Example: Fetch users from a database or service
        getUsers(req, res);
    });

    export default router;