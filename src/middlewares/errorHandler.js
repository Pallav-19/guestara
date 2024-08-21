import NODE_ENVIRONMENTS from '../constants/nodeEnvironments.js';
import getErrorStatus from '../utilities/getErrorStatus.js';

const errorHandler = (err, req, res, next) => {
  if (err) {
    const statusCode = getErrorStatus(err.name);

    res.status(statusCode).json({
      message: err.message || 'Something went wrong',
      stack: process.env.NODE_ENV === NODE_ENVIRONMENTS.DEV ? err.stack : undefined,
    });
  } else next();
};

export default errorHandler;
