import { ChangeEvent, FormEvent } from "react";

import { FormProvider, useForm } from "react-hook-form";
import Label from "../../components/Label";
import Select from "../../components/Select";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/Button";

const specializationOptions = [
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
  {
    value: "3141a",
    text: "C - 3141A",
  },
  {
    value: "3141b",
    text: "C - 3141B",
  },
  {
    value: "3142a",
    text: "C - 3142A",
  },
  {
    value: "3142b",
    text: "C - 3142B",
  },
];

export default function CalendarFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const methods = useForm({
    defaultValues: {
      specialization: searchParams.get("spec") || "",
      group: searchParams.get("group") || "",
    },
  });

  function handleFilterSelect(
    e: ChangeEvent<HTMLSelectElement>,
    filter: string,
  ) {
    searchParams.delete(filter);
    searchParams.append(filter, e.target.value);
    setSearchParams(searchParams);
  }

  function resetFilters(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { reset } = methods;

    searchParams.delete("spec");
    searchParams.delete("group");
    setSearchParams(searchParams);

    reset({ specialization: "", group: "" });
  }

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 gap-2 xsm:grid-cols-2 xsm:gap-4 sm:grid-cols-3 sm:items-end sm:gap-x-4 md:grid-cols-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="specialization">Specialization</Label>
          <Select
            id="specialization"
            name="specialization"
            placeholder="Select specialization"
            options={specializationOptions}
            onChange={(e) => handleFilterSelect(e, "spec")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="group">Group</Label>
          <Select
            id="group"
            name="group"
            placeholder="Select group"
            options={groupOptions}
            onChange={(e) => handleFilterSelect(e, "group")}
          />
        </div>

        <Button onClick={resetFilters} className="md:col-start-4">
          Reset
        </Button>
      </form>
    </FormProvider>
  );
}
