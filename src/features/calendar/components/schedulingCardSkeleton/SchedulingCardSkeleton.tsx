import SchedulingCardSkeletonDate from "./SchedulingCardSkeletonDate";
import SchedulingCardSkeletonField from "./SchedulingCardSkeletonField";

export default function SchedulingCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-primary bg-white p-2 xsm:flex-row xsm:gap-0 xsm:pl-0 sm:items-center">
      <SchedulingCardSkeletonDate />
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm font-medium xsm:border-l-2 xsm:border-primary xsm:py-2 xsm:pl-4 sm:grid-cols-[auto_auto] md:gap-x-10 md:pl-8 lg:grid-cols-[auto_auto_auto]">
        <SchedulingCardSkeletonField />
        <SchedulingCardSkeletonField />
        <SchedulingCardSkeletonField />
        <SchedulingCardSkeletonField />
        <SchedulingCardSkeletonField />
        <SchedulingCardSkeletonField />
      </div>
    </div>
  );
}
