import express, { json } from 'express';
import { router } from './routes';
import swagger from 'swagger-ui-express';
import swaggerFile from './swagger.json';

const app = express();

app.use(json());

app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile));

app.use(router);

const port = 8080;

app.listen(port, () => {
  console.log(`Rodando server na porta ${port}`);
});
