import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Message from "../../../components/Message";
import Button from "../../../components/Button";
import AccountsToDeleteList from "./AccountsToDeleteList";

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

  const {
    trigger,
    getValues,
    formState: { errors, isValid },
  } = methods;

  function handleAddEmail() {
    trigger();

    if (isValid) {
      setAccountsToDelete((prev) => [
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
        className="grid grid-cols-2 gap-x-16 gap-y-4"
      >
        <div className="col-span-2 flex flex-col gap-1">
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

        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleAddEmail();
          }}
          className="row-start-2"
        >
          Add
        </Button>

        {accountsToDelete.length ? (
          <div className="col-span-2 row-start-3">
            <AccountsToDeleteList accounts={accountsToDelete} />
          </div>
        ) : (
          <p className="col-span-2 row-start-3 rounded-lg bg-white p-4">
            No emails added...
          </p>
        )}

        <Button type="submit" className="row-start-4">
          Delete
        </Button>
      </form>
    </FormProvider>
  );
}
