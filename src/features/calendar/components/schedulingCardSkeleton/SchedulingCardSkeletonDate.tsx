export default function SchedulingCardSkeletonDate() {
  return (
    <div className="flex flex-col items-center justify-center border-b-2 border-primary px-8 py-2 xsm:border-r-2 xsm:border-transparent">
      <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-200">
        <div className="animate-skeleton shadow-skeleton absolute top-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
}
