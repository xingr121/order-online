import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const handleValidationError = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("name must be a string"),
  body("city").isString().notEmpty().withMessage("name must be a string"),
  body("country").isString().notEmpty().withMessage("name must be a string"),
  handleValidationError,
];
