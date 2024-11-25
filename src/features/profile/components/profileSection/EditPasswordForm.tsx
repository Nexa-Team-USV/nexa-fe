import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";

const inputs = [
  {
    id: "repeatPassword",
    type: "password",
    name: "repeatPassword",
    placeholder: "New password...",
    label: "New password",
  },
  {
    id: "repeatNewPassword",
    type: "password",
    name: "repeatNewPassword",
    placeholder: "Repeat new password...",
    label: "Repeat new password",
  },
] as const;

const formSchema = z.object({
  repeatPassword: z.string().min(2, "Error message example..."),
  repeatNewPassword: z.string().min(2, "Error message example..."),
});

export default function EditPasswordForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      repeatPassword: "",
      repeatNewPassword: "",
    },
  });

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {inputs.map(({ label, ...input }) => (
          <div key={input.id} className="flex flex-col gap-1">
            <Label htmlFor={input.id}>{label}</Label>
            <Input {...input} />
            {errors[input.name] && (
              <Message variant="error">{errors[input.name]?.message}</Message>
            )}
          </div>
        ))}
        <Button type="submit">Save</Button>
      </form>
    </FormProvider>
  );
}
