import { createItem, getItems, getItemById, updateItem } from '../controllers/item.js';
import Router from '../router.js';

const router = new Router();

router.post('/', createItem);

router.get('/all', getItems);

router.get('/:id', getItemById);

router.patch('/:id', updateItem);

export default router;
