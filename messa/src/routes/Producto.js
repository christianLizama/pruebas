import routerx from 'express-promise-router';
import ProductoController from '../controllers/ProductoController';

const router = routerx();

router.post('/add',ProductoController.add);
router.get('/query',ProductoController.query);
router.get('/list',ProductoController.list);
router.put('/update',ProductoController.update);
router.delete('/remove',ProductoController.remove);
router.put('/activate',ProductoController.activate);
router.put('/deactivate',ProductoController.deactivate);

export default router;