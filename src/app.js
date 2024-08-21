import dotenv from 'dotenv-safe';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import corsOptions from './configurations/corsOptions.js';
import errorHandler from './middlewares/errorHandler.js';
import appRoutes from './routes/index.routes.js';

dotenv.config();

const app = express();

//used for logging API request info.
app.use(morgan('dev'));

//used for checking cross origin resource sharing permissions.
app.use(cors(corsOptions));

//used for parsing json request bodies with header Content-Type: application/json
app.use(express.json());

//used for parsing data sent from html form using header Content-Type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// middleware to narrow down all the APIs
app.use('/api', appRoutes);

//error handler middleware
app.use(errorHandler);

export default app;
