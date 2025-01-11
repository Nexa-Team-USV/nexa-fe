import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/Button";
import Label from "../../../components/Label";
import Input from "../../../components/input/Input";
import Select from "../../../components/Select";
import Message from "../../../components/Message";
import Textarea from "../../../components/Textarea";

import { Proposal } from "../../../types/proposal.type";
import { examProposalSchema } from "../../../schemas/proposalExamTest.schema";
import { usePropose } from "../hooks/usePropose";

const typeOptions = [
  { value: "exam", text: "Exam" },
  { value: "test", text: "Test" },
];

const studyTypeOptions = [
  { value: "licenta", text: "Licenta" },
  { value: "master", text: "Master" },
];

const groupOptions = [
  { value: "3141a", text: "C - 3141A" },
  { value: "3141b", text: "C - 3141B" },
  { value: "3142a", text: "C - 3142A" },
  { value: "3142b", text: "C - 3142B" },
];

export default function ProposalForm() {
  const methods = useForm<Proposal>({
    defaultValues: {
      type: "",
      title: "",
      studyType: "",
      group: "",
      date: "",
      description: "",
    },
    resolver: zodResolver(examProposalSchema),
  });

  const { propose, isLoading } = usePropose();
  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<Proposal> = (data) => {
    propose(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="scrollbar h-4/6 w-full max-w-6xl space-y-6 overflow-auto rounded-lg border-2 border-primary bg-white p-6 sm:h-auto sm:overflow-hidden"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <h2 className="self-start text-lg font-bold">Proposal Form</h2>
          <div className="flex flex-col gap-1 lg:col-start-4">
            <Select
              id="type"
              name="type"
              placeholder="Select type"
              options={typeOptions}
            />
            {errors.type && (
              <Message variant="error">{errors.type.message}</Message>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Enter the title..."
            />
            {errors.title && (
              <Message variant="error">{errors.title.message}</Message>
            )}
          </div>

          <div className="flex flex-col gap-1">
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

          <div className="flex flex-col gap-1">
            <Label htmlFor="group">Group</Label>
            <Select
              id="group"
              name="group"
              placeholder="Select group"
              options={groupOptions}
            />
            {errors.group && (
              <Message variant="error">{errors.group.message}</Message>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              name="date"
              placeholder="Enter the date..."
            />
            {errors.date && (
              <Message variant="error">{errors.date.message}</Message>
            )}
          </div>

          <div className="col-span-1 flex flex-col gap-1 sm:col-span-2 lg:col-span-4">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Provide additional details (optional)"
            />
            {errors.description && (
              <Message variant="error">{errors.description.message}</Message>
            )}
          </div>

          <Button
            type="submit"
            className="sm:col-start-2 lg:col-start-4"
            disabled={isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
