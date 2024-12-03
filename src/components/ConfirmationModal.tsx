import Button from "./Button";

type Props = {
  children: string;
  onConfirm: () => void;
  onReject: () => void;
};

export default function ConfirmationModal({
  children,
  onConfirm,
  onReject,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-primary bg-white p-4">
      <p className="font-medium">{children}</p>
      <div className="flex items-center justify-center gap-4">
        <Button onClick={onConfirm} className="basis-1/2">
          Confirm
        </Button>
        <Button variant="reject" onClick={onReject} className="basis-1/2">
          Reject
        </Button>
      </div>
    </div>
  );
}
