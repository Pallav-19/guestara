const handleController = (promise, res, next) =>
  Promise.resolve(promise)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      next(err);
    });

export default handleController;
