const { z } = require("zod");

const registerValidation = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(5, { message: "Name must be atleast 5 charactors" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be atleast 8 charactors" }),
});

const loginValidation = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email addredd" }),
  password: z
    .string({ required_error: "Password is reuired" })
    .trim()
    .min(8, { message: "Password must be atleast 8 charactors" }),
});

module.exports = { registerValidation, loginValidation };
