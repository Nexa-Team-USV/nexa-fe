import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";

import { emailSchema } from "../../../../schemas/email.schema";

const options = [
  {
    value: "admin",
    text: "Admin",
  },
  {
    value: "teacher",
    text: "Teacher",
  },
  {
    value: "student",
    text: "Student",
  },
];

const formSchema = z.object({
  email: emailSchema,
  role: z.string().min(2, "Error message example..."),
});

export default function CreateAccountsForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      role: "",
    },
  });

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="emailToCreate">Email</Label>
          <Input
            type="text"
            name="email"
            id="emailToCreate"
            placeholder="Enter your email..."
          />
          {errors.email && (
            <Message variant="error">{errors.email?.message}</Message>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="role">Role</Label>
          <Select
            id="role"
            name="role"
            placeholder="Select role"
            options={options}
          />
          {errors.role && (
            <Message variant="error">{errors.role?.message}</Message>
          )}
        </div>

        <Button type="submit" className="">
          Create
        </Button>
      </form>
    </FormProvider>
  );
}
