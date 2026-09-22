import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { ProductController } from './controller';
import { ProductService } from '../services/product.service';


export class ProductRoutes {


  static get routes(): Router {

    const router = Router();
     const prodcutService = new ProductService();
     const controller = new ProductController( prodcutService );
    
    // Definir las rutas
     router.get('/', controller.getProducts );
     router.post('/', [ AuthMiddleware.validateJWT ], controller.createProduct );




    return router;
  }


}