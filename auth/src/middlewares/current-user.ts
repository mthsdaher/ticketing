import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

//inside of the Express project, find the interface Request that is created and add currentUser?: set to type UserPayload.
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

//describe who is the current user
export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) { //if session is defined then we'll access the jwt property
    return next();
  }


  try { //decode the jwt key
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY! //! -> it's already defined
    ) as UserPayload; //verify the object in the interface
    req.currentUser = payload;
  } catch (err) {}

  next();
};
