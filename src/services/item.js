import ERROR_NAMES from '../constants/errorNames.js';
import CustomError from '../errors/customError.js';
import Item from '../models/item.js';

class ItemService {
  create(dataTransferObject) {
    const item = new Item(dataTransferObject);

    return item.save();
  }

  get(query) {
    return Item.find(query).populate('category').populate('subCategory');
  }

  async getById(id) {
    const item = await Item.findById(id).populate('category').populate('subCategory');
    if (!item) throw new CustomError('Sub Category not found', ERROR_NAMES.NOT_FOUND_ERROR);

    return item;
  }

  async update(id, dataTransferObject) {
    const updatedItem = await Item.findByIdAndUpdate(id, dataTransferObject, { new: true });
    if (!updatedItem) throw new CustomError('Sub Category not found', ERROR_NAMES.NOT_FOUND_ERROR);

    return updatedItem;
  }
}

export default ItemService;
