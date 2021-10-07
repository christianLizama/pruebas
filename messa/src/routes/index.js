import routerx from 'express-promise-router';
import productoRouter from './Producto';

const router = routerx();

router.use('/Producto',productoRouter);
export default router;