import { ChangeEvent, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/Button";
import Label from "../../../components/Label";
import Input from "../../../components/input/Input";
import Select from "../../../components/Select";
import Message from "../../../components/Message";
import Textarea from "../../../components/Textarea";
import { HiMiniPlus, HiMiniXMark } from "react-icons/hi2";

import { ScheduleExamTest } from "../../../types/schedule.type";
import { scheduleExamTestSchema } from "../../../schemas/scheduleExamTest.schema";
import { useSchedule } from "../hooks/useSchedule";

const typeOptions = [
  { value: "exam", text: "Exam" },
  { value: "test", text: "Test" },
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

const classroomOptions = [
  { value: "C101", text: "C101" },
  { value: "C201", text: "C201" },
  { value: "C204", text: "C204" },
  { value: "C207", text: "C207" },
];

const groupOptions = [
  { value: "C3141A", text: "C - 3141A" },
  { value: "C3141B", text: "C - 3141B" },
  { value: "C3142A", text: "C - 3142A" },
  { value: "C3142B", text: "C - 3142B" },
];

export default function ScheduleForm() {
  const methods = useForm<ScheduleExamTest>({
    defaultValues: {
      type: "",
      title: "",
      studyType: "",
      group: "",
      assistant: "",
      classroom: "",
      date: "",
      startTime: "",
      endTime: "",
      description: "",
      classrooms: [],
      assistants: [],
    },
    resolver: zodResolver(scheduleExamTestSchema),
  });
  const [classrooms, setClassrooms] = useState<string[]>([]);
  const [assistants, setAssistants] = useState<string[]>([]);

  const { schedule, isLoading } = useSchedule();

  const { errors } = methods.formState;

  function handleAddClassroom(e: ChangeEvent<HTMLSelectElement>) {
    if (!e.target.value.length) return;

    const updatedClassrooms = !classrooms.includes(e.target.value)
      ? [...classrooms, e.target.value]
      : [...classrooms];

    setClassrooms(updatedClassrooms);
    methods.setValue("classrooms", updatedClassrooms as [string, ...string[]]);
    methods.clearErrors("classroom");
  }

  function handleDeleteClassroom(index: number) {
    setClassrooms((prev) => [...prev.filter((_, i) => i !== index)]);

    const updatedClassrooms = [...classrooms.filter((_, i) => i !== index)];
    setClassrooms(updatedClassrooms);
    methods.setValue("classrooms", updatedClassrooms as [string, ...string[]]);
  }

  function handleAddAssistant() {
    const assistant = methods.watch("assistant");
    if (!assistant.length) return;

    const updatedAssistants = !assistants.includes(assistant)
      ? [...assistants, assistant]
      : [...assistants];
    setAssistants(updatedAssistants);
    methods.setValue("assistants", updatedAssistants as [string, ...string[]]);
    methods.clearErrors("assistant");
  }

  function handleDeleteAssistant(index: number) {
    const updatedAssistants = [...assistants.filter((_, i) => i !== index)];
    setAssistants(updatedAssistants);
    methods.setValue("assistants", updatedAssistants as [string, ...string[]]);
  }

  const onSubmit: SubmitHandler<ScheduleExamTest> = (data) => {
    schedule(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="scrollbar h-4/6 w-full max-w-6xl space-y-6 overflow-auto rounded-lg border-2 border-primary bg-white p-6 sm:h-3/4 lg:h-auto lg:overflow-hidden"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <h2 className="self-start text-lg font-bold">Schedule Form</h2>
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

          <div className="flex flex-col gap-1">
            <Label htmlFor="startTime">Start time</Label>
            <Input
              type="time"
              step={1}
              id="startTime"
              name="startTime"
              placeholder="Enter the start time..."
            />
            {errors.startTime && (
              <Message variant="error">{errors.startTime.message}</Message>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="endTime">End time</Label>
            <Input
              type="time"
              step={1}
              id="endTime"
              name="endTime"
              placeholder="Enter the end time..."
            />
            {errors.endTime && (
              <Message variant="error">{errors.endTime.message}</Message>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="classroom">Classroom</Label>
            <Select
              id="classroom"
              name="classroom"
              placeholder="Select classroom"
              onChange={handleAddClassroom}
              options={classroomOptions}
            />
            {errors.classroom && (
              <Message variant="error">{errors.classroom.message}</Message>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="assistant">Assistant</Label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                id="assistant"
                name="assistant"
                placeholder="Enter the assistant..."
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddAssistant();
                }}
                variant="empty"
              >
                <HiMiniPlus className="stroke-1 text-2xl text-primary" />
              </Button>
            </div>
            {errors.assistant && (
              <Message variant="error">{errors.assistant.message}</Message>
            )}
          </div>

          {classrooms.length > 0 && (
            <div className="space-y-1 sm:col-span-2">
              <h4 className="text-sm font-medium">Classrooms list</h4>
              <ul className="scrollbar flex max-h-20 flex-col gap-1 overflow-auto rounded-lg border-2 border-primary px-2 py-1">
                {classrooms.map((classroom, i) => (
                  <li key={classroom} className="flex items-center gap-2">
                    <span>{`${i + 1}.)`}</span>
                    <span>{classroom}</span>
                    <Button
                      variant="empty"
                      onClick={() => handleDeleteClassroom(i)}
                      className="ml-auto"
                    >
                      <HiMiniXMark className="stroke-1 text-2xl text-red-500" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {assistants.length > 0 && (
            <div className="space-y-1 sm:col-span-2 lg:col-start-3">
              <h4 className="text-sm font-medium">Assistants list</h4>
              <ul className="scrollbar flex max-h-20 flex-col gap-1 overflow-auto rounded-lg border-2 border-primary px-2 py-1">
                {assistants.map((classroom, i) => (
                  <li key={classroom} className="flex items-center gap-2">
                    <span>{`${i + 1}.)`}</span>
                    <span>{classroom}</span>
                    <Button
                      variant="empty"
                      onClick={() => handleDeleteAssistant(i)}
                      className="ml-auto"
                    >
                      <HiMiniXMark className="stroke-1 text-2xl text-red-500" />
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-4">
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
            disabled={isLoading}
            className="sm:col-start-2 lg:col-start-4"
          >
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
