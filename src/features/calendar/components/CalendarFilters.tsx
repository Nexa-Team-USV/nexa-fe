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
  {
    value: "c3141a",
    text: "C - 3141A",
  },
  {
    value: "c3141b",
    text: "C - 3141B",
  },
  {
    value: "c3142a",
    text: "C - 3142A",
  },
  {
    value: "c3142b",
    text: "C - 3142B",
  },
];

export default function CalendarFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const methods = useForm({
    defaultValues: {
      studyType: searchParams.get("spec") || "",
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
            placeholder="Select studyType"
            options={studyTypeOptions}
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
