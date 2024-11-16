import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Message from "../../../components/Message";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
import AccountsToCreateList from "./AccountsToCreateList";

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
  role: z.string(),
});

export default function CreateAccountsForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      role: "admin",
    },
  });
  const [accountsToCreate, setAccountsToCreate] = useState<AccountToCreate[]>(
    [],
  );

  const {
    trigger,
    getValues,
    formState: { errors, isValid },
  } = methods;

  function handleAddEmail() {
    trigger();

    if (isValid) {
      setAccountsToCreate((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          ...getValues(),
        },
      ]);
    }
  }

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-8 gap-y-4"
      >
        <div className="col-span-2 flex flex-col gap-1">
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

        <div className="row-start-2 flex flex-col gap-1">
          <Label htmlFor="role">Role</Label>
          <Select
            id="role"
            name="role"
            defaultValue="admin"
            options={options}
          />
        </div>

        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleAddEmail();
          }}
          className="self-end"
        >
          Add
        </Button>

        {accountsToCreate.length ? (
          <div className="col-span-2 row-start-3">
            <AccountsToCreateList accounts={accountsToCreate} />
          </div>
        ) : (
          <p className="col-span-2 row-start-3 rounded-lg bg-white p-4">
            No emails added...
          </p>
        )}

        <Button type="submit" className="row-start-4">
          Create
        </Button>
      </form>
    </FormProvider>
  );
}
