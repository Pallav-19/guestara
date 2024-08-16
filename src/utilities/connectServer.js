import { error, info } from 'console';
import http from 'http';

import app from '../app.js';

const httpServer = http.createServer(app);

const connectServer = () => {
  httpServer.listen(process.env.PORT, (err) => {
    if (err) {
      return error('Error spinning up the server:', err);
    }

    info(`Server running on port ${process.env.PORT}!`);
  });
};

export default connectServer;
