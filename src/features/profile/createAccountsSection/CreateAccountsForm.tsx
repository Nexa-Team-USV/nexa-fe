import { FormEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Message from "../../../components/Message";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
import AccountsToCreateList from "./AccountsToCreateList";
import NoEmailsMessage from "../NoEmailsMessage";

export type AccountToCreate = { id: number; email: string; role: string };

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
  email: z.string().min(2, "Error message example..."),
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
  const [accountsToCreate, setAccountsToCreate] = useState<AccountToCreate[]>(
    [],
  );

  const { errors } = methods.formState;

  function handleCreateAccounts(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(accountsToCreate);
  }

  function handleDeleteAccount(id: number) {
    setAccountsToCreate((prev) => prev.filter((account) => account.id !== id));
  }

  const onAddAccount: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    setAccountsToCreate((prev) => [
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

        <div className="flex flex-col gap-1 sm:row-start-2">
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

        <Button type="submit" className="sm:self-end">
          Add
        </Button>

        {accountsToCreate.length ? (
          <div className="sm:col-span-2 sm:row-start-3">
            <AccountsToCreateList
              accounts={accountsToCreate}
              onDeleteAccount={handleDeleteAccount}
            />
          </div>
        ) : (
          <NoEmailsMessage />
        )}

        <Button
          onClick={handleCreateAccounts}
          type="submit"
          className="sm:row-start-4"
        >
          Create
        </Button>
      </form>
    </FormProvider>
  );
}
