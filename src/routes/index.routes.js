import Router from '../router.js';
import categoryRouter from './category.routes.js';

const router = new Router();

router.use('/category', categoryRouter);

export default router;
