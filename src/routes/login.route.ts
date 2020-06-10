import { Router, Request, Response } from "express";

const loginRouter = Router();

loginRouter.get('/',(req: Request, res: Response): void=>{
    res.send(`
    <div>
      Hello There!
    </div>
  `)
});

export { loginRouter }