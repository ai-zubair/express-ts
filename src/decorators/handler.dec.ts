import "reflect-metadata";
import { HttpMethods, MetadataKeys } from "./constants";

interface MethodDecoratorFactory{
  (path: string): MethodDecorator;
}

const httpHandler = (httpMethod: string): MethodDecoratorFactory => {
  return function handlerFactory(path: string): MethodDecorator{
    return function handlerDec(target: Object, key: string | symbol, desc: PropertyDescriptor){
      
      Reflect.defineMetadata(
        MetadataKeys.PATH, 
        path, 
        target, 
        key
      );

      Reflect.defineMetadata(
        MetadataKeys.METHOD, 
        httpMethod, 
        target, 
        key
      );
    }
  }
}

export const get = httpHandler(HttpMethods.GET);
export const post = httpHandler(HttpMethods.POST);
export const put = httpHandler(HttpMethods.PUT);
export const del = httpHandler(HttpMethods.DELETE);