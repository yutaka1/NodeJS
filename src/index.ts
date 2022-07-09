import express from 'express';
import cors from 'cors';

const app =  express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"]
}));

app.get('/', (Request, Response) => {
  Response.send('Hello World2');
});

app.listen(8080, () => {
  console.log('listning to port 8080')
});