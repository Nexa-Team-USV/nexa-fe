import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import Label from "../../../../components/Label";
import Input from "../../../../components/input/Input";
import Message from "../../../../components/Message";
import Button from "../../../../components/Button";
import Select from "../../../../components/Select";

import { EditProfile } from "../../../../types/user.type";
import { editProfileSchema } from "../../../../schemas/editProfile.schema";
import { useEditProfile } from "../../hooks/useEditProfile";

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

export default function EditProfileForm() {
  const methods = useForm<EditProfile>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      newUsername: "",
      newStudyType: "",
      newGroup: "",
    },
  });

  const { handleEditProfile, isLoading } = useEditProfile();

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<EditProfile> = (data) => {
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

        <div className="flex flex-col gap-1 self-start">
          <Label htmlFor="newStudyType">New study type</Label>
          <Select
            id="newStudyType"
            name="newStudyType"
            placeholder="Select study type"
            options={studyTypeOptions}
          />
          {errors.newStudyType && (
            <Message variant="error">{errors.newStudyType.message}</Message>
          )}
        </div>

        <div className="flex flex-col gap-1 self-start">
          <Label htmlFor="newGroup">New group</Label>
          <Select
            id="newGroup"
            name="newGroup"
            placeholder="Select group"
            options={groupOptions}
          />
          {errors.newGroup && (
            <Message variant="error">{errors.newGroup.message}</Message>
          )}
        </div>

        <Button type="submit" disabled={isLoading} className="sm:row-start-3">
          Save
        </Button>
      </form>
    </FormProvider>
  );
}
