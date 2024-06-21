// frontend/utils/validation.ts

import * as yup from "yup";
import { Resolver } from "react-hook-form";
import { SignupFormValues, LoginFormValues } from "./types"; // Adjust the path as per your project structure

// Define types for form values

// Define types for validation errors
export interface ValidationErrors {
  [key: string]: { type: string; message: string };
}

// Define Yup schema for signup form
export const signupValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

// Define Yup schema for login form
export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

// Create a resolver using Yup for signup form
export const signupResolver: Resolver<SignupFormValues> = async (values) => {
  try {
    // Validate the form values against the schema
    await signupValidationSchema.validate(values, { abortEarly: false });
    return {
      values,
      errors: {},
    };
  } catch (errors) {
    // Handle Yup validation errors
    if (errors instanceof yup.ValidationError) {
      const yupErrors: ValidationErrors = {};
      errors.inner.forEach((error) => {
        if (!yupErrors[error.path as string]) {
          yupErrors[error.path as string] = {
            type: error.type ?? "validation",
            message: error.message ?? "Validation error",
          };
        }
      });
      return {
        values: {},
        errors: yupErrors,
      };
    } else {
      console.error(
        "Non-validation error occurred during form validation:",
        errors
      );
      return {
        values: {},
        errors: { general: { type: "error", message: "An error occurred" } },
      };
    }
  }
};

// Create a resolver using Yup for login form
export const loginResolver: Resolver<LoginFormValues> = async (values) => {
  try {
    // Validate the form values against the schema
    await loginValidationSchema.validate(values, { abortEarly: false });
    return {
      values,
      errors: {},
    };
  } catch (errors) {
    // Handle Yup validation errors
    if (errors instanceof yup.ValidationError) {
      const yupErrors: ValidationErrors = {};
      errors.inner.forEach((error) => {
        if (!yupErrors[error.path as string]) {
          yupErrors[error.path as string] = {
            type: error.type ?? "validation",
            message: error.message ?? "Validation error",
          };
        }
      });
      return {
        values: {},
        errors: yupErrors,
      };
    } else {
      console.error(
        "Non-validation error occurred during form validation:",
        errors
      );
      return {
        values: {},
        errors: { general: { type: "error", message: "An error occurred" } },
      };
    }
  }
};
