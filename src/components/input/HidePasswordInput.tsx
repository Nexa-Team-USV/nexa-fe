import Input from "./Input";
import Label from "../Label";
import Message from "../Message";

type Props = {
  error?: string;
};

export default function HidePasswordInput({ error }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        name="password"
        placeholder="Enter your password..."
      />
      {error && <Message variant="error">{error}</Message>}
    </div>
  );
}
