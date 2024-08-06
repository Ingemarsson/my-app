import * as z from "zod";
import { UserRole } from "@prisma/client";
import { newPassword } from "@/actions/new-password";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    { message: "Введите новый пароль", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    { message: "Введите пароль", path: ["password"] }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Пароль должен содержать минимум 6 символов",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Неверно указан email" }),
});

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
