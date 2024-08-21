import Express from 'express';

import handleRequest from './handlers/handleRequest.js';

class Router extends Express.Router {
  wrapRouteHandler(request) {
    return handleRequest(request);
  }

  route(path) {
    const route = super.route(path);

    route.all((req, res, next) => {
      try {
        const wrappedRouteHandler = this.wrapRouteHandler(route.handle.bind(route));

        return wrappedRouteHandler(req, res, next);
      } catch (error) {
        return next(error);
      }
    });

    return route;
  }
}

export default Router;
