import express, { Application, Request, Response } from 'express';
import scrimRoutes from './routes/scrimRoutes'

    const app: Application = express();
    const PORT = process.env.PORT || 3000;

    app.use(express.json()); // Enable JSON body parsing
    app.use('/scrim', scrimRoutes)

    app.get('/', (req: Request, res: Response) => {
        res.send('API is running with TypeScript!');
    });

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });