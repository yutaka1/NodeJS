import express, { Request, Response } from 'express';
import cors from 'cors';
import { routes } from "./routes";
import { AppDataSource } from "./data-source";


AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(cors({
      origin: ["http://localhost:3000"]
    }));

    routes(app);

    app.listen(8000, () => {
      console.log('listning to port 8000')
    });
  })
  .catch((error) => console.log(error))


