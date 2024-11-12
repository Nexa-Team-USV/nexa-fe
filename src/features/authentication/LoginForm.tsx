import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import Message from "../../components/Message";

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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function LoginForm() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = methods.formState;

  console.log(errors);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

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
