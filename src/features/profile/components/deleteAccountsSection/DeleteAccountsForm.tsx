import { FormEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import AccountsToDeleteList from "./AccountsToDeleteList";
import NoEmailsMessage from "../NoEmailsMessage";
import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";

export type AccountToDelete = { id: number; email: string };

const formSchema = z.object({
  email: z.string().min(2, "Error message example..."),
});

export default function DeleteAccountsForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const [accountsToDelete, setAccountsToDelete] = useState<AccountToDelete[]>(
    [],
  );

  const { errors } = methods.formState;

  function handleDeleteAccounts(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(accountsToDelete);
  }

  function handleDeleteAccount(id: number) {
    setAccountsToDelete((prev) => prev.filter((account) => account.id !== id));
  }

  const onAddAccount: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    setAccountsToDelete((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...data,
      },
    ]);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onAddAccount)}
        className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-1 sm:col-span-2">
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

        <Button type="submit" className="sm:row-start-2">
          Add
        </Button>

        {accountsToDelete.length ? (
          <div className="sm:col-span-2 sm:row-start-3">
            <AccountsToDeleteList
              accounts={accountsToDelete}
              onDeleteAccount={handleDeleteAccount}
            />
          </div>
        ) : (
          <NoEmailsMessage />
        )}

        <Button
          type="submit"
          onClick={handleDeleteAccounts}
          className="sm:row-start-4"
        >
          Delete
        </Button>
      </form>
    </FormProvider>
  );
}
