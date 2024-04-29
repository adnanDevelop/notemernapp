const { z } = require("zod");

const registerValidator = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(8, { message: "Name must be atleast 10 charactors" })
    .max(15, {
      message: "Name must not be more than 15 charactors",
    }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be atleast 5 charactors" })
    .max(15, {
      message: "Email must not be more than 15 charactors",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be atleast 8 charactors" }),
});

module.exports = registerValidator;
