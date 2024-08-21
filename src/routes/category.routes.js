import { createCategory, getCategories, getCategory, updateCategory } from '../controllers/category.js';
import Router from '../router.js';

const router = new Router();

router.post('/', createCategory);

router.get('/all', getCategories);

router.get('/:id', getCategory);

router.patch('/:id', updateCategory);

export default router;
