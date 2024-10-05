import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/User";
import { AuthRequest } from "../middlewares/auth";

interface SignupRequestBody {
  userId: string;
  mobileNo: string;
  password: string;
}

export const signupUser = async (
  req: Request<{}, {}, SignupRequestBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    // get user data from request body
    const { userId, mobileNo, password } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ userId });
    if (user) {
      const err = new Error("User already registered...");
      (err as any).statusCode = 409;
      next(err);
      return;
    }

    // generate a hashed password to store into database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user
    user = await User.create({ userId, mobileNo, password: hashedPassword });

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "30d", // Token expiration
    });

    // Set the token in the Authorization header
    res.set("Authorization", `Bearer ${token}`);

    res.status(201).json({
      _id: user._id,
      userId: user.userId,
      mobileNo: user.mobileNo,
    });
    return;
  } catch (error) {
    next(error);
  }
};

interface LoginRequestBody {
  userId: string;
  password: string;
}

export const loginUser = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    // get userdata from request body
    const { userId, password } = req.body;

    // check if user exists
    const user = await User.findOne({ userId });
    if (!user) {
      const err = new Error("User does not exist.");
      (err as any).statusCode = 404;
      next(err);
      return;
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      const err = new Error("Invalid password...");
      (err as any).statusCode = 401;
      next(err);
      return;
    }

    // If password is valid, generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    // Set the token in the Authorization header
    res.set("Authorization", `Bearer ${token}`);

    res.status(200).json({
      _id: user._id,
      userId: user.userId,
      mobileNo: user.mobileNo,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const userProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    let user = await User.findOne({ userId: req.user?.userId });

    if (user) {
      res.status(200).json({
        _id: user._id,
        userId: user.userId,
        mobileNo: user.mobileNo,
      });
      return;
    } else {
      const err = new Error("User not found.");
      (err as any).statusCode = 404;
      next(err);
    }
  } catch (error) {
    next(error);
  }
};
