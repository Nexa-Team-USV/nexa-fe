import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import Label from "../../../components/Label";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Message from "../../../components/Message";

import { loginSchema } from "../../../schemas/login.schema";
import { Login } from "../../../types/user.type";
import { useLogin } from "../hooks/useLogin";

const inputs = [
  {
    id: "email",
    type: "text",
    name: "email",
    placeholder: "Enter your email...",
    label: "Email",
  },
  {
    id: "password",
    type: "password",
    name: "password",
    placeholder: "Enter your password...",
    label: "Password",
  },
] as const;

export default function LoginForm() {
  const { login } = useLogin();
  const methods = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<Login> = (data) => login(data);

  return (
    <FormProvider {...methods}>
      <form className="space-y-3" onSubmit={methods.handleSubmit(onSubmit)}>
        {inputs.map(({ label, ...input }) => (
          <div key={input.id} className="flex flex-col gap-1">
            <Label htmlFor={input.id}>{label}</Label>
            <Input {...input} />
            {errors[input.name]?.message && (
              <Message variant="error">{errors[input.name]?.message}</Message>
            )}
          </div>
        ))}

        <div className="flex flex-col items-center justify-between gap-1 xsm:flex-row">
          <div className="flex items-center gap-1">
            <Checkbox id="rememberMe" />

            <Label htmlFor="rememberMe" className="cursor-pointer">
              Remember me
            </Label>
          </div>

          <Link to="/forgotPassword" className="text-sm font-medium">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" size="full">
          Login
        </Button>
      </form>
    </FormProvider>
  );
}
