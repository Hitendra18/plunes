import { Request, Response, NextFunction } from "express";

// Define a custom error type
interface CustomError extends Error {
  statusCode?: number;
}

export const invalidPathHandler = (
  _: Request,
  __: Response,
  next: NextFunction,
): void => {
  const error = new Error("Invalid Path...");
  (error as any).statusCode = 404;
  next(error);
};

export const errorResponserHandler = (
  err: CustomError,
  _: Request,
  res: Response,
  __: NextFunction,
) => {
  const statusCode = err.statusCode || 400;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};
