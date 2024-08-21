import CategoryService from '../services/category.js';
import handleController from '../handlers/handleController.js';

const categoryService = new CategoryService();

export const createCategory = async (req, res, next) => handleController(categoryService.create(req.body), res, next);

export const getCategories = async (req, res, next) => {
  const result = await categoryService.get(req.query);

  res.status(200).json(result);
};
