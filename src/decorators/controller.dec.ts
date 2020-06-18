import "reflect-metadata";
import { AppRouter } from "../AppRouter";

export const controller = (route: string): ClassDecorator => {
  return function controllerDec( target: Function ): void{
    const classPrototype = target.prototype;
    const appRouter = AppRouter.getRouter();
    for (const memberKey in classPrototype) {
      const path = Reflect.getMetadata("path", classPrototype, memberKey);
      if(path){
        appRouter.get(`${route}${path}`,classPrototype[memberKey])
      }
    }
  }
}