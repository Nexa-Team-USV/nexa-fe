import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";

import { emailSchema } from "../../../../schemas/email.schema";

const formSchema = z.object({
  email: emailSchema,
});

export default function DeleteAccountsForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { errors } = methods.formState;

  const onAddAccount: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
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

        <Button type="submit" className="sm:row-start-2">
          Delete
        </Button>
      </form>
    </FormProvider>
  );
}
