import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/Button";
import Label from "../../../components/Label";
import Input from "../../../components/input/Input";
import Select from "../../../components/Select";
import Message from "../../../components/Message";
import Textarea from "../../../components/Textarea";

import { ExamProposal } from "../../../types/proposal.type";
import { examProposalSchema } from "../../../schemas/proposalExamTest.schema";
 
 
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
  const methods = useForm<ExamProposal>({
    defaultValues: {
      type: "",
      title: "",
      studyType: "",
      group: "",
      date:"",
      description: "",
    },
    resolver: zodResolver(examProposalSchema),
  });

  const { errors } = methods.formState;

 

  const onSubmit: SubmitHandler<ExamProposal> = (data) => {
    console.log({ ...data });
  };

  return (
    <FormProvider {...methods}>
    <form
      className="w-full max-w-6xl space-y-6 rounded-lg border-2 border-primary bg-white p-6"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-4 items-center justify-between gap-4">
        <h2 className="self-start text-lg font-bold">Proposal Form</h2>
        <div className="col-start-4 flex flex-col gap-1">
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

      <div className="grid grid-cols-4 gap-4">
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
 

        <div className="col-span-4 flex flex-col gap-1">
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

        <Button type="submit" className="col-start-2">
          Submit
        </Button>
      </div>
    </form>
  </FormProvider>
);
}

  