import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link } from "react-router-dom";
import Input from "../../../components/input/Input";
import Label from "../../../components/Label";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Message from "../../../components/Message";
import HidePasswordInput from "../../../components/input/HidePasswordInput";

import { loginSchema } from "../../../schemas/login.schema";
import { Login } from "../../../types/user.type";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const { login, isLoading } = useLogin();
  const methods = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "teacher@test.test",
      password: "Te@cher1234",
    },
  });
  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<Login> = (data) => login(data);

  return (
    <FormProvider {...methods}>
      <form className="space-y-3" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email..."
          />
          {errors.email && (
            <Message variant="error">{errors.email.message}</Message>
          )}
        </div>
        <HidePasswordInput
          label="Password"
          htmlFor="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
          error={errors.password?.message}
        />

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

        <Button type="submit" size="full" disabled={isLoading}>
          Login
        </Button>
      </form>
    </FormProvider>
  );
}
