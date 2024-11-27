import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";

import { useDeleteAccount } from "../../hooks/useDeleteAccount";
import { DeleteAccount } from "../../../../types/user.type";
import { deleteAccountSchema } from "../../../../schemas/deleteAccount.schema";

export default function DeleteAccountForm() {
  const methods = useForm<DeleteAccount>({
    resolver: zodResolver(deleteAccountSchema),
    defaultValues: {
      email: "",
    },
  });
  const { deleteAccount, message, isLoading, error } = useDeleteAccount();

  const { errors } = methods.formState;

  const onAddAccount: SubmitHandler<DeleteAccount> = (data) => {
    deleteAccount(data.email);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onAddAccount)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="emailToDelete">Email</Label>
          <Input
            type="text"
            name="email"
            id="emailToDelete"
            placeholder="Enter your email..."
          />
          {errors.email && (
            <Message variant="error">{errors.email?.message}</Message>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="sm:row-start-2">
          Delete
        </Button>
        {message && (
          <Message className="text-center sm:row-start-3">{message}</Message>
        )}
        {error && (
          <Message variant="error" className="text-center sm:row-start-3">
            {error}
          </Message>
        )}
      </form>
    </FormProvider>
  );
}
