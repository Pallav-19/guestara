import handleController from './handleController.js';

const handleRouter = (controller) => async (req, res, next) => {
  try {
    const result = await handleController(controller(req, res, next));

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export default handleRouter;
