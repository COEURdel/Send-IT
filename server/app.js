import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';
import router from './routes';
import createtables from './db/CreateTables';
import db from './db/index';


dotenv.config();

const app = express();

// db.connect().then(()=>{
//   createtables()
// });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1/', router);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Server started on port', port);
});

export default app;
exports.server = server;
