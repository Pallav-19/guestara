import ERROR_NAMES from '../constants/errorNames.js';
import CustomError from '../errors/customError.js';
import SubCategory from '../models/subCategory.js';

class SubCategoryService {
  create(dataTransferObject) {
    const subCategory = new SubCategory(dataTransferObject);

    return subCategory.save();
  }

  get(query) {
    return SubCategory.find(query).populate('category');
  }

  async getById(id) {
    const subCategory = await SubCategory.findById(id).populate('category');
    if (!subCategory) throw new CustomError('Sub Category not found', ERROR_NAMES.NOT_FOUND_ERROR);

    return subCategory;
  }

  async update(id, dataTransferObject) {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(id, dataTransferObject, { new: true });
    if (!updatedSubCategory) throw new CustomError('Sub Category not found', ERROR_NAMES.NOT_FOUND_ERROR);

    return updatedSubCategory;
  }
}

export default SubCategoryService;
