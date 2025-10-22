import { Scrim } from '../../../generated/prisma';
import { prisma } from '../db'
import { Request, Response } from 'express';

    export async function create(body: Scrim, res: Response){
        const response = await prisma.scrim.create({
            data: {
                osuId: body.osuId,
                discordUsername: body.discordUsername,
                discordId: BigInt(body.discordId),
                osuUsername: body.osuUsername,
                weeksRegistered: body.weeksRegistered
            }
        });

        return response;
    }