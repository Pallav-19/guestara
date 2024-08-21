const handleController = (promise) =>
  promise
    .then((data) => data)
    .catch((err) => {
      throw err;
    });

export default handleController;
