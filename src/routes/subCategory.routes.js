import {
  createSubCategory,
  getSubCategories,
  getSubCategoryById,
  updateSubCategory,
} from '../controllers/subCategory.js';
import Router from '../router.js';

const router = new Router();

router.post('/', createSubCategory);

router.get('/all', getSubCategories);

router.get('/:id', getSubCategoryById);

router.patch('/:id', updateSubCategory);

export default router;
