import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/User";

interface IUser {
  userId: string;
}

// Extend Request to include the user property
export interface AuthRequest extends Request {
  user?: IUser | null;
}

export const authGuard = async (
  req: AuthRequest,
  _: Response,
  next: NextFunction,
): Promise<void> => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get Bearer token from authorization header
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

      // set the user on the request object
      req.user = (await User.findById(decoded.id).select(
        "-password",
      )) as IUser | null;

      next();
    } catch (error) {
      next(error);
    }
  } else {
    const err = new Error("Not authorized, no token.");
    (err as any).statusCode = 401;
    next(err);
  }
};
