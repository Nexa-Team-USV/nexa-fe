import { FormProvider, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import Label from "../../../components/Label";
import Input from "../../../components/input/Input";
import Select from "../../../components/Select";
import { twMerge } from "tailwind-merge";

interface ScheduleFormValues {
  type: string;
  professor: string;
  assistant: string;
  subject: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  room: string;
}

export default function ScheduleForm() {
  const methods = useForm<ScheduleFormValues>({
    defaultValues: {
      type: "",
      professor: "",
      assistant: "",
      subject: "",
      date: "",
      startTime: "",
      endTime: "",
      description: "",
      room: "",
    },
  });

  const assistantOptions = [
    { value: "JohnDoe", text: "John Doe" },
    { value: "JaneSmith", text: "Jane Smith" },
    { value: "MichaelBrown", text: "Michael Brown" },
    { value: "LisaWhite", text: "Lisa White" },
  ];

  const roomOptions = [
    { value: "C101", text: "C - C101" },
    { value: "C201", text: "C - C201" },
    { value: "C204", text: "C - C204" },
  ];
  const groupOptions = [
    { value: "3141a", text: "C - 3141A" },
    { value: "3141b", text: "C - 3141B" },
    { value: "3142a", text: "C - 3142A" },
    { value: "3142b", text: "C - 3142B" },
  ];
  const { handleSubmit, register, setValue, watch } = methods;

  const onSubmit = (data: ScheduleFormValues) => {
    console.log("Schedule Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="h-auto w-full max-w-md rounded-lg border-2 border-primary bg-white p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-4 text-lg font-bold">Schedule Form</h2>

        <div className="mb-4 flex gap-2 rounded-lg border-2 border-primary bg-secondary p-1">
          <label className="flex-1 cursor-pointer">
            <input
              type="radio"
              value="exam"
              {...register("type")}
              className="hidden"
            />
            <div
              className={twMerge(
                "inline-block w-full rounded-lg px-4 py-1 text-center font-medium text-primary transition-colors",
                watch("type") === "exam" ? "bg-white" : "",
              )}
            >
              Exam
            </div>
          </label>
          <label className="flex-1 cursor-pointer">
            <input
              type="radio"
              value="test"
              {...register("type")}
              className="hidden"
            />
            <div
              className={twMerge(
                "inline-block w-full rounded-lg px-4 py-1 text-center font-medium text-primary transition-colors",
                watch("type") === "test" ? "bg-white" : "",
              )}
            >
              Test
            </div>
          </label>
        </div>

        <div className="mb-4">
          <Label htmlFor="professor">Professor</Label>
          <Input
            id="professor"
            {...register("professor", {
              required: "Professor name is required",
            })}
            placeholder="Enter the professor's name"
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              placeholder="Enter the subject name"
            />
          </div>

          <div className="flex-1">
            <div>
              <Label htmlFor="group">Group</Label>
            </div>
            <Select
              id="group"
              name="group"
              placeholder="Select a group"
              options={groupOptions}
              className="w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            {...register("date", { required: "Date is required" })}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="startTime">Start Time</Label>
          <Input
            id="startTime"
            type="time"
            {...register("startTime", { required: "Start time is required" })}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="endTime">End Time</Label>
          <Input
            id="endTime"
            type="time"
            {...register("endTime", { required: "End time is required" })}
          />
        </div>

        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <Select
              id="assistant"
              name="assistant"
              placeholder="Select an assistant"
              options={assistantOptions}
              onChange={(e) => setValue("assistant", e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <Select
              id="room"
              name="room"
              placeholder="Select room"
              options={roomOptions}
              onChange={(e) => setValue("room", e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            className="w-full rounded border px-2 py-1"
            {...register("description")}
            placeholder="Provide additional details (optional)"
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
}
