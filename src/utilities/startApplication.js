import { error, log } from 'console';

import connectDb from './connectDB.js';
import connectServer from './connectServer.js';

const startApplication = () => {
  connectDb((connected, cbError) => {
    if (cbError) {
      return error('Database connection failed:', cbError.message);
    }

    log('Database connected:', connected);

    connectServer();
  });
};

export default startApplication;
