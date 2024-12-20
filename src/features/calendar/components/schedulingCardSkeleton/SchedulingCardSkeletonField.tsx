export default function SchedulingCardSkeletonField() {
  return (
    <div className="relative h-5 w-28 overflow-hidden rounded-md bg-slate-200">
      <div className="animate-skeleton shadow-skeleton absolute top-1/2 -translate-y-1/2"></div>
    </div>
  );
}
