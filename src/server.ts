import express, { json } from 'express';
import { categoriesRoutes } from './routes/categories';
import { specificationRoutes } from './routes/specifications';

const app = express();

app.use(json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationRoutes);

const port = 8080;

app.listen(port, () => {
  console.log(`Rondando server na porta ${port}`);
});
