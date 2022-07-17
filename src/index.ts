require('dotenv').config();

import express from 'express';
import cors from 'cors';
import { routes } from "./routes";
import { AppDataSource } from "./dataSource";
import cookieParser from 'cookie-parser';


AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
      credentials: true,
      origin: ["http://localhost:3000"]
    }));

    routes(app);

    app.listen(8000, () => {
      console.log('listning to port 8000')
    });
  })
  .catch((error) => console.log(error))
