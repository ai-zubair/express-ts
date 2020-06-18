import "reflect-metadata";

export const get = (path: string): MethodDecorator => {
  return function getDec(target: Object, key: string | symbol, desc: PropertyDescriptor){
    Reflect.defineMetadata("path", path, target, key)
  }
}