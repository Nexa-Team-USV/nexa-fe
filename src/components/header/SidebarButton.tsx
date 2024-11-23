import { useState } from "react";
import { createPortal } from "react-dom";

import { HiMiniBars3 } from "react-icons/hi2";
import Sidebar from "./Sidebar";
import Button from "../Button";

export default function SidebarButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="empty"
        onClick={() => setIsOpen(true)}
        className="md:hidden"
      >
        <HiMiniBars3 className="stroke-1 text-2xl text-white" />
      </Button>

      {createPortal(
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />,
        document.body,
      )}
    </>
  );
}
