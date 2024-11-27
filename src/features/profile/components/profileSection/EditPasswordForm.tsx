import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Button from "../../../../components/Button";
import HidePasswordInput from "../../../../components/input/HidePasswordInput";
import { passwordSchema } from "../../../../schemas/password.schema";

const inputs = [
  {
    id: "newPassword",
    name: "newPassword",
    placeholder: "New password...",
    label: "New password",
    htmlFor: "newPassword",
  },
  {
    id: "confirmNewPassword",
    name: "confirmNewPassword",
    placeholder: "Confirm new password...",
    label: "Confirm new password",
    htmlFor: "confirmNewPassword",
  },
  {
    id: "oldPassword",
    name: "oldPassword",
    placeholder: "Old password...",
    label: "Old password",
    htmlFor: "oldPassword",
  },
] as const;

const formSchema = z.object({
  oldPassword: passwordSchema,
  newPassword: passwordSchema,
  confirmNewPassword: passwordSchema,
});

export default function EditPasswordForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {inputs.map(({ id, name, placeholder, label, htmlFor }) => (
          <div key={id} className="flex flex-col gap-1">
            <HidePasswordInput
              id={id}
              name={name}
              label={label}
              htmlFor={htmlFor}
              placeholder={placeholder}
              error={errors[name]?.message}
            />
          </div>
        ))}
        <Button type="submit" className="sm:row-start-3">
          Save
        </Button>
      </form>
    </FormProvider>
  );
}
