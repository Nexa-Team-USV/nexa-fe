import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";

const formSchema = z.object({
  username: z.string().min(2, "Username should be longer..."),
});

export default function ChangeProfileForm() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username..."
          />
          {errors.username && (
            <Message variant="error">{errors.username?.message}</Message>
          )}
        </div>
        <Button type="submit" className="sm:row-start-2">
          Save
        </Button>
      </form>
    </FormProvider>
  );
}
