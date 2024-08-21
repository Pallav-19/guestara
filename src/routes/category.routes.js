import { createCategory, getCategories } from '../controllers/category.js';
import Router from '../router.js';

const router = new Router();

router.post('/', createCategory);

router.get('/all', getCategories);

export default router;
