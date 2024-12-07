import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/Button";
import Label from "../../../components/Label";
import Input from "../../../components/input/Input";
import Select from "../../../components/Select";
import Message from "../../../components/Message";
import Textarea from "../../../components/Textarea";

import { ScheduleExamTest } from "../../../types/schedule.type";
import { scheduleExamTestSchema } from "../../../schemas/scheduleExamTest.schema";
import { ChangeEvent, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const typeOptions = [
  { value: "exam", text: "Exam" },
  { value: "test", text: "Test" },
];

const classroomOptions = [
  { value: "C101", text: "C101" },
  { value: "C201", text: "C201" },
  { value: "C204", text: "C204" },
  { value: "C207", text: "C207" },
];

const groupOptions = [
  { value: "3141a", text: "C - 3141A" },
  { value: "3141b", text: "C - 3141B" },
  { value: "3142a", text: "C - 3142A" },
  { value: "3142b", text: "C - 3142B" },
];

export default function ScheduleForm() {
  const methods = useForm<ScheduleExamTest>({
    defaultValues: {
      type: "",
      title: "",
      group: "",
      assistants: "",
      classroom: "",
      date: "",
      startTime: "",
      endTime: "",
      description: "",
    },
    resolver: zodResolver(scheduleExamTestSchema),
  });
  const [classrooms, setClassrooms] = useState<string[]>([]);

  const { errors } = methods.formState;

  function handleAddClassroom(e: ChangeEvent<HTMLSelectElement>) {
    setClassrooms((prev) =>
      !prev.includes(e.target.value) ? [...prev, e.target.value] : [...prev],
    );
  }

  function handleDeleteClassroom(index: number) {
    setClassrooms((prev) => [...prev.filter((_, i) => i !== index)]);
  }

  const onSubmit: SubmitHandler<ScheduleExamTest> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full max-w-4xl space-y-6 rounded-lg border-2 border-primary bg-white p-6"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-3 items-center justify-between gap-4">
          <h2 className="self-start text-lg font-bold">Schedule Form</h2>
          <div className="col-start-3 flex flex-col gap-1">
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

        <div className="grid grid-cols-3 gap-4">
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
            <Label htmlFor="assistants">Assistants</Label>
            <Input
              type="text"
              id="assistants"
              name="assistants"
              placeholder="Enter the assistants..."
            />
            {errors.assistants && (
              <Message variant="error">{errors.assistants.message}</Message>
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

          {classrooms.length > 0 && (
            <ul className="scrollbar col-span-3 row-start-4 flex max-h-32 flex-col gap-1 overflow-auto rounded-lg border-2 border-primary px-2 py-1">
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
          )}

          <div className="col-span-3 flex flex-col gap-1">
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
