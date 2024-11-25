import { useState } from "react";

import Input from "./Input";
import Label from "../Label";
import Message from "../Message";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";

type Props = {
  error?: string;
};

export default function HidePasswordInput({ error }: Props) {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="password">Password</Label>
      <Input
        type={isHidden ? "password" : "text"}
        name="password"
        placeholder="Enter your password..."
        rightIcon={isHidden ? <HiMiniEye /> : <HiMiniEyeSlash />}
        onRightIconClick={() => setIsHidden((prev) => !prev)}
      />
      {error && <Message variant="error">{error}</Message>}
    </div>
  );
}
