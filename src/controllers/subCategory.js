import handleService from '../handlers/handleService.js';
import SubCategoryService from '../services/subCategory.js';

const subCategoryService = new SubCategoryService();

export const createSubCategory = async (req, res, next) =>
  handleService(subCategoryService.create(req.body), res, next, 201);

export const getSubCategories = async (req, res, next) => handleService(subCategoryService.get(req.query), res, next);

export const getSubCategoryById = async (req, res, next) =>
  handleService(subCategoryService.getById(req.params.id), res, next);

export const updateSubCategory = async (req, res, next) =>
  handleService(subCategoryService.update(req.params.id, req.body), res, next);
