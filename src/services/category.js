import ERROR_NAMES from '../constants/errorNames.js';
import CustomError from '../errors/customError.js';
import Category from '../models/category.js';

class CategoryService {
  async create(dataTransferObject) {
    const category = new Category(dataTransferObject);

    return category.save();
  }

  async get(query) {
    return Category.find(query);
  }

  async getById(id) {
    const category = await Category.findById(id);
    if (!category) throw new CustomError('Category not found', ERROR_NAMES.NOT_FOUND_ERROR);

    return category;
  }

  async update(id, dataTransferObject) {
    const updatedCategory = await Category.findByIdAndUpdate(id, dataTransferObject, { new: true });
    if (!updatedCategory) throw new CustomError('Category not found', ERROR_NAMES.NOT_FOUND_ERROR);

    return updatedCategory;
  }
}

export default CategoryService;
