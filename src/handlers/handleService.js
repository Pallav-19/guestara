const handleService = (promise, res, next, successStatus = 200) =>
  Promise.resolve(promise)
    .then((result) => res.status(successStatus).json(result))
    .catch((err) => {
      next(err);
    });

export default handleService;
