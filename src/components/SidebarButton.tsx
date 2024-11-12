import { useState } from "react";
import { createPortal } from "react-dom";

import { HiMiniBars3 } from "react-icons/hi2";
import Sidebar from "./Sidebar";

export default function SidebarButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <HiMiniBars3 className="stroke-1 text-2xl text-white" />
      </button>

      {createPortal(
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />,
        document.body,
      )}
    </>
  );
}
