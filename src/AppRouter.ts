import { Router } from "express";

class AppRouter{

  private static routerInstance: Router;

  static getRouter(): Router {
    if(!AppRouter.routerInstance){
      AppRouter.routerInstance = Router(); 
    }
    return AppRouter.routerInstance
  }



}

export { AppRouter }