import Category from '../models/category.js';

class CategoryService {
  async create(DataTransferObject) {
    const category = new Category(DataTransferObject);

    return category.save();
  }

  async get(query) {
    return Category.find(query);
  }
}

export default CategoryService;
