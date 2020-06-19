import { RequestHandler } from "express";
import "reflect-metadata";
import { MetadataKeys } from "./constants";

export const use = (middleware: RequestHandler[]): MethodDecorator => {
  return function useDec(target: Object, key: string|symbol, desc: PropertyDescriptor){
    Reflect.defineMetadata(
      MetadataKeys.MIDDLEWARE, 
      middleware, 
      target, 
      key
    );
  }
}