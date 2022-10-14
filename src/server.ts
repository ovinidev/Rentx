import express, { json } from 'express';
import { categoriesRoutes } from './routes/categories';

const app = express();

app.use(json());

app.use('/categories', categoriesRoutes);

const port = 8080;

app.listen(port, () => {
  console.log(`Rondando server na porta ${port}`);
});
