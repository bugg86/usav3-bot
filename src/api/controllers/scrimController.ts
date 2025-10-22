import { prisma } from '../db'
import { Request, Response } from 'express';

    interface User {
        id: number;
        name: string;
    }

    export const getUsers = (req: Request, res: Response) => {
        const users: User[] = [
            { id: 1, name: 'Jane Doe', },
            { id: 2, name: 'John Smith' }
        ];
        res.json(users);
    };