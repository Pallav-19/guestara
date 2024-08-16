import { exec } from 'child_process';
import { error } from 'console';

import NODE_ENVIRONMENTS from './constants/nodeEnvironments.js';
import startApplication from './utilities/startApplication.js';

const start = () => {
  if (process.env.NODE_ENV === NODE_ENVIRONMENTS.DEV)
    exec('npm run lint:fix', (err, stdout, stderr) => {
      if (err) {
        error('Linting failed:', stderr, stdout);
        process.exit(1);
      }

      startApplication();
    });
  else startApplication();
};

start();
