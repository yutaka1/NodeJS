import {Request, Response} from "express";
import { User } from "../entity/userEntity";


export const PermissionMiddleware = (access: string) => {
  return (req: Request, res: Response, next: Function) => {
    const user: User = req["user"];

    const permissions = user.role.permissions;
    
    if(req.method === 'GET') {
      if(!permissions.some(p => (p.name === `view_${access}`) || (p.name === `edit_${access}`))){
        return res.status(401).send({
          message: 'unauthenticated'
        })
      }
    } else{
      if(!permissions.some(p => (p.name === `edit_${access}`))){
        return res.status(401).send({
          message: 'unauthenticated'
        })
      }
    }

    next();
  }
}