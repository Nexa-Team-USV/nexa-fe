import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../components/Label";
import Input from "../../../components/Input";
import Message from "../../../components/Message";
import Button from "../../../components/Button";
import { HiMiniPlus } from "react-icons/hi2";

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
  const [accountsToDelete, setAccountsToDelete] = useState<
    { id: number; email: string }[]
  >([]);

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
    setAccountsToDelete((prev) => [
      ...prev,
      { id: prev.length + 1, email: data.email },
    ]);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-16 gap-y-4"
      >
        <div className="col-span-2 flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <div className="flex items-center gap-4">
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
            <Button
              type="submit"
              variant="empty"
              className="rounded-full bg-primary p-1"
            >
              <HiMiniPlus className="stroke-1 text-2xl text-white" />
            </Button>
          </div>
          {errors.email && (
            <Message variant="error">{errors.email?.message}</Message>
          )}
        </div>

        {accountsToDelete.length ? (
          <ul className="col-span-2 row-start-2 rounded-lg bg-white p-4">
            {accountsToDelete.map((account) => (
              <li key={account.id}>
                <span>{`${account.id}.) `}</span>
                {account.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="col-span-2 row-start-2">No emails added...</p>
        )}

        <Button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="col-start-1 row-start-3"
        >
          Delete
        </Button>
      </form>
    </FormProvider>
  );
}
