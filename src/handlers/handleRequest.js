const handleRequest = (request) => async (req, res, next) => Promise.resolve(request(req, res, next)).catch(next);

export default handleRequest;
