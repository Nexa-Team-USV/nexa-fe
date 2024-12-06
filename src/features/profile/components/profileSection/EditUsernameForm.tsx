import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";

import { EditUsername } from "../../../../types/user.type";
import { editUsernameSchema } from "../../../../schemas/editUsername.schema";
import { useEditProfile } from "../../hooks/useEditProfile";

export default function EditUsernameForm() {
  const methods = useForm<EditUsername>({
    resolver: zodResolver(editUsernameSchema),
    defaultValues: {
      newUsername: "",
    },
  });

  const { handleEditProfile, isLoading } = useEditProfile();

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<EditUsername> = (data) => {
    handleEditProfile(data, () => methods.reset());
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="newUsername">New username</Label>
          <Input
            type="text"
            name="newUsername"
            id="newUsername"
            placeholder="Enter your new username..."
          />
          {errors.newUsername && (
            <Message variant="error">{errors.newUsername.message}</Message>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="sm:row-start-2">
          Save
        </Button>
      </form>
    </FormProvider>
  );
}
