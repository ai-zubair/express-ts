import "reflect-metadata";
import { AppRouter } from "../AppRouter";
import { HttpMethods, MetadataKeys } from "./constants";

export const controller = (route: string): ClassDecorator => {
  return function controllerDec( target: Function ): void{
    
    const classPrototype = target.prototype;
    const appRouter = AppRouter.getRouter();

    for (const memberKey in classPrototype) {
     
      const path = Reflect.getMetadata(
        MetadataKeys.PATH, 
        classPrototype, 
        memberKey
      );

      const method: HttpMethods = Reflect.getMetadata(
        MetadataKeys.METHOD, 
        classPrototype, 
        memberKey
      );

      const middlewares = Reflect.getMetadata(
        MetadataKeys.MIDDLEWARE,
        classPrototype,
        memberKey
      ) || [];

      if(path && method){
        appRouter[method](`${route}${path}`, ...middlewares, classPrototype[memberKey])
      }
    }
  }
}