import { ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";

import Label from "../../../components/Label";
import Select from "../../../components/Select";
import Button from "../../../components/Button";

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

export default function CalendarFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const methods = useForm({
    defaultValues: {
      studyType: searchParams.get("studyType") || "",
      group: searchParams.get("group") || "",
    },
  });

  const { reset } = methods;

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

    searchParams.delete("studyType");
    searchParams.delete("group");
    setSearchParams(searchParams);

    reset({ studyType: "", group: "" });
  }

  return (
    <FormProvider {...methods}>
      <form className="grid grid-cols-1 gap-2 xsm:grid-cols-2 xsm:gap-4 sm:grid-cols-3 sm:items-end sm:gap-x-4 md:grid-cols-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="studyType">Study type</Label>
          <Select
            id="studyType"
            name="studyType"
            placeholder="Select study type"
            options={studyTypeOptions}
            onChange={(e) => handleFilterSelect(e, "studyType")}
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
