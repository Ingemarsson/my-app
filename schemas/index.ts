import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Неверно указан email" }),
  password: z.string().min(1, {
    message: "Введите пароль",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Неверно указан email" }),
  password: z.string().min(6, {
    message: "Пароль должен содержать минимум 6 символов",
  }),
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
});
