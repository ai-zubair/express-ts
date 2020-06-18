import "reflect-metadata";
import { AppRouter } from "../AppRouter";
import { HttpMethods } from "./constants";

export const controller = (route: string): ClassDecorator => {
  return function controllerDec( target: Function ): void{
    
    const classPrototype = target.prototype;
    const appRouter = AppRouter.getRouter();

    for (const memberKey in classPrototype) {
     
      const path = Reflect.getMetadata("path", classPrototype, memberKey);
      const method: HttpMethods = Reflect.getMetadata("method", classPrototype, memberKey);
      
      if(path && method){
        appRouter[method](`${route}${path}`,classPrototype[memberKey])
      }
    }
  }
}