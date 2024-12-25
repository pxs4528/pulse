import { z } from 'zod'


export const UserFormValidation = z.object({
    firstName: z
      .string()
      .min(2, "First Name must be at least 2 characters")
      .max(50, "First Name must be at most 50 characters"),
    lastName: z
        .string()
        .min(2, "Last Name must be at least 2 characters")
        .max(50, "Last Name must be at most 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    age: z.number().int().positive("Age must be a positive number"),
    address: z.string(),
  });
  
