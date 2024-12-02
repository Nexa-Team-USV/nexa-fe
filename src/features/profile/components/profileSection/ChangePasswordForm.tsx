import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Button from "../../../../components/Button";
import HidePasswordInput from "../../../../components/input/HidePasswordInput";

import { useChangePassword } from "../../hooks/useChangePassword";
import { ChangePassword } from "../../../../types/user.type";
import { changePasswordSchema } from "../../../../schemas/changePassword.schema";

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

export default function ChangePasswordForm() {
  const methods = useForm<ChangePassword>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const { handleChangePassword, isLoading } = useChangePassword();

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<ChangePassword> = (data) => {
    handleChangePassword(data, () => methods.reset());
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {inputs.map(({ id, name, placeholder, label, htmlFor }) => (
          <div key={id} className="flex flex-col gap-1 self-start">
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
        <Button type="submit" disabled={isLoading} className="sm:row-start-3">
          Save
        </Button>
      </form>
    </FormProvider>
  );
}
