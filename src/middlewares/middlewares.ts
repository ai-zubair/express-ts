import { Request, Response, NextFunction } from "express";

const authenticate = (req: Request, res: Response, next: NextFunction): void =>{
  if( req.session && req.session.isAuthenticated ){
    next();
  }else{
    res.status(401).send("Access Denied")
  }
}

export { authenticate }