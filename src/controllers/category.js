import CategoryService from '../services/category.js';
import handleService from '../handlers/handleService.js';

const categoryService = new CategoryService();

export const createCategory = async (req, res, next) => handleService(categoryService.create(req.body), res, next, 201);

export const getCategories = async (req, res, next) => handleService(categoryService.get(req.query), res, next);

export const getCategory = async (req, res, next) => handleService(categoryService.getById(req.params.id), res, next);

export const updateCategory = async (req, res, next) =>
  handleService(categoryService.update(req.params.id, req.body), res, next);
