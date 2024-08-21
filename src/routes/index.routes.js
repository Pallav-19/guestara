import Router from '../router.js';
import categoryRoutes from './category.routes.js';

const router = new Router();

router.use('/category', categoryRoutes);

export default router;
