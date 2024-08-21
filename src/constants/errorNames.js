const ERROR_NAMES = Object.freeze({
  VALIDATION_ERROR: 'ValidationError',
  CAST_ERROR: 'CastError',
  MONGO_ERROR: 'MongoServerError',
  JSON_WEB_TOKEN_ERROR: 'JsonWebTokenError',
  TOKEN_EXPIRED_ERROR: 'TokenExpiredError',
  SYNTAX_ERROR: 'SyntaxError',
  NOT_FOUND_ERROR: 'NotFoundError',
  UNAUTHORIZED_ERROR: 'UnauthorizedError',
  FORBIDDEN_ERROR: 'ForbiddenError',
  TYPE_ERROR: 'TypeError',
  REFERENCE_ERROR: 'ReferenceError',
  RANGE_ERROR: 'RangeError',
  CUSTOM_ERROR: 'CustomError',
});

export default ERROR_NAMES;
