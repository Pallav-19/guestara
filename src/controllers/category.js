import CategoryService from '../services/category.js';

const categoryService = new CategoryService();

export const createCategory = async (req, res, next) => categoryService.create(req.body);

export const getCategories = async (req, res, next) => categoryService.get(req.query);
