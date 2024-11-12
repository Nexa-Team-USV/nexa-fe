import { FormProvider, useForm } from "react-hook-form";

export default function ScheduleForm() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className="h-1/2 w-1/3 rounded-lg border-2 border-primary bg-white">
        ScheduleForm
      </form>
    </FormProvider>
  );
}
