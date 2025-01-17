import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";

import { CreateAccount } from "../../../../types/user.type";
import { createAccountSchema } from "../../../../schemas/createAccount.schema";

const roleOptions = [
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

const studyTypeOptions = [
  {
    value: "licenta",
    text: "Licenta",
  },
  {
    value: "master",
    text: "Master",
  },
];

const groupOptions = [
  { value: "C3141A", text: "C - 3141A" },
  { value: "C3141B", text: "C - 3141B" },
  { value: "C3142A", text: "C - 3142A" },
  { value: "C3142B", text: "C - 3142B" },
];

type Props = {
  isLoading: boolean;
  onCreateAccount: (data: CreateAccount) => void;
};

export default function CreateAccountForm({
  onCreateAccount,
  isLoading,
}: Props) {
  const methods = useForm<CreateAccount>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      email: "",
      role: "",
      studyType: "",
      group: "",
    },
  });

  const { errors } = methods.formState;

  const isStudent = methods.watch("role") === "student";

  const onSubmit: SubmitHandler<CreateAccount> = (data) => {
    onCreateAccount(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <div className="flex flex-col gap-1 self-start">
          <Label htmlFor="emailToCreate">Email</Label>
          <Input
            id="emailToCreate"
            type="text"
            name="email"
            placeholder="Enter your email..."
          />
          {errors.email && (
            <Message variant="error">{errors.email.message}</Message>
          )}
        </div>

        <div className="flex flex-col gap-1 self-start">
          <Label htmlFor="role">Role</Label>
          <Select
            id="role"
            name="role"
            placeholder="Select role"
            options={roleOptions}
          />
          {errors.role && (
            <Message variant="error">{errors.role.message}</Message>
          )}
        </div>

        {isStudent && (
          <div className="flex flex-col gap-1 self-start">
            <Label htmlFor="studyType">Study type</Label>
            <Select
              id="studyType"
              name="studyType"
              placeholder="Select study type"
              options={studyTypeOptions}
            />
            {errors.studyType && (
              <Message variant="error">{errors.studyType.message}</Message>
            )}
          </div>
        )}

        {isStudent && (
          <div className="flex flex-col gap-1 self-start">
            <Label htmlFor="group">Group</Label>
            <Select
              id="group"
              name="group"
              placeholder="Select group"
              options={groupOptions}
            />
            {errors.group && (
              <Message variant="error">{errors.group?.message}</Message>
            )}
          </div>
        )}

        <Button type="submit" disabled={isLoading}>
          Create
        </Button>
      </form>
    </FormProvider>
  );
}
