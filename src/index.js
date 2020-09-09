/* eslint-disable no-console */
import Yaml from 'yamljs';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { json } from 'body-parser';
import dbConnection from './util/db';
import walletRouter from './routes/wallet.route';
import userRouter from './routes/user.route';
import stokvelRouter from './routes/stokvel.route';
import transactionsRouter from './routes/transactions.route';

const port = process.env.PORT || 3000;
const swaggerDoc = Yaml.load('src/openapi.yml');
const app = express();
app.use(express.json());

/** --- middleware ---- */
app.use(json());
/** --- middleware ---- */
// app.use('/api', indexRouter);
app.use('/api/v1/wallet', walletRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/stokvel', stokvelRouter);
app.use('/api/v1/transactions', transactionsRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/** database connection */
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once(
  'open',
  console.info.bind(console, 'connection established:')
);
/** database connection */

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at port ${port}`);
});

server.on('clientError', (err, socket) => {
  console.error(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
