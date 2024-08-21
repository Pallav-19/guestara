import Router from '../router.js';
import categoryRouter from './category.routes.js';
import subCategoryRouter from './subCategory.routes.js';
import itemRoutes from './item.routes.js';

const router = new Router();

router.use('/category', categoryRouter);
router.use('/sub-category', subCategoryRouter);
router.use('/item', itemRoutes);

export default router;
